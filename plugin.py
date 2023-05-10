import argparse
import asyncio
import copy
import json
from dataclasses import dataclass
from typing import Any, Literal, Optional, Dict

import aiohttp
import requests
import yaml
from pydantic import BaseModel
from pydantic.dataclasses import dataclass
from typing import Literal

ObjectName = str
FunctionName = str
Arg = str
ResolvedSchema = dict
ObjectInfo = dict

Location = Literal["path", "query", "body", "header"]

V0_SIMPLE_DASHES = "v0_simple_dashes"
V1_LOAD_DEFAULTS_CORRECTLY_NO_DASH_SPACE_PERIOD = "v1_load_defaults_correctly_no_dash_space_period"
V2_RENDER_OBJS_FIX_BOOL_REMOVE_DEFAULT_RESOLVE_PARAM = "v2_render_dependent_objects"  # render objects (in type signature and definition), fix boolean params, remove default value insert, and resolve param

OpenApiParserVersion = Literal[
    V0_SIMPLE_DASHES,
    V1_LOAD_DEFAULTS_CORRECTLY_NO_DASH_SPACE_PERIOD,
    V2_RENDER_OBJS_FIX_BOOL_REMOVE_DEFAULT_RESOLVE_PARAM,
]
"""
 - path: a parameter passed in the url, as in the `author` in `api.openai.com/list-papers/{author}`
 - query: an HTTP query parameters, as in the `author` in `api.openai.com/list-papers/?author=foo`
 - body: the body parameters of a POST request
 - header: a (meta-)parameter to pass via the HTTP header.
"""


# @dataclass
class FunctionInfo(BaseModel):
    description: Optional[str] = None


# @dataclass
class HttpArgInfo(BaseModel):
    location: Location
    resolved_schema: ResolvedSchema
    required: bool
    default: Any
    description: Optional[str] = None


# @pydantic.dataclass
class HttpFunctionInfo(FunctionInfo):
    """Info about an HTTP function where we show the model the raw response text returned by the HTTP endpoint."""
    args: dict[Arg, HttpArgInfo]
    method: str
    url: str


# @dataclass
class HttpChatFunctionInfo(HttpFunctionInfo):
    url: str


@dataclass
class HttpObjectInfo(ObjectInfo):
    args: Dict


class FunctionParsingError(Exception):
    """Unable to parse some method."""


class ParsingError(Exception):
    """Unable to parse some method."""


class OpenAPISpec(BaseModel):
    functions: dict[FunctionName, FunctionInfo]
    objects: Optional[dict[ObjectName, ObjectInfo]]
    # This is really "OpenAPI renderer version" but that would be inconsistent with the db values and this code will
    # probably be deprecated in a few weeks.
    openapi_parser_version: OpenApiParserVersion
    description: Optional[str] = None

    def __init__(self, **data: Any):
        # there appears to be a pydantic bug where HTTPFunctionInfo gets force
        # casted to HTTPChatFunctionInfo on init. This is sensitive to the
        # ordering of types in FunctionInfo: if HTTPFunctionInfo is first, it
        # gets casted to HTTPChatFunctionInfo, and vice versa.
        original_functions = copy.deepcopy(data["functions"])
        super().__init__(**data)
        self.functions = original_functions

    def typescript_prompt_string(
            self,
            namespace: str,
    ) -> str:
        result = ""
        if self.description:
            result += comment_content(self.description) + "\n\n"
        result += f"namespace {namespace} {{\n\n"

        for function_name, info in self.functions.items():
            if info.description is not None:
                result += comment_content(info.description) + "\n"
            result += f"type {function_name} = ("
            if isinstance(info, HttpFunctionInfo):
                args_string = self._http_args_string(info.args)
            elif isinstance(info, HttpChatFunctionInfo):
                args_string = self._chat_args_string()
            else:
                args_string = ""
            if args_string:
                result += "_: {\n" + args_string + "}"
            result += ") => any;\n\n"

        if self.openapi_parser_version == "v2_render_dependent_objects":
            for object_name, info in self.objects.items():
                result += f"interface {object_name} {{"
                args_string = self._http_args_string(info.args, arg_delimiter=";")
                if args_string:
                    result += f"\n{args_string}"
                result += "};\n\n"

        result += f"}} // namespace {namespace}"
        return result

    def _http_args_string(self, args: dict[Arg, HttpArgInfo], arg_delimiter=",") -> str:
        result = ""
        for arg, arg_info in args.items():
            if arg_info.description:
                result += comment_content(arg_info.description) + "\n"
            result += f"{arg}{'' if arg_info.required else '?'}: "
            if "type" in arg_info.resolved_schema:
                if arg_info.resolved_schema["type"] == "array":
                    if "type" in arg_info.resolved_schema["items"]:
                        ty = arg_info.resolved_schema["items"]["type"]
                        if (
                                ty == "object"
                                and "type_name" in arg_info.resolved_schema["items"]
                                and self.openapi_parser_version == "v2_render_dependent_objects"
                        ):
                            ty = arg_info.resolved_schema["items"]["type_name"]
                        result += f"{ty}[]"
                    elif "oneOf" in arg_info.resolved_schema["items"]:
                        result += (
                                " | ".join(
                                    [s["type"] for s in arg_info.resolved_schema["items"]["oneOf"]]
                                )
                                + "[]"
                        )
                else:
                    if arg_info.resolved_schema["type"] == "string":
                        result += parse_string_schema(arg_info.resolved_schema)
                    elif (
                            arg_info.resolved_schema["type"] == "object"
                            and "type_name" in arg_info.resolved_schema
                            and self.openapi_parser_version == "v2_render_dependent_objects"
                    ):
                        result += arg_info.resolved_schema["type_name"]
                    else:
                        result += arg_info.resolved_schema["type"]
            elif "oneOf" in arg_info.resolved_schema:
                result += " | ".join([s["type"] for s in arg_info.resolved_schema["oneOf"]])
            else:
                raise RuntimeError
            result += arg_delimiter
            if arg_info.default is not None:
                result += f" // default: {arg_info.default}"
            result += "\n"
        return result

    @staticmethod
    def _chat_args_string() -> str:
        return "message: ChatMessage,\n"


class OpenApiParser(BaseModel):
    openapi_parser_version: OpenApiParserVersion

    def _resolve_schema(self, schema: dict, schemas: dict[str, Any]) -> dict:
        schema = copy.deepcopy(schema)
        if schema == {}:
            return schema
        if "$ref" in schema:
            ref = schema["$ref"].split("/")[-1]
            result = self._resolve_schema(schemas[ref], schemas)
            result["type_name"] = ref
            return result
        if "oneOf" in schema:
            schema["oneOf"] = [self._resolve_schema(s, schemas) for s in schema["oneOf"]]
            return schema
        if "type" in schema:
            if schema["type"] == "array":
                schema["items"] = self._resolve_schema(schema["items"], schemas)
                return schema
            if schema["type"] == "object":
                if "properties" not in schema:
                    # XXX(andrey): Is this correct?
                    schema["properties"] = {}
                for prop, prop_schema in schema["properties"].items():
                    schema["properties"][prop] = self._resolve_schema(prop_schema, schemas)
                return schema
            if schema["type"] in ["string", "integer", "number", "boolean"]:
                return schema
        if "schema" in schema:
            return schema["schema"]
        raise FunctionParsingError(f"Unable to resolve schema {schema}")

    def _resolve_param(self, components, param: dict) -> dict:
        param_path = param["$ref"].replace("#/components/", "")
        outer = components
        for k in param_path.split("/"):
            outer = outer[k]
            param = outer
        return param

    def _args_info(
            self, openapi: dict[str, Any], path: str, method: str, schemas: dict, components
    ) -> dict[Arg, HttpArgInfo]:
        if method == "parameters":
            return {}

        method_schema = copy.deepcopy(openapi["paths"][path][method])
        result = {}
        parameters = method_schema.get("parameters", [])
        # idk why some openapi specs place some parameters here as well.
        parameters += copy.deepcopy(openapi["paths"][path].get("parameters", []))
        for param in parameters:
            if "$ref" in param:
                param = self._resolve_param(components, param)
            required = param.get("required", False)
            location = param.get("in", None)
            if location is None:
                if "{" in path:
                    location = "path"
                else:
                    raise ParsingError(f"In {path} {method}: param has no 'in' key.")
            if "in" in param and param["in"] not in ["path", "query", "body", "header"]:
                raise ParsingError(f"In {path} {method}: unrecognized parameter type: {param}")
            arg = param["name"]
            if "$ref" in param:
                schema = self._resolve_schema(param, schemas)
                if "required" in schema:
                    required = schema["required"]
            else:
                schema = param.get("schema", param.get("items", None))
                if schema is None:
                    """
                    special case: some API specs do (e.g.)
                    {
                        "type": "string",
                        ...
                    }
                    instead of the expected
                    {
                        "schema": {...}
                        ...
                    }
                    """
                    if "type" in param:
                        schema = {"type": param["type"]}
                    else:
                        raise ParsingError(f"Unable to fine schema in param {param}")
                else:
                    schema = self._resolve_schema(schema, schemas)
            if (
                    self.openapi_parser_version
                    == "v1_render_dependent_objects_with_default_and_description"
            ):
                default = schema.get("default", param.get("default"))
                description = param.get("description", schema.get("description"))
            else:
                default = param.get("default")
                description = param.get("description")
            result[arg] = HttpArgInfo(
                location=location,
                resolved_schema=schema,
                required=required,
                default=default,
                description=description,
            )
        if "requestBody" in method_schema:
            request_body = method_schema["requestBody"]
            content = request_body.get("content")
            if not content:
                raise ParsingError(f"In {path} {method}: missing or empty content in request body")
            if "application/json" in content:
                schema = content["application/json"].get("schema")
                if not schema:
                    raise ParsingError(
                        f"In {path} {method}: missing or empty schema in application/json request body"
                    )
                schema = self._resolve_schema(schema, schemas)
                if schema["type"] != "object":
                    raise ParsingError(
                        f"In {path} {method}: application/json request body must be an object"
                    )
                for prop, prop_schema in schema["properties"].items():
                    arg = prop
                    required = prop_schema.get("required", False)
                    default = prop_schema.get("default", None)
                    result[arg] = HttpArgInfo(
                        location="body",
                        resolved_schema=prop_schema,
                        required=required,
                        default=default,
                        description=prop_schema.get("description", None),
                    )
        return result

    def parse(
            self,
            openapi: dict,
            openapi_url: Optional[str] = None,
            backup_base_url: Optional[str] = None,
    ) -> Optional[OpenAPISpec]:
        """Convert an openapi spec into a spec.

        :param openapi: OpenAPI spec.
        :param openapi_url: Source of the OpenAPI spec.
        :param backup_base_url: The base API url in case the openapi spec doesn't have a base url for the API.
        :return:
        """
        # TODO: decide if I should enforce that base_url has no trailing slash. Is that part of the OpenAPI spec?
        if "servers" in openapi:
            base_url = openapi["servers"][0]["url"]
        elif "host" in openapi and "basePath" in openapi:
            if "basePath" in openapi:
                base_url = openapi["host"] + openapi["basePath"]
                base_url = base_url.rstrip("/")
            else:
                base_url = openapi["host"].rstrip("/")
        elif backup_base_url:
            base_url = backup_base_url.rstrip("/")
        elif openapi_url:
            # last-case resort: assume that the api url for `foo.com/bar/swagger.json` is `foo.com/bar`
            base_url = "/".join(openapi_url.rstrip("/").split("/")[:-1])
        else:
            return None

        if base_url.startswith("/"):
            base_url = "/".join(openapi_url.rstrip("/").split("/")[:-1])
        if not base_url.startswith("https://") and not base_url.startswith("http://"):
            base_url = "https://" + base_url

        components = openapi.get("components", {})
        schemas = components.get("schemas", components.get("parameters", {}))
        if not schemas:
            schemas = openapi.get("definitions", {})

        functions = dict[FunctionName, FunctionInfo]()
        unique_replacement_operation_ids = set()
        for path in openapi["paths"]:
            for method in openapi["paths"][path]:
                if method not in ["get", "post", "put", "patch", "delete"]:
                    continue
                method_info = openapi["paths"][path][method]
                if isinstance(method_info, list):
                    method_info = method_info[0]
                    # idk why this happens
                operationId = method_info.get("operationId")
                if not operationId:
                    if self.openapi_parser_version == "v0_simple_dashes":
                        operationId = (
                            path.lstrip("/")
                            .replace("/", "-")
                            .replace("{", "")
                            .replace("}", "")
                            .replace("_", "-")
                            .lower()
                        )
                    elif self.openapi_parser_version != "v0_simple_dashes":
                        operationId = (
                            path.lstrip("/")
                            .replace("/", "_")
                            .replace("{", "")
                            .replace("}", "")
                            .replace("-", "_")
                            .replace(".", "_")
                            .replace(" ", "_")
                            .strip("-_")
                            .lower()
                        )
                    else:
                        return None
                    if operationId in unique_replacement_operation_ids:
                        continue
                    unique_replacement_operation_ids.add(operationId)
                oaiMeta = method_info.get("x-oaiMeta", {})
                if oaiMeta.get("pluginRouteType") == "chat":
                    if method.lower() != "post":
                        raise ParsingError(f"In {path} {method}: chat functions must be POST")
                    functions[operationId] = HttpChatFunctionInfo(url=base_url + path)
                else:
                    try:
                        functions[operationId] = HttpFunctionInfo(
                            args=self._args_info(openapi, path, method, schemas, components),
                            url=base_url + path,
                            method=method,
                            description=method_info.get("description", None),
                        )
                    except FunctionParsingError:
                        pass
        if self.openapi_parser_version == "v2_render_dependent_objects":
            objects = self._parse_objects(functions, schemas)
        else:
            objects = None
        # add definitions for dependent types (e.g. if a function takes an input
        # type, we need to add it to the schema)

        description = None
        if "info" in openapi:
            if "description" in openapi["info"]:
                description = openapi["info"]["description"]
            elif "title" in openapi["info"]:
                description = openapi["info"]["title"]
        elif "summary" in openapi:
            description = openapi["summary"]
        return OpenAPISpec(
            functions=functions,
            objects=objects,
            description=description,
            openapi_parser_version=self.openapi_parser_version,
        )

    def _parse_objects(self, functions: dict[FunctionName, FunctionInfo], schemas: dict[str, Any]):
        objects = dict()

        def get_dependent_types(result, info):
            if "type_name" in info:
                result.append(info["type_name"])
            for k, v in info.items():
                if k == "type_name":
                    continue
                if isinstance(v, dict):
                    get_dependent_types(result, v)

        all_dependent_types = []
        for finfo in functions.values():
            if not isinstance(finfo, HttpFunctionInfo):
                continue
            for ainfo in finfo.args.values():
                get_dependent_types(all_dependent_types, ainfo.resolved_schema)
        for dty in all_dependent_types:
            if dty not in schemas:
                raise ParsingError(
                    f"Functions depend on input type {dty}, but it is not defined in components/schemas"
                )
            dty_schema = self._resolve_schema(schemas[dty], schemas)
            arg_infos = dict()
            for prop, prop_schema in dty_schema.get("properties", dict()).items():
                arg = prop
                if "required" in dty_schema:
                    required = prop in dty_schema["required"]
                elif "required" in prop_schema and isinstance(prop_schema["required"], bool):
                    required = prop_schema["required"]
                else:
                    required = False

                default = prop_schema.get("default", None)
                arg_infos[arg] = HttpArgInfo(
                    location="body",
                    resolved_schema=prop_schema,
                    required=required,
                    default=default,
                    description=prop_schema.get("description", None),
                )
            if arg_infos:
                objects[dty] = HttpObjectInfo(args=arg_infos)
        return objects


def comment_content(content: str, indent="") -> str:
    """This strips all trailing new lines so that caller should decide how many new lines to add."""
    return "".join(
        [
            f"{indent}// {clean_line}\n"
            for line in content.strip().split("\n")
            if (clean_line := line.strip())
        ]
    ).rstrip("\n")


def parse_string_schema(schema: dict) -> str:
    """
    If it's an enum, define the value as the union of enum values
    Otherwise, return 'string'

    schema:
      type: string
      -> string

    schema:
      type: string
      enum: [asc, desc]
      -> 'asc' | 'desc'
    """
    if "enum" not in schema:
        return "string"

    enum_values = schema["enum"]
    if not isinstance(enum_values, list):
        return "string"

    if not enum_values:
        return "string"

    enum_values_str = "|".join(f"'{value}'" for value in enum_values)
    return f"({enum_values_str})"


class Plugin(object):
    def __init__(
            self,
            name: str,
            internal_minispec: OpenAPISpec,
            http_timeout=120,
    ):
        self.recipient_to_function_info: dict[str, HttpFunctionInfo] = dict()
        for function_name, function in internal_minispec.functions.items():
            self.recipient_to_function_info[f"{name}.{function_name}"] = function
        self.timeout = http_timeout
        self.internal_minispec = internal_minispec
        self.name = name

    def get_prompt_text(self) -> str:
        return self.internal_minispec.typescript_prompt_string(self.name)

    async def _process(self, recipient, text):
        function_info = self.recipient_to_function_info.get(recipient)
        if function_info is None:
            print(f"Unable to find recipient {recipient}")
        # Build the request.
        headers = {"Content-type": "application/json"}
        body = {}
        query = {}
        http_url: str = function_info.url
        arg_values = json.loads(text)
        http_path_substitution_kwargs = {}
        for arg, info in function_info.args.items():
            value = arg_values.get(arg)
            if value is None:
                continue
            if type(value) is bool:
                value = str(value).lower()
            if info.location == "header":
                headers[arg] = value
            elif info.location == "body":
                body[arg] = value
            elif info.location == "query":
                query[arg] = value
            elif info.location == "path":
                # For example, fill in the `area` in a URL like `/getInfo/{area}`
                http_path_substitution_kwargs[arg] = value
            else:
                raise ValueError(f"Unknown location {info.location=}")
        if http_path_substitution_kwargs:
            http_url = http_url.format(**http_path_substitution_kwargs)
        method = function_info.method
        async with aiohttp.ClientSession() as session:
            fn: Any = {
                "get": session.get,
                "post": session.post,
                "put": session.put,
                "delete": session.delete,
                "patch": session.patch,
            }.get(method)

            if not fn:
                raise ValueError(f"Unrecognized {method=}")

            fn_args = {
                "url": http_url,
                "headers": headers,
                "timeout": self.timeout,
            }

            if body and method in ["post", "put", "patch"]:
                fn_args["data"] = json.dumps(body)
            if query:
                fn_args["params"] = query

            async with fn(**fn_args) as response:
                response_text = await response.text()
                try:
                    response_text = json.dumps(json.loads(response_text), indent=2)
                except json.JSONDecodeError:
                    pass

        return response_text, response.status

    async def process(self, text: str, recipient: str):
        response_text, _ = await self._process(recipient, text)
        return response_text

    async def process_for_test(self, text: str, recipient: str):
        response_text, status = await self._process(recipient, text)
        return response_text, status


def load_spec(path: str) -> Dict:
    """
    Loads local or remote json and yaml spec files into a dictionary
    :param path:
    :return:
    """
    if path.startswith("http"):
        ext = path.split(".")[-1]
        r = requests.get(path)
        openapi_text = r.text
        if ext is None:
            ext = input(f"Enter extension for {path}")
        if ext.lower() == "json":
            openapi = json.loads(openapi_text)
        elif ext.lower() == "yaml":
            openapi = yaml.safe_load(openapi_text)
        else:
            openapi = yaml.safe_load(openapi_text)
    else:
        with open(path, "r") as stream:
            try:
                openapi = yaml.safe_load(stream)
            except yaml.YAMLError as exc:
                print(exc)
                openapi = None

    return openapi

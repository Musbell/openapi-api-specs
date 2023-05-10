import argparse
import asyncio
import copy
import json
from dataclasses import dataclass
from typing import Any, Literal, Optional

import aiohttp
import requests
import yaml

FunctionName = str
Arg = str
ResolvedSchema = dict

Location = Literal["path", "query", "body", "header"]
"""
 - path: a parameter passed in the url, as in the `author` in `api.openai.com/list-papers/{author}`
 - query: an HTTP query parameters, as in the `author` in `api.openai.com/list-papers/?author=foo`
 - body: the body parameters of a POST request
 - header: a (meta-)parameter to pass via the HTTP header.
"""


@dataclass
class HttpArgInfo:
    location: Location
    resolved_schema: ResolvedSchema
    required: bool
    default: Any
    description: Optional[str] = None


@dataclass
class HttpFunctionInfo:
    """Info about an HTTP function where we show the model the raw response text returned by the HTTP endpoint."""
    args: dict[Arg, HttpArgInfo]
    method: str
    url: str
    description: Optional[str] = None


class FunctionParsingError(Exception):
    """Unable to parse some method."""


class ParsingError(Exception):
    """Unable to parse some method."""



@dataclass
class OpenAPISpec:
    functions: dict[FunctionName, HttpFunctionInfo]
    description: Optional[str] = None

    @staticmethod
    def _http_args_string(args: dict[Arg, HttpArgInfo]) -> str:
        result = ""
        for arg, arg_info in args.items():
            if arg_info.description:
                result += comment_content(arg_info.description) + "\n"
            result += f"{arg}{'' if arg_info.required else '?'}: "
            if "type" in arg_info.resolved_schema:
                if arg_info.resolved_schema["type"] == "array":
                    if "type" in arg_info.resolved_schema["items"]:
                        result += f"{arg_info.resolved_schema['items']['type']}[]"
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
                    else:
                        result += arg_info.resolved_schema["type"]
            elif "oneOf" in arg_info.resolved_schema:
                result += " | ".join([s["type"] for s in arg_info.resolved_schema["oneOf"]])
            else:
                raise RuntimeError
            result += ","
            if arg_info.default is not None:
                result += f" // default: {arg_info.default}"
            result += "\n"
        return result

    @staticmethod
    def _chat_args_string() -> str:
        return "message: ChatMessage,\n"

    def typescript_prompt_string(self, namespace: str) -> str:
        result = ""
        if self.description:
            result += comment_content(self.description) + "\n\n"
        result += f"namespace {namespace} {{\n\n"

        for function_name, info in self.functions.items():
            if info.description is not None:
                result += comment_content(info.description) + "\n"
            result += f"type {function_name} = ("
            args_string = OpenAPISpec._http_args_string(info.args)
            if args_string:
                result += "_: {\n" + args_string + "}"
            result += ") => any;\n\n"

        result += f"}} // namespace {namespace}"
        return result

    @staticmethod
    def from_openapi(
            openapi: dict,
            openapi_url: Optional[str] = None,
    ) -> Optional["OpenAPISpec"]:
        """Convert an openapi spec into a spec."""
        if "servers" in openapi:
            base_url = openapi["servers"][0]["url"]
        elif "host" in openapi and "basePath" in openapi:
            base_url = openapi["host"] + openapi["basePath"]
            base_url = base_url.rstrip("/")
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

        def resolve_schema(schema: dict) -> dict:
            schema = copy.deepcopy(schema)
            if schema == {}:
                return schema
            if "$ref" in schema:
                ref = schema["$ref"].split("/")[-1]
                return resolve_schema(schemas[ref])
            if "oneOf" in schema:
                schema["oneOf"] = [resolve_schema(s) for s in schema["oneOf"]]
                return schema
            if "type" in schema:
                if schema["type"] == "array":
                    schema["items"] = resolve_schema(schema["items"])
                    return schema
                if schema["type"] == "object":
                    if "properties" not in schema:
                        # XXX(andrey): Is this correct?
                        schema["properties"] = {}
                    for prop, prop_schema in schema["properties"].items():
                        schema["properties"][prop] = resolve_schema(prop_schema)
                    return schema
                if schema["type"] in ["string", "integer", "number", "boolean"]:
                    return schema
            if "schema" in schema:
                return schema["schema"]
            raise FunctionParsingError(f"Unable to resolve schema {schema}")

        def args_info(path: str, method: str) -> dict[Arg, HttpArgInfo]:
            if method == "parameters":
                return {}

            method_schema = copy.deepcopy(openapi["paths"][path][method])
            result = {}
            parameters = method_schema.get("parameters", [])
            # idk why some openapi specs place some parameters here as well.
            parameters += copy.deepcopy(openapi["paths"][path].get("parameters", []))
            for param in parameters:
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
                    schema = resolve_schema(param)
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
                        schema = resolve_schema(schema)
                default = schema.get("default", param.get("default"))
                description = param.get("description", schema.get("description"))
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
                    raise ParsingError(
                        f"In {path} {method}: missing or empty content in request body"
                    )
                if "application/json" in content:
                    schema = content["application/json"].get("schema")
                    if not schema:
                        raise ParsingError(
                            f"In {path} {method}: missing or empty schema in application/json request body"
                        )
                    schema = resolve_schema(schema)
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

        functions = dict[FunctionName, HttpFunctionInfo]()
        for path in openapi["paths"]:
            for method in openapi["paths"][path]:
                if method not in ["get", "post", "put", "patch", "delete"]:
                    continue
                method_info = openapi["paths"][path][method]
                if isinstance(method_info, list):
                    method_info = method_info[0]
                operationId = method_info.get("operationId")
                if not operationId:
                    raise ValueError("operationId missing!")
                if "." in operationId or " " in operationId or "-" in operationId:
                    raise ValueError("Cannot have period or space in operationId. Please replace with underscores.")
                try:
                    functions[operationId] = HttpFunctionInfo(
                        args=args_info(path, method),
                        url=base_url + path,
                        method=method,
                        description=method_info.get("description", None),
                    )
                except FunctionParsingError:
                    pass

        description = None
        if "info" in openapi:
            if "description" in openapi["info"]:
                description = openapi["info"]["description"]
            elif "title" in openapi["info"]:
                description = openapi["info"]["title"]
        elif "summary" in openapi:
            description = openapi["summary"]
        return OpenAPISpec(functions=functions, description=description)


class Plugin(object):
    def __init__(
            self,
            name: str,
            internal_minispec: OpenAPISpec,
            http_timeout=120,
    ):
        self.recipient_to_function_info: dict[str, HttpFunctionInfo] = {}
        for function_name, function in internal_minispec.functions.items():
            self.recipient_to_function_info[f"{name}.{function_name}"] = function
        self.timeout = http_timeout
        self.internal_minispec = internal_minispec
        self.name = name

    def get_prompt_text(self) -> str:
        return self.internal_minispec.typescript_prompt_string(self.name)

    async def process(self, text: str, recipient: str):
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
            value = arg_values.get(arg, info.default)
            if value is None:
                continue
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
        return response_text


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


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("url", type=str)
    parser.add_argument("--plugin_name", type=str, default="placeholder")
    parser.add_argument("--recipient", type=str)
    parser.add_argument("--text", type=str)
    args = parser.parse_args()
    openapi_url = args.url

    ext = openapi_url.split(".")[-1]

    r = requests.get(openapi_url)
    openapi_text = r.text

    if ext.lower() == "json":
        openapi = json.loads(openapi_text)
    elif ext.lower() == "yaml":
        openapi = yaml.safe_load(openapi_text)
    else:
        raise ValueError(f"Unrecognized extension: {ext}")
    plugin_name = args.plugin_name

    spec = OpenAPISpec.from_openapi(openapi, openapi_url=openapi_url)
    print(spec.typescript_prompt_string(plugin_name))
    plugin = Plugin(name=plugin_name, internal_minispec=spec)
    example_recipient = list(plugin.recipient_to_function_info.keys())[0]

    recipient = args.recipient
    while recipient is None:
        recipient = input(f"\nexample recipient (e.g. `{example_recipient}`)?\n")
        if recipient not in plugin.recipient_to_function_info:
            print(f"Invalid recipient `{recipient}`. Value recipients:")
            recipient = None
            for k in sorted(plugin.recipient_to_function_info):
                print(k)
    if args.text:
        text = args.text
    else:
        text = input('\nexample message text (e.g. `{"foo": "bar"}`)?\n')
    response = await plugin.process(text, recipient)
    print("\n************ Response from plugin tool: ************")
    print(response)


if __name__ == "__main__":
    asyncio.run(main())
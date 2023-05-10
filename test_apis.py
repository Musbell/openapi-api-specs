import asyncio
import csv
import json
from dataclasses import asdict
from dataclasses import dataclass
from json import JSONDecodeError
from typing import Tuple
from typing import Dict, List

from plugin import Plugin, OpenAPISpec, load_spec, OpenApiParser

_SPECS_MAP = {}
_PLUGINS_MAP = {}
_OPENAPI_MAP = {}


@dataclass
class TestResult:
    plugin_name: str
    open_api_spec: str
    operationId: str
    payload: str
    response: str
    status_code: int


async def _get_openapi_spec(api_spec_path, plugin_name):
    api_spec = _SPECS_MAP.get(plugin_name)
    if api_spec is None:
        api_spec = load_spec(api_spec_path)
        # api_spec = load_api_spec(api_spec_path)
        _SPECS_MAP[plugin_name] = api_spec
    openapi_spec = _OPENAPI_MAP.get(plugin_name)
    if openapi_spec is None:
        openapi_spec: OpenAPISpec = OpenApiParser(openapi_parser_version="v2_render_dependent_objects").parse(api_spec)
        _OPENAPI_MAP[plugin_name] = openapi_spec
    return openapi_spec


async def _get_plugin(openapi_spec, plugin_name):
    plugin = _PLUGINS_MAP.get(plugin_name)
    if plugin is None:
        plugin = Plugin(name=plugin_name, internal_minispec=openapi_spec)
        _PLUGINS_MAP[plugin_name] = plugin
    return plugin


async def _test_api_with_empty_payloads(plugin_name, api_spec_path) -> Tuple[List[Dict], List[str]]:
    test_results = []
    apis_that_need_payload = []
    openapi_spec = await _get_openapi_spec(api_spec_path, plugin_name)
    plugin = await _get_plugin(openapi_spec, plugin_name)

    for function, http_function_info in openapi_spec.functions.items():
        required_param = False
        for arg, http_arg_info in http_function_info.args.items():
            if http_arg_info.required:
                required_param = True
                break
        if not required_param:
            payload = '{}'
            print(f"Testing {function} with payload - {payload}")
            response, status_code = await plugin.process_for_test(payload, plugin_name + "." + function)
            try:
                json_data = json.loads(response)  # store in json structure
                json_string = json.dumps(json_data, separators=(',', ":"))  # Compact JSON structure
            except JSONDecodeError:
                json_string = response
            result = TestResult(plugin_name, api_spec_path, function, payload, json_string, status_code)
            test_results.append(asdict(result))
        else:
            apis_that_need_payload.append(function)
    return test_results, apis_that_need_payload


async def _test_all(api_list: List[Tuple[str, str]], results_file: str, api_payloads_file: str) -> None:
    with open(results_file, "w") as test_results_file:
        with open(api_payloads_file, "w") as payload_file:
            result_writer = csv.DictWriter(test_results_file,
                                           fieldnames="plugin_name,open_api_spec,operationId,payload,status_code,response".split(
                                               ","),
                                           extrasaction="ignore")
            payload_file_writer = csv.DictWriter(payload_file,
                                                 fieldnames="plugin_name,open_api_spec,operationId,payload".split(","),
                                                 extrasaction="ignore")
            result_writer.writeheader()
            payload_file_writer.writeheader()
            for plugin_name, api in api_list:
                test_results, apis_that_need_payload = await _test_api_with_empty_payloads(plugin_name, api)
                result_writer.writerows(test_results)
                for item in apis_that_need_payload:
                    payload_file_writer.writerow(
                        dict(plugin_name=plugin_name, open_api_spec=api, operationId=item, payload=None))


async def _test_all_payloads(payloads_filename: str, test_results_file: str) -> None:
    with open(payloads_filename, "r") as f:
        with open(test_results_file, "w") as results_file:
            reader = csv.DictReader(f, fieldnames="plugin_name,open_api_spec,operationId,payload".split(","))
            result_writer = csv.DictWriter(results_file,
                                           fieldnames="plugin_name,open_api_spec,operationId,payload,status_code,response".split(
                                               ","),
                                           extrasaction="ignore")
            result_writer.writeheader()
            next(reader)
            for line in reader:
                api_spec_path = line['open_api_spec']
                plugin_name = "placeholder"
                payload = line['payload']
                method = line['operationId']
                openapi_spec = await _get_openapi_spec(api_spec_path, plugin_name)
                plugin = await _get_plugin(openapi_spec, plugin_name)
                if not payload:
                    print(f"Testing {method} with payload skipped because payload is empty")
                    continue
                else:
                    print(f"Testing {method} with payload - {payload}")

                response, status_code = await plugin.process_for_test(payload, "placeholder." + line['operationId'])
                try:
                    json_data = json.loads(response)  # store in json structure
                    json_string = json.dumps(json_data, separators=(',', ":"))  # Compact JSON structure
                except JSONDecodeError:
                    json_string = response
                result = TestResult(plugin_name, api_spec_path, method, payload, json_string, status_code)
                result_writer.writerow(asdict(result))


if __name__ == '__main__':
    api_test_results_no_payloads = "api_test_results_no_payloads.csv"
    api_test_results_with_payloads = "api_test_results_with_payloads.csv"
    api_test_payload_data = "api_test_payload_data.csv"
    api_list = [
        ("tv-maze", "https://raw.githubusercontent.com/dev-magdy/OpenAPI-specs/main/TV%20Maze/openapi.json"),
        ("uk-parliament,uk-parliament_v1",
         "https://raw.githubusercontent.com/shreyashag/openapi-specs/main/uk-parliament-bills.yaml"),
        ("usgs-earthquake", "https://raw.githubusercontent.com/mjibril/specs/main/usgs-earthquake.yaml"),
    ]
    asyncio.run(_test_all(api_list, api_test_results_no_payloads, api_test_payload_data))
    # asyncio.run(_test_all_payloads(api_test_payload_data, api_test_results_with_payloads))

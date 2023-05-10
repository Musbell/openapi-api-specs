import requests, json, yaml
import test_parser_and_plugin as tsp
import subprocess


def _get_spec_ts_text(openapi_url: str) -> str:
    if openapi_url.startswith("http"):
        ext = openapi_url.split(".")[-1]
        r = requests.get(openapi_url)
        openapi_text = r.text
        if ext is None:
            ext = input(f"Enter extension for {openapi_url}")
        if ext.lower() == "json":
            openapi = json.loads(openapi_text)
        elif ext.lower() == "yaml":
            openapi = yaml.safe_load(openapi_text)
        else:
            openapi = yaml.safe_load(openapi_text)
    else:
        with open(openapi_url, "r") as stream:
            try:
                openapi = yaml.safe_load(stream)
            except yaml.YAMLError as exc:
                print(exc)
                openapi = None
    plugin_name = "placeholder"

    spec = tsp.OpenAPISpec.from_openapi(openapi, openapi_url=openapi_url)
    script = spec.typescript_prompt_string(plugin_name)
    return script


if __name__ == '__main__':
    urls = [
        # "https://raw.githubusercontent.com/Musbell/Nobel-Prize-Master-Data/main/Timmed-NobelMedia-NobelMasterData-2.1-resolved.json",
        # "https://raw.githubusercontent.com/dev-magdy/OpenAPI-specs/main/engage-apsa.yaml",
        # 'https://raw.githubusercontent.com/Musbell/carbon-intensity/main/carbonIntensity.yml',
        # 'https://raw.githubusercontent.com/Musbell/Quran-api/main/quran.yml',
        # 'https://raw.githubusercontent.com/Musbell/VPIC-NHTSA-API/main/trimmed-vpic-nhtsa-api-spec.json',
        # 'https://raw.githubusercontent.com/Musbell/nager-date/main/nager-date.openapi-spec.json',
        # 'https://raw.githubusercontent.com/Musbell/Public-API-for-Public-APIs-Openapi-spec-/main/public_api_openapi.json',
        # 'https://raw.githubusercontent.com/Musbell/Soilgrids-REST-API/main/soilgrids.openapi-spec.json',
        # 'https://raw.githubusercontent.com/Musbell/USGS-Water-Services-API/main/openapi.json',
        # 'https://raw.githubusercontent.com/Musbell/healthcare.gov/main/healthCareGov.json',
        # 'https://raw.githubusercontent.com/Musbell/XKCD-API/main/XKCD-api.json',
        # 'https://raw.githubusercontent.com/Musbell/Disney-Characters-API/master/disney/disney-characters-openapi3_0.yaml'
        # 'https://raw.githubusercontent.com/Musbell/openapi-specs/main/domainsdb-openapi.yaml'
        # 'https://raw.githubusercontent.com/Musbell/openapi-specs/main/uk-parliament-members.yaml',
        # 'https://raw.githubusercontent.com/shreyashag/openapi-specs/main/uk-parliament-members.yaml'
        # 'https://raw.githubusercontent.com/Musbell/openapi-specs/main/bhagvadgita-api.yaml'
    ]
    for url in urls:
        ts_spec = _get_spec_ts_text(url)
        # print(url, ts_spec)
        res = subprocess.check_output(['node', 'token_checker_single.js', ts_spec])
        print(url, res)

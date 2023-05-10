# from plugin import OpenApiParser, OpenAPISpec, load_spec
# import tiktoken

# if __name__ == '__main__':
#     data = [
#         # ("pokemon-api", "pokeapi.yaml"),
#         # ("chem-rxiv", "https://raw.githubusercontent.com/shreyashag/openapi-specs/main/chem-rxiv.yaml"),
#         # ("bhagvad-gita", "https://raw.githubusercontent.com/shreyashag/openapi-specs/main/bhagvadgita-api.yaml"),
#         # ("teleport", "https://developers.teleport.org/assets/api/teleport.yaml"),

#          ("Joke Dev API", "https://raw.githubusercontent.com/Musbell/JokeAPI.dev/main/joke-dev-api.yml"),
#     ]
#     for plugin_name, spec_url in data:
#         try:
#             spec_dict = load_spec(spec_url)
#             spec: OpenAPISpec = OpenApiParser(openapi_parser_version="v2_render_dependent_objects").parse(spec_dict)
#             text = spec.typescript_prompt_string(plugin_name)
#             enc = tiktoken.get_encoding("cl100k_base")
#             encoded = enc.encode(text)
#             print(spec_url, len(encoded))
#         except Exception as e:
#             print(spec_url, "ERROR", e)




from plugin import OpenApiParser, OpenAPISpec, load_spec
import tiktoken

if __name__ == '__main__':
    data = [
        ("rainfall", "https://raw.githubusercontent.com/Musbell/openapi-api-specs/main/specs/rainfall-api.json")
    ]
    for plugin_name, spec_url in data:
        spec_dict = load_spec(spec_url)
        spec: OpenAPISpec = OpenApiParser(openapi_parser_version="v2_render_dependent_objects").parse(spec_dict)
        text = spec.typescript_prompt_string(plugin_name)
        enc = tiktoken.get_encoding("cl100k_base")
        encoded = enc.encode(text)
        print(text)
        print(plugin_name, len(encoded), '\n')
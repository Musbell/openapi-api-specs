import test_parser_and_plugin as tsp
import argparse
import requests
import yaml
import json

parser = argparse.ArgumentParser()
parser.add_argument("url", type=str)
parser.add_argument("--plugin_name", type=str, default="placeholder")

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

spec = tsp.OpenAPISpec.from_openapi(openapi, openapi_url=openapi_url)
script = spec.typescript_prompt_string(plugin_name)
  
from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
print(len(tokenizer(script)["input_ids"]))



# import test_parser_and_plugin as tsp
# import argparse
# import yaml
# import json

# parser = argparse.ArgumentParser()
# parser.add_argument("url", type=str)
# parser.add_argument("--plugin_name", type=str, default="placeholder")

# args = parser.parse_args()
# openapi_url = args.url

# ext = openapi_url.split(".")[-1]

# if openapi_url.startswith("./"):
#     with open(openapi_url, 'r') as f:
#         openapi_text = f.read()
# else:
#     raise ValueError(f"Unrecognized URL format: {openapi_url}")

# if ext.lower() == "json":
#     openapi = json.loads(openapi_text)
# elif ext.lower() == "yaml":
#     openapi = yaml.safe_load(openapi_text)
# else:
#     raise ValueError(f"Unrecognized extension: {ext}")
# plugin_name = args.plugin_name

# spec = tsp.OpenAPISpec.from_openapi(openapi, openapi_url=openapi_url)
# script = spec.typescript_prompt_string(plugin_name)
  
# from transformers import GPT2TokenizerFast
# tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
# print(len(tokenizer(script)["input_ids"]))

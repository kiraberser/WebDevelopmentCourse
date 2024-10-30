import requests

#endpoint = "https://httpbin.org/status/200/"
#endpoint = "http://localhost:8000/"
endpoint = "http://localhost:8000/api/"


get_response = requests.get(endpoint, json={"query": "Hello world"})#Http Request
#print(get_response.text)
#print(get_response.status_code)

print(get_response)

#Javascript object nototion JSON -> Python Dict
#print(get_response.json())
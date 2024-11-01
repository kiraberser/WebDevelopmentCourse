import requests

endpoint = "http://localhost:8000/api/products/"

get_response = requests.get(endpoint)#Http Request

print(get_response.json(), get_response.status_code)
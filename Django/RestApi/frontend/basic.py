import requests

#endpoint = "https://httpbin.org/status/200/"
#endpoint = "http://localhost:8000/"
endpoint = "http://localhost:8000/api/"

get_response = requests.get(endpoint, json={"title": "Green Plant","content": "Great Plant", "price": 10.99})#Http Request
#print(get_response.text)
#print(get_response.status_code)

#Javascript object nototion JSON -> Python Dict
print(get_response.json(), get_response.status_code)
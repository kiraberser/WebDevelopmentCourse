import requests

endpoint = "http://localhost:8000/api/products/10/update/"

data = {
    'title': "Using update",
    'price': 129.99
}

get_response = requests.put(endpoint, json=data)#Http Request

print(get_response.json(), get_response.status_code)
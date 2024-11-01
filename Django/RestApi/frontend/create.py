import requests

endpoint = "http://localhost:8000/api/products/"

data = {
    'title': 'Yellow Plant',
    'price': 30.00
}

get_response = requests.post(endpoint, json=data)#Http Request

print(get_response.json(), get_response.status_code)
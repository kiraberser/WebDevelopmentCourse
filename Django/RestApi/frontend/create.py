import requests

headers = {
    'Authorization': 'Bearer 4f175b68fcba2ab4121b2bd3a0e5eadb019ac46f'
}

endpoint = "http://localhost:8000/api/products/"

data = {
    'title': 'Yellow Plant',
    'price': 30.00
}

get_response = requests.post(endpoint, json=data, headers=headers)#Http Request

print(get_response.json(), get_response.status_code)
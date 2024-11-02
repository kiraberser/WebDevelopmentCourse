import requests
from getpass import getpass

auth_endpoint = "http://localhost:8000/api/auth/"
username = input("What is your username?\n")
password = getpass("What is your password?\n")
product_id = input("What is the id of the product?")

auth_response = requests.post(auth_endpoint, json={'username': username, 'password': password })
print(auth_response.json())

if auth_response.status_code == 200:
    token = auth_response.json()['token']
    headers = {
        'Authorization': f"Bearer {token}"
    }
try:
    product_id = int(product_id)
except:
    product_id = None
    print(f'{product_id} not valid')
    
if product_id:
    endpoint = f"http://localhost:8000/api/products/{product_id}/"
    get_response = requests.get(endpoint, headers=headers)#Http Request
    print(get_response.json())
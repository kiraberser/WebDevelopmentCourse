import requests

product_id = input("What's the id of the product?")
try:
    product_id = int(product_id)
except:
    product_id = None
    print(f'{product_id} not valid')
    
if product_id:
    endpoint = f"http://localhost:8000/api/products/{product_id}/delete/"
    get_response = requests.delete(endpoint)#Http Request
    print(get_response.status_code, get_response.status_code == 204)
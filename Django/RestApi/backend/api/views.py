import json
from django.http import JsonResponse, HttpResponse #HttpResponse is equal to text/html
from products.models import Product
from django.forms.models import model_to_dict
# Django Models

def api_home(request, *args, **kwargs):
    model_data = Product.objects.all().order_by("?").first()
    data= {}
    if model_data:
        data = model_to_dict(model_data, fields=['id', 'price']) #best practice 
    return JsonResponse(data)
    #    json_data_str = json.dumps(data)
    #return HttpResponse(json_data_str, headers={"content-type": "application/json"})
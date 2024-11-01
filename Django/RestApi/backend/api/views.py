from django.forms.models import model_to_dict #Use dictionary to scratch the data 
from rest_framework.decorators import api_view
from rest_framework.response import Response

from products.models import Product
from products.serializers import ProductSerializer
# Django Models

@api_view(["GET", "POST"])
def api_home(request, *args, **kwargs):
    """
    DRF API View
    """
    #if instance:
    #    #data = model_to_dict(instance, fields=['id', 'title', 'price', 'sale_price']) #best practice 
    #    data = ProductSerializer(instance).data
    #serializer = ProductSerializer(data=request.data)
    if request.method == "POST":
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            instance = serializer.save()
            data = ProductSerializer(instance).data
            print(data)
            return Response(data)
    elif request.method == "GET":
        instance = Product.objects.all().order_by().last()
        data = {}
        if instance:
            data = ProductSerializer(instance).data
            print(data)
        return Response(data)
    

from django.forms.models import model_to_dict #Use dictionary to scratch the data 
from rest_framework.decorators import api_view
from rest_framework.response import Response

from products.models import Product
from products.serializers import ProductSerializer
# Django Models

@api_view(["POST"])
def api_home(request, *args, **kwargs):
    """
    DRF API View
    """
    #instance = Product.objects.all().order_by("?").first()
    #data= {}
    #if instance:
    #    #data = model_to_dict(instance, fields=['id', 'title', 'price', 'sale_price']) #best practice 
    #    data = ProductSerializer(instance).data
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        #instance = serializer.save()
        #instance = form.save()
        print(serializer.data)
        return Response(serializer.data)

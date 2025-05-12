from rest_framework.serializers import ModelSerializer

from .models import Product

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields =[
            'name',
            'price',
            'description',
            'image',
            'available',
            'date_created',
        ]

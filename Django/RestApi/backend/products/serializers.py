from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Product
from . import validators

class ProductSerializer(serializers.ModelSerializer):
    my_discount = serializers.SerializerMethodField(read_only=True)
    edit_url = serializers.SerializerMethodField(read_only=True)
    url = serializers.HyperlinkedIdentityField(view_name='product-detail', lookup_field='pk')#Only work with Model Serializer
    #email = serializers.EmailField(write_only=True)
    title = serializers.CharField(validators=[validators.validate_title_no_hello, validators.unique_product_title])
    #name = serializers.CharField(source='title', read_only=True)
    class Meta:
        model = Product
        fields = [
            #'user',
            'url',
            'edit_url',
            'pk',
            'title',
            #'name',
            'content',
            'price',
            'sale_price',
            'my_discount'
        ]
    
    # def validate_title(self, value):
    #     request = self.context.get('request')
    #     username = request.user
    #     qs = Product.objects.filter(user=username,title__iexact=value)
    #     if qs:
    #         raise serializers.ValidationError(f"{value} is already product name.")
    #     return value
    
    # def create(self, validated_data):
    #     #return Product.objects.create(**validated_data)
    #     email = validated_data.pop('email')
    #     obj = super().create(validated_data)
    #     #print(email, obj)
    #     return obj
    
    # def update(self, instance, validated_data):
    #     email = validated_data.pop('email')
    #     return super().update(instance, validated_data)
    
    def get_edit_url(self, obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("product-edit", kwargs={'pk': obj.pk} ,request=request)
    
    def get_my_discount(self, obj):
        if not hasattr(obj, 'id'):
            return None
        if not isinstance(obj, Product):
            return None
        return obj.get_discount()

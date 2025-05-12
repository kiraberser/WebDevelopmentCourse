# Create your views here.
from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic import FormView
from django.urls import reverse_lazy

from rest_framework.views import APIView
from rest_framework.response import Response

from .forms import ProductForm
from .models import Product
from .serializers import ProductSerializer

class ProductView(TemplateView):
    template_name = 'products/products_list.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = Product.objects.all()
        return context

class ProductCreateView(FormView):
    template_name = 'products/product_form.html'
    model = Product
    form_class = ProductForm
    success_url = reverse_lazy('products')

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

class ProductListAPI(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


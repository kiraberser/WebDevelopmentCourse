from django.urls import path
from django.views.generic import TemplateView
from coffe.views import ProductCreateView, ProductView
from coffe.views import ProductListAPI

urlpatterns = [
    path('', ProductView.as_view(), name='products'),
    path('create/', ProductCreateView.as_view(), name='create_product'),
    path('api/', ProductListAPI.as_view(), name='products_api'),
]

from django.test import TestCase
from django.urls import reverse

from .models import Product

class ProductViewTest(TestCase):
    def test_should_return_200(self):
        url = reverse('products')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['products'].count(), 0)

    def test_should_return_200_with_products(self):
        url = reverse('products')
        Product.objects.create(name='Test Product', price=100, description='Test Description', available=True)
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['products'].count(), 1)
from django.test import TestCase
from django.urls import reverse

from django.contrib.auth import get_user_model

class MyOrderViewTest(TestCase):
    def test_not_logged_user_should_be_redirected(self):
        url = reverse('my_orders')
        response = self.client.get(url)
        breakpoint()
        self.assertEqual(response.url, '')
        self.assertRedirects(response, '/users/login/?next=/orders/my-orders/')

    def test_not_logged_user_should_be_redirected(self):
        url = reverse('my_orders')
        user = get_user_model().objects.create(username='testuser')
        self.client.force_login(user)
        response = self.client.get(url)
        breakpoint()
        self.assertEqual(response.url, '')
        self.assertRedirects(response, '/users/login/?next=/orders/my-orders/')

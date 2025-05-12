from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy

from .models import Order
from .forms import OrderProductForm

# Create your views here.
class MyOrderView(LoginRequiredMixin, DetailView):
    model = Order
    template_name = "orders/my_orders.html"
    context_object_name = "order"

    def get_object(self, queryset=None):
        return Order.objects.filter(isActive=True, user=self.request.user).first()

class AddOrderView(LoginRequiredMixin, CreateView):
    template_name = "orders/add_order.html"
    form_class = OrderProductForm
    success_url = reverse_lazy("my_orders")

    def form_valid(self, form):
        order, _ = Order.objects.get_or_create(
            is_active=True,
            user=self.request.user,
        )
        form.instance.order = order
        form.instance.quantity = 1
        form.save()
        return super().form_valid(form)

    def get_success_url(self):
        return reverse_lazy("my_orders")

from django.urls import path

from .views import MyOrderView, AddOrderView

urlpatterns = [
    path('my-orders/', MyOrderView.as_view(), name='my_orders'),
    path('add-order/', AddOrderView.as_view(), name='add_order'),
]


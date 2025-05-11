from django.urls import path
from first_app.views import CarListView, CarDetailView, get_authors

urlpatterns = [
    path('lista/', CarListView.as_view(), name='car_list'),
    path('detalle/<int:pk>/', CarDetailView.as_view(), name='car_detail'),
    path('authors/', get_authors, name='author_list'),
]

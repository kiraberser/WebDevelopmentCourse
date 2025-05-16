from django.urls import path
from .views import UserViewSet, UserDetail

urlpatterns = [
    path('list-users/', UserViewSet.as_view(), name='user-list'),
    path('detail-user/<int:pk>/', UserDetail.as_view(), name='user-detail'),
]


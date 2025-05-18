from django.urls import path
from .views import UserViewSet, UserDetail, UserRegister, UserLogin, UserLogout, CookieTokenVerifyView

urlpatterns = [
    path('list-users/', UserViewSet.as_view(), name='user-list'),
    path('detail-user/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('register/', UserRegister.as_view(), name='user-register'),
    path('login/', UserLogin.as_view(), name='user-login'),
    path('logout/', UserLogout.as_view(), name='user-logout'),
    path('refresh/', CookieTokenVerifyView.as_view(), name='verify-token'),
]


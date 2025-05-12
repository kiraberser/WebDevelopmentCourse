from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from .views import ProfileView, RegisterView


urlpatterns = [
    path('login/', LoginView.as_view(template_name='users/login.html'), name='login'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    path('profile/', ProfileView.as_view(template_name='users/profile.html'), name='profile'),
    path('register/', RegisterView.as_view(template_name='users/register.html'), name='register'),
]

from django.urls import path
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    path('', RedirectView.as_view(url='/conjugate/', permanent=False)),
    path('conjugate/', views.conjugate_api, name='conjugate_api'),
]





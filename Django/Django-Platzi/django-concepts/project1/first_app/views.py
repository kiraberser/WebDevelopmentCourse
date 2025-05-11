from django.shortcuts import render, get_object_or_404
from first_app.models import Car, Profile, Author
from django.views.generic.base import TemplateView

# Create your views here.

class CarListView(TemplateView):
    template_name = 'first_app/car_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['car_list'] = Car.objects.all()
        return context

def get_car(request, *args, **kwargs):
    car = Car.objects.get(id=kwargs['id'])
    print(car)
    
    return render(request, "first_app/car_detail.html", context={'car_detail': car})

def get_authors(request, *args, **kwargs):
    authors = Author.objects.all()
    return render(request, "first_app/author.html", context={'author_list': authors})

def get_profile(request, *args, **kwargs):
    author = kwargs['name'].title()
    get_author = Author.objects.get(name=author)
    profile = get_object_or_404(Profile, author=get_author)
    return render(request, "first_app/profile.html", context={'profile':profile})
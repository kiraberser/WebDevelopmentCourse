from django import forms
from .models import Product

class ProductForm(forms.Form):
    name = forms.CharField(max_length=200, label="Name" , widget=forms.TextInput(attrs={'class': 'input input-bordered w-full'}))
    price = forms.DecimalField(max_digits=10, decimal_places=2, label="Price" , widget=forms.TextInput(attrs={'class': 'input input-bordered w-full'}))
    description = forms.CharField(max_length=300, label="Description" , widget=forms.TextInput(attrs={'class': 'input input-bordered w-full'}))
    image = forms.ImageField(label="Image", required=False )
    available = forms.BooleanField(initial=True, required=False, label="Available" , widget=forms.CheckboxInput(attrs={'class': 'checkbox checkbox-primary'}))
    
    def save(self):
        product = Product.objects.create(
            name=self.cleaned_data['name'],
            price=self.cleaned_data['price'],
            description=self.cleaned_data['description'],
            image=self.cleaned_data['image'],
            available=self.cleaned_data['available']
        )
        return product

from django.contrib import admin
from .models import Product
# Register your models here.

#Para hacer cambios en el admin
class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ('name', 'price', 'description', 'available', 'date_created')
    list_filter = ('available',)
    search_fields = ('name', 'description')
    list_editable = ('price', 'available')
    list_per_page = 20

admin.site.register(Product, ProductAdmin)

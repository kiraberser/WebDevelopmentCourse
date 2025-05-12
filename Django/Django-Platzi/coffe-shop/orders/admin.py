from django.contrib import admin
from .models import Order, OrderProduct
# Register your models here.

class OrderProductInline(admin.TabularInline):
    model = OrderProduct
    extra = 0

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'updated_at', 'isActive')
    model = Order
    inlines = [OrderProductInline]

admin.site.register(Order, OrderAdmin)

from django.db import models
from django.utils import timezone

# Create your models here.
def product_image_upload_path(instance, filename):
    # Usa el nombre del producto para la carpeta
    return f'coffe/products/{instance.name}/{filename}'

class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name="Product Name")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Product Price")
    description = models.TextField(verbose_name="Product Description", max_length=300)
    available = models.BooleanField(default=True, verbose_name="Product Availability")
    image = models.ImageField(upload_to=product_image_upload_path, verbose_name="Product Image", null=True, blank=True)
    date_created = models.DateTimeField( default=timezone.now, verbose_name="Date Created")

    def __str__(self):
        return self.name
    



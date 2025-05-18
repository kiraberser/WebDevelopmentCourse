from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager

# Create your models here.
class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    profile_image = models.ImageField(upload_to='media/users/', null=True, blank=True)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=255, blank=True)
    website = models.URLField(blank=True)
    email = models.EmailField(unique=True)

    objects = CustomUserManager()

    def __str__(self):
        return self.username


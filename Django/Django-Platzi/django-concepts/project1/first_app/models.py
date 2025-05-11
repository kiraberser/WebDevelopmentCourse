from django.db import models

# Create your models here.
class Car(models.Model):
    title = models.TextField(max_length=250)
    year = models.TextField(max_length=4, null=True)
    color = models.TextField(max_length=10, null=True)

    def __str__(self):
        return f"{self.title} - {self.year} - {self.color} "
    
class Publisher(models.Model):
    name = models.TextField(max_length=200)
    address = models.TextField(max_length=200)
    
    def __str__(self) -> str:
        return f"{self.name}"

class Author(models.Model):
    name = models.TextField(max_length=200)
    birth_date = models.DateField()
    
    def __str__(self) -> str:
        return f"{self.name}"
    
class Profile(models.Model):
    website = models.URLField()
    biography = models.TextField(max_length=500)
    author = models.OneToOneField(to=Author, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return f"{self.author}"
    
class Book(models.Model):
    title = models.TextField(max_length=200)
    publication_date = models.DateField()
    publisher = models.ForeignKey(to=Publisher, on_delete=models.CASCADE)
    authors = models.ManyToManyField(to=Author, related_name="books")
    
    def __str__(self) -> str:
        return f"{self.title}"
    

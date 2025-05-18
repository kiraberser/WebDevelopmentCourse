from django.contrib import admin
from .models import Post, Comment, Like

# Register your models here.
@admin.register(Post)
class BlogAdmin(admin.ModelAdmin):

    list_display = ('title', 'author', 'created_at', 'updated_at')
    list_filter = ('author', 'created_at', 'updated_at')
    search_fields = ('title', 'content')
    list_per_page = 10


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass

@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    pass

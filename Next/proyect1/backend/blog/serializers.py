from rest_framework import serializers
from .models import Post, Comment, Like

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post    
        fields = ['id', 'title', 'content', 'created_at', 'updated_at', 'author', 'image', 'likes', 'dislikes', 'comments']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        depth = 1
        fields = ['id', 'content', 'created_at', 'updated_at', 'author', 'post']

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        depth = 1
        fields = ['id', 'post', 'user']

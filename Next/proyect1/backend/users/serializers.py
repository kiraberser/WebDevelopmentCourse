from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'is_staff', 'is_active', 'date_joined']
        depth = 1
        read_only_fields = ['id', 'is_staff', 'is_active', 'date_joined']

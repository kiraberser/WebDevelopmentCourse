from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import isAdminUser

from .models import User
from .serializers import UserSerializer

# Create your views here.
class UserList(APIView):
    permission_classes = [isAdminUser]

    def get(self, request):
        username = [user for user in User.objects.all()]
        serializer = UserSerializer(username, many=True)
        return Response(serializer.data)



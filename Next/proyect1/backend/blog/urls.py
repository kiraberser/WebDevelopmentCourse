from django.urls import path
from .views import PostList, PostDetail, CommentList, CommentDetail, LikeList

urlpatterns = [
    path('posts/', PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('comments/', CommentList.as_view(), name='comment-list'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
    path('likes/', LikeList.as_view(), name='like-list'),
]

from django.urls import path
from django.contrib.auth import views as auth_views
from Login import views
from .views import comic_detail


urlpatterns = [
    path('', views.index),
    path('register/', views.register, name= 'register'),
    path('login/', auth_views.LoginView.as_view(), {'template_name':'loginPage/registration/login.html'}, name= 'login'),
    path('logout/', views.logout_view, name='logout'),
    path('<slug:title>/', comic_detail, name='comic_detail'),
]

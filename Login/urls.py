from django.urls import path
from django.contrib.auth import views as auth_views
from Login import views


urlpatterns = [
    path('', views.index),
    path('register/', views.register, name= 'register'),
    path('login/', auth_views.LoginView.as_view(), {'template_name':'loginPage/registration/login.html'}, name= 'login'),
    path('logout/', auth_views.LogoutView.as_view(), {'next/page': '/'}, name= 'logout'),
    path('contact/', views.contact, name= 'contact'),
    path('login/main_page/', views.main_page , name= 'main_page'),
    path('key_tokens/', views.key_tokens, name= 'key_tokens'),


]

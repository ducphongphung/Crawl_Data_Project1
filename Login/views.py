from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, logout
from .forms import RegistrationForm
import json


# Create your views here.
def index(request):
    with open("./nettruyenup.json", "r") as f:
        all_comics = json.load(f)

        data = []
    
        for comics in all_comics:
            for comic in comics:
                comic_data = {
                    "title": comic['title'],
                    "author": comic['detail']['author'],
                    "image_url": comic['image'],
                    "description": comic['description'],
                }
                data.append(comic_data)    
    context = {
        "comics": data,
    }

    return render(request, 'loginPage/base.html',context)

def comic_detail(request, title):
    with open("./nettruyenup.json", "r") as f:
        all_comics = json.load(f)
        comic = next(filter(lambda c: c['title'] == title, all_comics), None)

    if comic is None:
        # handle 404 error
        pass

    return render(request, 'comic_detail.html', {'comic': comic})



    
def logout_view(request):
    logout(request)
    return redirect('/')


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            # Validate the password
            if form.cleaned_data['password'] != form.cleaned_data['confirm_password']:
                form.add_error('confirm_password', 'Passwords do not match')
            else:
                user = User.objects.create_user(
                    username=form.cleaned_data['username'],
                    password=form.cleaned_data['password'],
                    email=form.cleaned_data['email']
                )
                login(request, user)
                return redirect('/login')

    else:
        form = RegistrationForm()
    return render(request, 'loginPage/register.html', {'form': form})
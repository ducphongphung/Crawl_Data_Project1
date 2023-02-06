from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login
from .forms import RegistrationForm

# Create your views here.
def index(request):
    return render(request, 'loginPage/base.html')
def contact(request):
    return render(request, 'loginPage/contact.html')
def main_page(request):
    return render(request, 'loginPage/main_page.html')
def key_tokens(request):
    return render(request, 'loginPage/key_tokens.html')
    



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
                return redirect('/')
    else:
        form = RegistrationForm()
    return render(request, 'register.html', {'form': form})
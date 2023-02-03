from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from .forms import RegistrationForm


# Create your views here.
def index(request):
    return render(request, 'loginPage/home.html')
def contact(request):
    return render(request, 'loginPage/contact.html')
def main_page(request):
    return render(request, 'loginPage/main_page.html')
def key_tokens(request):
    return render(request, 'loginPage/key_tokens.html')
    

def register(request):
    form = RegistrationForm()
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/')
    return render(request, 'loginPage/register.html', {'form': form})


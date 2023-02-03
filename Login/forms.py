import re
from django import forms
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
 

class RegistrationForm(forms.Form):
    username = forms.CharField(label='Username', max_length= 50)
    email = forms.EmailField(label='Email')
    password = forms.CharField(label="Password", widget=forms.PasswordInput())
    repassword = forms.CharField(label="Password Confirm", widget=forms.PasswordInput())


        
    def clean_username(self):
        username= self.cleaned_data['username']
        if not re.search(r'^\w+$', username):
            raise forms.ValidationError("Tài khoản có kí tự đặc biệt")
        try:
            User.objects.get(username=username)
        except ObjectDoesNotExist:
            return username
        raise forms.ValidationError("Tài khoản đã tồn tại")

    def clean(self):
        if 'password' in self.cleaned_data:
            password= self.cleaned_data['password']
            repassword= self.cleaned_data['repassword']
            if password == repassword and password:
                return password
        raise forms.ValidationError("Mật khẩu không hợp lệ")

    def save(self):
        username= self.cleaned_data['username']
        email = self.cleaned_data['email']
        password = self.cleaned_data['password']
        
        User.objects.create_user(username, email, password)
    


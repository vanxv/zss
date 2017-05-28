from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(min_length=4,max_length=12)
    password = forms.CharField(min_length=4,max_length=12)


class RegisterForm(forms.Form):
    username = forms.CharField(min_length=4)
    password = forms.CharField(min_length=4)
    password2 = forms.CharField(min_length=4)

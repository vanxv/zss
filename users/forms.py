from django import forms


class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField()


class RegisterForm(forms.Form):
    username = forms.CharField(min_length=5)
    password = forms.CharField(min_length=5)
    password2 = forms.CharField(min_length=5)

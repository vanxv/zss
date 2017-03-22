from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(required=True, min_length=5)
    password = forms.CharField(required=True, min_length=5)


class RegisterForm(forms.Form):
    username = forms.CharField(required=True, min_length=5)
    password = forms.CharField(required=True, min_length=5)
    password2 = forms.CharField(required=True, min_length=5)



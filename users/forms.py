from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(required=True, min_length=5)
    password = forms.CharField(required=True, min_length=5)


class RegisterForm(forms.Form):
    username = forms.CharField(required=True, min_length=5)
    password = forms.CharField(required=True, min_length=5)
    password2 = forms.CharField(required=True, min_length=5)


class UserForm(forms.Form):
    attrs = {
        'class': 'form-control',
    }

    tags = forms.CharField(widget=forms.TextInput(attrs=attrs), max_length=200, required=False)

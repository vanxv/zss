from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(min_length=4,max_length=11)
    password = forms.CharField(min_length=4,max_length=30)


class RegisterForm(forms.Form):
    username = forms.CharField(min_length=11,max_length=11)
    password = forms.CharField(min_length=4)
    password2 = forms.CharField(min_length=4)



class tbForm(forms.Form):
    tbusername = forms.CharField(min_length=4,max_length=30)



class jdForm(forms.Form):
    jdusername = forms.CharField(min_length=4,max_length=30)

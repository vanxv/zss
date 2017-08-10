from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(min_length=4,max_length=11)
    password = forms.CharField(min_length=4,max_length=30)


class RegisterForm(forms.Form):
    username = forms.CharField(min_length=11,max_length=11)
    password = forms.CharField(min_length=4)
    password2 = forms.CharField(min_length=4)



class tbForm(forms.Form):
    tbusername = forms.CharField(min_length=2,max_length=30)

class jdForm(forms.Form):
    jdusername = forms.CharField(min_length=2,max_length=30)

class alipayForm(forms.Form):
    alipay = forms.CharField(min_length=2,max_length=30)

class wechatForm(forms.Form):
    wechat = forms.CharField(min_length=2,max_length=70)

class BankcardForm(forms.Form):
    Bankcard = forms.CharField(min_length=16, max_length=19)
class IdcardForm(forms.Form):
    Idcard = forms.CharField(min_length=18, max_length=18)
    name = forms.CharField(min_length=2, max_length=7)


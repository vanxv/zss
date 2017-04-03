from django import forms
from .models import Shop, Goods


class TBShopName(forms.Form):
    your_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "淘宝\天猫\1688账号"}),
                                max_length=100)
    shop_name = forms.CharField(
        widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "淘宝店铺名(仅限淘宝店填写)"}), max_length=100)


class JDShopName(forms.Form):
    jdyour_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "请输入京东的帐号"}),
                                  max_length=100)
    jdshop_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "请输入京东的店铺名"}),
                                  max_length=100)


class GoodForm(forms.ModelForm):
    class Meta:
        model = Goods
        exclude = ['user', 'shop', 'add_time']

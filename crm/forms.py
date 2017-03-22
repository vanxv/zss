# coding:utf-8
from django import forms

from crm.models import Customer


class CustomerForm(forms.ModelForm):
    attrs = {
        'class': 'form-control',
    }

    tags = forms.CharField(widget=forms.TextInput(attrs=attrs), max_length=200, required=False)

    class Meta:
        model = Customer
        fields = ['tags']

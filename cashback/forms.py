# coding:utf-8
from django import forms

from cashback.models import CashbackTask, CASHBACK_CHOICES, CashbackStatus, Cashback


class TaskForm(forms.ModelForm):
    attrs = {
        'class': 'form-control',
    }

    name = forms.CharField(widget=forms.TextInput(attrs=attrs))
    amount = forms.FloatField(widget=forms.TextInput(attrs=attrs))
    max_count = forms.FloatField(widget=forms.NumberInput(attrs=attrs), required=False)
    expiretime = forms.DateTimeField(widget=forms.DateTimeInput(attrs=attrs))
    remark = forms.CharField(widget=forms.TextInput(attrs=attrs), required=False)

    products = forms.CharField(required=True)

    class Meta:
        model = CashbackTask
        fields = ['name', 'amount', 'max_count', 'expiretime', 'remark']


class CashbackForm(forms.Form):
    attrs = {
        'class': 'form-control',
    }

    status = forms.ChoiceField(widget=forms.Select(attrs=attrs), choices=CASHBACK_CHOICES)

    def __init__(self, *args, **kwargs):
        self.instance = kwargs.pop('instance', None)
        self.seller = kwargs.pop('seller', None)
        super(CashbackForm, self).__init__(*args, **kwargs)

    def clean_status(self):
        status = self.cleaned_data.get('status')

        try:
            status = int(status)
        except:
            raise forms.ValidationError('状态错误')

        if self.instance.status == CashbackStatus.Completed.value:
            raise forms.ValidationError('已审核，无法更改状态')

        if status == CashbackStatus.Completed.value:
            if self.seller.balance < self.instance.amount:
                raise forms.ValidationError('账户余额不足')

        return status


class SmsForm(forms.Form):
    attrs = {
        'class': 'form-control',
    }

    content = forms.CharField(widget=forms.Textarea(attrs=attrs), max_length=70)
    customers = forms.CharField(required=True)


CASHBACKADMIN_CHOICES = (
    (2, '审核通过，等待平台打款'),
    (4, '已打款')
)


class CashbackAdminForm(forms.ModelForm):
    status = forms.ChoiceField(choices=CASHBACKADMIN_CHOICES,label='状态')

    class Meta:
        model = Cashback
        exclude = []

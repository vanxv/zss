# coding:utf-8
from django import forms
from django.core.exceptions import ValidationError

from finance.models import FAccountTransferAudits

PAY_PLATFORM = (
    ('alipay', '支付宝'),
    ('wechat', '微信')
)


class InpourForm(forms.ModelForm):
    attrs = {
        'class': 'form-control',
    }

    amount = forms.FloatField(widget=forms.TextInput(attrs=attrs))

    class Meta:
        model = FAccountTransferAudits
        fields = ['amount']


class WithdrawForm(forms.ModelForm):
    attrs = {
        'class': 'form-control',
    }

    amount = forms.FloatField(widget=forms.TextInput(attrs=attrs))
    platform = forms.ChoiceField(widget=forms.Select(attrs=attrs), choices=PAY_PLATFORM)
    transfer_account = forms.CharField(widget=forms.TextInput(attrs=attrs))

    def __init__(self, *args, **kwargs):
        self.user = None
        if 'user' in kwargs:
            self.user = kwargs.pop('user')
        super(WithdrawForm, self).__init__(*args, **kwargs)

    class Meta:
        model = FAccountTransferAudits
        fields = ['amount', 'platform', 'transfer_account']

    def clean_amount(self):
        amount = self.cleaned_data.get('amount')
        if self.user:
            if self.user.balance < amount:
                raise ValidationError('账户余额不足')

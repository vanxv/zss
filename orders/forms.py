# coding:utf-8
from django import forms
from orders.models import Order, PLATFORM, ORDER_STATUS


class OrderForm(forms.ModelForm):
    attrs = {
        'class': 'form-control',
    }

    id = forms.CharField(widget=forms.TextInput(attrs=attrs))
    count = forms.IntegerField(widget=forms.NumberInput(attrs=attrs))
    amount = forms.FloatField(widget=forms.TextInput(attrs=attrs))
    status = forms.ChoiceField(widget=forms.Select(attrs=attrs), choices=ORDER_STATUS)
    platform = forms.ChoiceField(widget=forms.Select(attrs=attrs), choices=PLATFORM)
    add_time = forms.DateTimeField(widget=forms.DateTimeInput(attrs=attrs))
    remark = forms.CharField(widget=forms.TextInput(attrs=attrs))

    class Meta:
        model = Order
        fields = ['id', 'count', 'amount', 'status', 'platform', 'add_time', 'remark']

    def save(self, user_id):
        self.instance.user_id = user_id
        super(OrderForm, self).save()

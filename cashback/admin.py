from django.contrib import admin
from django.contrib import messages

from cashback.forms import CashbackAdminForm
from cashback.models import Cashback, CashbackTask, CashbackTaskGoods

@admin.register(Cashback)
class CashbackAdmin(admin.ModelAdmin):
    list_per_page = 15
    list_display = ['id', 'seller', 'wechat', 'alipay', 'amount', 'status', 'add_time']
    form = CashbackAdminForm

    readonly_fields = ['task_id', 'customer_id', 'orderno', 'amount', 'wechat', 'alipay', 'certificate_img', 'add_time']
    exclude = ['certificate']

    def save_model(self, request, obj, form, change):
        if not change:
            messages.error(request, '不允许新增')
            return

        obj.save()

admin.site.register(CashbackTask)
admin.site.register(CashbackTaskGoods)
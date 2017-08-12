from django.contrib import admin
from .models import CryOrder

class CryOrderAdmin(admin.ModelAdmin):
    list_display = ('id','Keywords','platform','Status','AddTime','OrderSort','GoodId_id','ShopId_id','Userid_id','buyerid_id','Money')
    list_filter = ('id','Keywords','platform','Status','AddTime','OrderSort','GoodId_id','ShopId_id','Userid_id','buyerid_id','Money')
admin.site.register(CryOrder, CryOrderAdmin)
# Register your models here.

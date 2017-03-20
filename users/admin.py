#-*- coding: UTF-8 -*-
from django.contrib import admin
from .models import buyscore, sellscore, jdUsername, tbUsername, idGuid, AuthUser
# Register your models here.


admin.site.register(AuthUser)
admin.site.register(buyscore)
admin.site.register(sellscore)
admin.site.register(tbUsername)
admin.site.register(jdUsername)
admin.site.register(idGuid)

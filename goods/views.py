from django.shortcuts import render
# Create your views here.
from django.views.generic.base import View #View是一个get和post的一个系统，可以直接def post和get，
from .models import jdshop, taobaoshop


class goodsViews(View):
    def get(self):
        #京东店铺
        all_jdshop = jdshop.objects.all()
        #淘宝店铺
        all_taobaoshop = taobaoshop.objects.all()
        return render(request, 'shop.html', {"all_jdshop":all_jdshop,"all_taobaoshop":all_taobaoshop})

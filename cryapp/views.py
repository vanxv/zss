#coding=utf-8
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import CryOrder
from goods.models import Shop, Goods
import re
import sys
import requests
print(sys.path)
from django.views.generic.base import View  # View是一个get和post的一个系统，可以直接def post和get，

#下面是url切出数字和切出店铺分类
def platformUrl(self):
    if 'tmall' in self:
        platform = 'tmall'
        id = re.findall(r'id=(\d+)',self)
        res = requests.get(self)
        tempname = re.findall(r'<strong>(.*?)</strong>', res.text) #正则获取用户名
        shopname = tempname[0]
        shopusername = ''
    elif 'taobao' in self:
        platform = 'taobao'
        id = re.findall(r'id=(\d+)',self)[0]
        shopname = ''
        shopusername = ''
    elif 'jd' in self:
        platform = 'jd'
        jd = re.findall(r'(\d+)',self)
        id = jd[0]
    elif '1688' in self:
        platform = '1688'
    else:
        pass
    return id, platform, shopname ,shopusername



# Create your views here.
##Home_page_add_product
class index(LoginRequiredMixin, View):
    def post(self, request, *args, **kwargs):
        pass

class Good_Index_Add(LoginRequiredMixin, View):
    ##############首页增加产品#######################
    def post(self, request, *args, **kwargs):
        txtIndexAddUrl = request.POST['txtIndexAddUrl'] #获取链接
        keywords = request.POST['keywords'] #获取关键词
        number = request.POST['number'] #获取数量
        note = request.POST['note'] #获取备注
        startdatetime = request.POST['startDate'] #获取启动时间
        endDateTime = request.POST['endDate'] #获取结束时间
        id,platform,shopname,shopusername =platformUrl(txtIndexAddUrl)
        print(id)
        print(platform)
        babyid = Goods.objects.filter(pgoods_id=id)
        print(babyid)
        if len(babyid) > 0:
            return render(request, 'welcome.html', {'test': '产品已存在'})
        else:
            babyidsave = Goods.objects.create(name=str(txtIndexAddUrl), pgoods_id=id, keyword1=keywords, user_id=1, shop_id=1)
            babyidsave.save()
            try:
                #selectmodels
                #if conntaions
                #return：existing problems
                #if no conntaions
                #Go online to read
                pass
            except:
                #有错，请联系管理员
                pass
            return render(request, 'welcome.html',{'test':test})

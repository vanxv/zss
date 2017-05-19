#coding=utf-8
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import CryOrder
from goods.models import Shop, Goods
import re
import requests
from django.views.generic.base import View  # View是一个get和post的一个系统，可以直接def post和get，

#url切出数字和切出店铺分类
def platformUrl(self):
    if 'tmall' in self:
        platform = 'tmall'
        tempid = re.findall(r'id=(\d+)',self)
        id = tempid[0]
        res = requests.get(self)
        res.encoding="gbk"
        print(res.text)
        #next get image#
        imagetemp1 = re.findall(r'J_ImgBooth"(.*?)>', res.text) #正则切到J_ImgBooth字段
        imagetemp2 = re.findall(r'src="(.*?).jpg', imagetemp1[0]) #正则切到J_ImgBooth字段
        GoodsImage = imagetemp2[0] + '.jpg'
        if 'http' in GoodsImage:
            pass
        else:
            GoodsImage = 'https:' + GoodsImage
        #next get GoodsName
        tempGoodsname = re.findall(r'<title>(.*?)-', res.text)#获取产品名
        Goodsname = tempGoodsname[0]
        tempname = re.findall(r'<strong>(.*?)</strong>', res.text) #正则获取用户名
        shopname = tempname[0]
        shopusername = tempname[0]
    elif 'taobao' in self:
        platform = 'taobao'
        id = re.findall(r'id=(\d+)',self)[0]
        shopname = ''
        shopusername = ''
        GoodsImage = ''
    elif 'jd' in self:
        platform = 'jd'
        jd = re.findall(r'(\d+)',self)
        id = jd[0]
        GoodsImage = ''
    elif '1688' in self:
        platform = '1688'
    else:
        pass
    return id, platform, shopname ,shopusername, GoodsImage, Goodsname


class savegroup():
    #save shop
    def saveshop(self,user,shopname,shopkeepername,platform):
        saveshop = Shop.objects.create(user=user, shopname=shopname,shopkeepername=shopkeepername,platform=platform)
        saveshop.save()
#save Goods
    def Goods(self):
        pass
#save task

#Create your views here.
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
        id,platform,shopname,shopusername,GoodsImage,Goodsname =platformUrl(txtIndexAddUrl) #用正则读取数据
        tempGoodsTrue = Goods.objects.filter(pgoods_id=id, platform=platform, shop__shopname__contains=shopname)
        tempGoodsUserTrue = Goods.objects.filter(pgoods_id=id, platform=platform, shop__shopname__contains=shopname, user_id=request.user.id)
        tempShopTrue = Shop.objects.filter(shopname=shopname, platform=platform)
        tempShopUserTrue = Shop.objects.filter(shopname=shopname, platform=platform, user_id=request.user.id)
        #这里到时候还得改，写可用再说
        if len(tempGoodsUserTrue) >0: #判断产品是否存在
            print('发布任务')
        elif len(tempShopUserTrue) >0: #判断产品是否在其他账户上
            return render(request, 'welcome.html', {'test': '产品已存在'})
        elif len(tempShopUserTrue) >0: #判断产品是否在其他账户上
            print('发布任务，发布产品')
        elif len(tempShopTrue) >0: #判断产品是否在其他账户上
            return render(request, 'welcome.html', {'test': '店铺已存在其他人账户上'})
        else:
            print('发布店铺、发布产品、发布任务')
            saveshop = Shop.objects.create(user=request.user, shopname=shopname, shopkeepername=shopusername,platform=platform) #增加店铺
            saveshop.save()
            saveGoods = Goods.objects.create(user=request.user, shop=saveshop, name=Goodsname, pgoods_id=id, sendaddress='', platform=platform,image1=GoodsImage,keyword1=keywords,price1=request.POST['money'],remark1=note)
            saveGoods.save()
            savecryorder = CryOrder.objects.create(Userid=request.user, OrderSort='', Status= '', StartTime='', EndTime='', ShopId=saveshop, GoodId=saveGoods, Money=request.POST['money'], platform=platform, Keywords=keywords,Note=note)
            savecryorder.save()
        return render(request, 'welcome.html',{'test':'已经发布任务'})

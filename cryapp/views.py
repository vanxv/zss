#coding=utf-8
from django.shortcuts import render, redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import CryOrder
from goods.models import Shop, Goods
from users.models import AuthUser
import re
import requests
from django.views.generic.base import View  # View是一个get和post的一个系统，可以直接def post和get，
from django.contrib.auth import authenticate, login

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
class sellerIndex(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        return render(request, 'material/seller/dashboard.html')

class seller_orders(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        pagenumber=1
        pagearray =[]
        productnumber=30
        orderslists = {}
        ordersfilter = CryOrder.objects.filter(Userid=request.user.id).order_by()
        pagetotal = len(ordersfilter)
        pagearray = int(productnumber/pagetotal)+1
        orderlistid = 1
        for orderslist in ordersfilter:
            orderslists[orderlistid] = {
                'id':orderslist.id,
                'images':orderslist.GoodId.image1,
                'goodid':orderslist.GoodId,
                'shopname':orderslist.ShopId.shopname,
                'shopkeepname':orderslist.ShopId.shopkeepername,
                'Keywords':orderslist.Keywords,
                'platform':orderslist.ShopId.platform,
                'OrderSort':orderslist.OrderSort,
                'Status':orderslist.Status,
                'StartTime':orderslist.StartTime,
                'EndTime':orderslist.EndTime,
                'Note':orderslist.Note,
                'Money':orderslist.Money,
            }
            orderlistid += 1

        print(len(ordersfilter))
        return render(request, 'material/seller/table.html',{'orderslists':orderslists})

class buyerIndex(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            orderdict = {}
            order = CryOrder.objects.filter()
            for corder in order:
                if corder.GoodId.id in orderdict:
                    orderdict[corder.GoodId.id][0] += 1
                else:
                    orderdict[corder.GoodId.id] = [1,corder.GoodId.image1,corder.GoodId.name, corder.GoodId.platform,corder.Money]
            # ------ old index
            # return render(request, 'index/index.html', {'orderdict':orderdict})
            # ------ old index
            return render(request, 'material/index.html', {'orderdict':orderdict})
        else:
            orderdict = {}
            order = CryOrder.objects.filter()
            for corder in order:
                if corder.GoodId.id in orderdict:
                    orderdict[corder.GoodId.id][0] += 1
                else:
                    orderdict[corder.GoodId.id] = [1,corder.GoodId.image1,corder.GoodId.name, corder.GoodId.platform,corder.Money]
            return render(request, 'index/index.html', {'orderdict':orderdict})

def GetGoods(request, goodid):
    if request.user.is_authenticated:
        if request.method=="GET":
            ##get status goods insert orderNumber
            goodsview = Goods.objects.get(id=goodid)
            money = CryOrder.objects.filter(GoodId=goodid)
            # --- old product list
            #return render(request, 'product/goods.html', {'goodsview':goodsview,'money':money})
            # --- old product list
            return render(request, 'material/product.html', {'goodsview':goodsview,'money':money})
        elif request.method == "POST":
            print(request.POST['cryorderid'])
            goodsviews = CryOrder.objects.filter(id=request.POST['cryorderid']).update(buyerid_id=request.user.id, Status=2)
            print('-----')
            return render(request, 'material/product.html')

    else:
        return render(request, 'login.html')

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
            saveshop = Shop.objects.filter(user=request.user, shopname=shopname) #增加店铺
            saveGoods = Goods.objects.filter(user=request.user, pgoods_id=id)#shop=saveshop, name=Goodsname,
            saveshop = Shop.objects.filter(user=request.user, shopname=shopname) #增加店铺
            getGoods = Goods.objects.get(user=request.user, pgoods_id=id, platform=platform)
            savecryorder = CryOrder.objects.create(Userid=request.user,ShopId=saveshop, Status='1', GoodId=getGoods, StartTime=startdatetime, EndTime=endDateTime,  platform=platform, Keywords=keywords,Note=note, Money=request.POST['money'])
            savecryorder.save()
        elif len(tempShopUserTrue) >0: #判断产品是否在其他账户上
            return render(request, 'material/seller/dashboard.html', {'test': '产品已存在'})
        elif len(tempShopUserTrue) >0: #判断产品是否在其他账户上
            print('发布任务，发布产品')
            saveshop = Shop.objects.filter(user=request.user, shopname=shopname, shopkeepername=shopusername,platform=platform) #增加店铺
            saveshop.save()
            saveGoods = Goods.objects.create(user=request.user, shop=saveshop, name=Goodsname, pgoods_id=id, sendaddress='', platform=platform,image1=GoodsImage,keyword1=keywords,price1=request.POST['money'],remark1=note)
            saveGoods.save()
            getGoods = Goods.objects.get(user=request.user, pgoods_id=id, platform=platform)
            savecryorder = CryOrder.objects.create(Userid=request.user,ShopId=saveshop, Status='1', GoodId=getGoods, StartTime=startdatetime, EndTime=endDateTime,  platform=platform, Keywords=keywords,Note=note, Money=request.POST['money'])
            savecryorder.save()
        elif len(tempShopTrue) >0: #判断产品是否在其他账户上
            return render(request, 'material/seller/dashboard.html', {'test': '店铺已存在其他人账户上'})
        else:
            print('发布店铺、发布产品、发布任务')
            saveshop = Shop.objects.create(user=request.user, shopname=shopname, shopkeepername=shopusername,platform=platform) #增加店铺
            saveshop.save()
            saveGoods = Goods.objects.create(user=request.user, shop=saveshop, name=Goodsname, pgoods_id=id, sendaddress='', platform=platform,image1=GoodsImage,keyword1=keywords,price1=request.POST['money'],remark1=note)
            saveGoods.save()
            savecryorder = CryOrder.objects.create(Userid=request.user,ShopId=saveshop, Status='1', GoodId=saveGoods, StartTime=startdatetime, EndTime=endDateTime,  platform=platform, Keywords=keywords,Note=note, Money=request.POST['money'])
            savecryorder.save()
        return render(request, 'material/seller/dashboard.html',{'test':'已经发布任务'})

#-------orders add delete update -----#
def cryapp_delete(request, cryorders_id = 0):
    cryorders = int(cryorders_id)
    deletecryappdate = CryOrder.objects.filter(id=cryorders).update(Status=0)
    print(cryorders)
    return render(request, 'material/seller/dashboard.html',{})

class cryapp_update(LoginRequiredMixin, View):
    pass

class cryapp_audit(LoginRequiredMixin, View):
    pass

def cryapp_edit(request, cryorders_id = 0):
    if request.method=="GET":
        cryorders = int(cryorders_id)
        editcryappdata = CryOrder.objects.get(id=cryorders)
        return render(request, 'material/seller/project_edit.html', {'editcryappdata':editcryappdata})
    if request.method=="POST":
        cryorders = int(cryorders_id)
        editcryappdata = CryOrder.objects.filter(id=cryorders).update(Keywords=request.POST['keywords'])
        return render(request, 'material/seller/table.html')

#-------orders add delete update -----#




def buyeradmin(request):
        return render(request, 'material/buyer/dashboard.html')


class buyer_orders(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        pagenumber=1
        pagearray =[]
        productnumber=30
        orderslists = {}
        ordersfilter = CryOrder.objects.filter(buyerid=request.user.id).order_by()
        pagetotal = len(ordersfilter)
        pagearray = int(productnumber/pagetotal)+1
        orderlistid = 1
        for orderslist in ordersfilter:
            orderslists[orderlistid] = {
                'id':orderslist.id,
                'images':orderslist.GoodId.image1,
                'goodid':orderslist.GoodId,
                'shopname':orderslist.ShopId.shopname,
                'shopkeepname':orderslist.ShopId.shopkeepername,
                'Keywords':orderslist.Keywords,
                'platform':orderslist.ShopId.platform,
                'OrderSort':orderslist.OrderSort,
                'Status':orderslist.Status,
                'StartTime':orderslist.StartTime,
                'EndTime':orderslist.EndTime,
                'Note':orderslist.Note,
                'Money':orderslist.Money,
            }
            orderlistid += 1

        print(len(ordersfilter))
        return render(request, 'material/buyer/table.html',{'orderslists':orderslists})
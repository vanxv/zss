#coding:utf-8
from django.shortcuts import render, HttpResponse
from adapi.models import advert
import json
import time
import re
import requests
from users.models import AuthUser
from goods.models import Shop
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
        tempusername = re.findall(r'data-nick="(.*?)"', res.text) #正则获取用户名
        tempshopname = re.findall(r'title="掌柜:(.*?)"', res.text) #正则获取用户名
        shopname = tempshopname[0]
        shopusername = tempusername[0]
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

def advert_method(request):
    advertlist =  {}
    advertvalue = advert.objects.all()
    for i in advertvalue.all():
        advertlist[i.name] = {'id':i.id,'key':i.name,'title':i.title,'thumb':i.thumb,'url':i.url,'timeline':i.timeline}
    print(json.dumps(advertlist))
    print(type(json.dumps(advertlist)))
    return HttpResponse(json.dumps(advertlist, ensure_ascii=False, indent=2), content_type='application/json')


def version_last(request):
    version_list =  {"ver":"2.0.7","version":"1.0.1","host":"http://www.zhsee.com/"}
    return HttpResponse(json.dumps(version_list, ensure_ascii=False, indent=2), content_type='application/json')


#Just get keywords
def getword(request):
    try:
        print(request.POST['postdata'])
    except:
        print('no')
    return HttpResponse([1,2,3], content_type='application/json')


def login(request):
    username = request.GET['username']
    pwd = request.GET['password']
    userlist = AuthUser.objects.filter(username=username, password=pwd)
    if userlist.count() > 0:
        login_list = {"return": 0, "result": {"member_id": userlist[0].id, "member_name": userlist[0].username, "status": "1", "level_id": 2},"servtime": 1501755761}
    else:
        login_list = {"return": 1, "result": "账号密码错误","servtime": 1501755761}
    login_list['servtime'] = int(time.time())
    return HttpResponse(json.dumps(login_list, ensure_ascii=False, indent=2), content_type='application/json')

def package(request):
    #if shop没有捆绑 else:"return":"undefined"
    #product":["fun_1"] control button
    shop_id = request.POST['shop_id']
    member_id = request.POST['member_id']
    getuser = AuthUser.objects.get(id=member_id)
    getshopid = Shop.objects.filter(shopkeepername=shop_id)
    if getshopid.count() > 0:
        packagelist = {"id":"6","key":"test0","name":"专业版","product":["fun_1","fun_1","fun_1","fun_2","fun_3","fun_4","fun_5","fun_6","fun_7","fun_8","fun_9","fun_10","fun_11","fun_12","fun_13","fun_14","fun_15","fun_count"],"data":"false"}
    else:
        packagelist = {"return":"undefined","id":"6","key":"test0","name":"专业版","product":["fun_1","fun_1","fun_1","fun_2","fun_3","fun_4","fun_5","fun_6","fun_7","fun_8","fun_9","fun_10","fun_11","fun_12","fun_13","fun_14","fun_15","fun_count"],"data":"false"}
    return HttpResponse(json.dumps(packagelist, ensure_ascii=False, indent=2), content_type='application/json')


def keywords(request):
    #getkeyword
    keywordslist = request.GET['text'].split(' ')
    keyword = {"words":keywordslist,"times":1}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')

def binding(request):
    member_id = request.POST['member_id']
    member_name = request.POST['member_name']
    getshopurl = request.POST['url']
    id, platform, shopname, shopusername, GoodsImage, Goodsname = platformUrl(getshopurl)  # 用正则读取数据
    getShopTure = Shop.objects.filter(shopkeepername=shopusername)
    if getShopTure.count()>0:
        keyword = {"result": '店铺已被其他用户捆绑，请联系管理员', "return": 0}
    else:
        getuser = AuthUser.objects.get(username=member_name)
        createshop = Shop.objects.filter(shopname=shopname, shopkeepername=shopusername, user=getuser, platform=platform)
        createshop.save()
        keyword = {"result":'a',"return":1}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')


def clientstore(request):
    memberid = request.GET['memberid']
    userid = AuthUser.objects.get(user=memberid)
    getshopid = Shop.objects.filter(user=userid)
    clientstoretuples = []

    for i in getshopid:
        getshopclass = {}
        getshopclass['shop_name'] = i.shopname
        getshopclass['shop_id'] = i.shopkeepername
        getshopclass['shop_url'] = 'www.zhess.com'
        getshopclass['validity'] = int(time.time())
        getshopclass['dateline'] = int(time.time())
        clientstoretuples.append(getshopclass)
    keyword = {"return": "1", "result": clientstoretuples, "servtime": int(time.time())}

    #keyword = {"return":0,"result":[{"shop_id":"71171388","shop_name":"Sharp夏普电视","shop_url":"\/\/wjdianshi.taobao.com\/","validity":"1502777024","dateline":"1501854500"},{"shop_id":"59158241","shop_name":"今旺旗舰店","shop_url":"\/\/jinwang.tmall.com","validity":"1501593729","dateline":"1501593729"},{"shop_id":"108854614","shop_name":"匠心店","shop_url":"\/\/shop108854614.taobao.com\/","validity":"1500249425","dateline":"1500249425"},{"shop_id":"57300507","shop_name":"热风旗舰店","shop_url":"\/\/hotwind.tmall.com","validity":"1500129234","dateline":"1500129234"}],"servtime":1502110224}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')


def stat(request):
    #keyword = {"return":0,"result":[{"shop_id":"71171388","shop_name":"Sharp夏普电视","shop_url":"\/\/wjdianshi.taobao.com\/","validity":"1502777024","dateline":"1501854500"},{"shop_id":"59158241","shop_name":"今旺旗舰店","shop_url":"\/\/jinwang.tmall.com","validity":"1501593729","dateline":"1501593729"},{"shop_id":"108854614","shop_name":"匠心店","shop_url":"\/\/shop108854614.taobao.com\/","validity":"1500249425","dateline":"1500249425"},{"shop_id":"57300507","shop_name":"热风旗舰店","shop_url":"\/\/hotwind.tmall.com","validity":"1500129234","dateline":"1500129234"}],"servtime":1502110224}
    keyword = {"return":0,"servtime":1502110224}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')

def getdata(request):
    keyword = {"return":0,"result":{"site":"taobao","gid":"534822129268","title":"匠心工厂直营！玻妞遥控电动清洁器家用擦窗机器人擦玻璃机器人","thumb":"\/\/gd1.alicdn.com\/imgextra\/i4\/1976389603\/TB25CGBXjnyQeBjSspbXXazUXXa_!!1976389603.jpg_400x400.jpg","prime":"1377.00","multi":["\/\/gd3.alicdn.com\/imgextra\/i4\/1976389603\/TB25CGBXjnyQeBjSspbXXazUXXa_!!1976389603.jpg_400x400.jpg"],"shop_id":"108854614","shop_url":"\/\/shop108854614.taobao.com\/","shop_name":"匠心店","type":""}}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')


def getshop(request):
    getshopurl = request.GET['url']
    id, platform, shopname, shopusername, GoodsImage, Goodsname = platformUrl(getshopurl)  # 用正则读取数据
    #keyword = {"return":0,"result":[{"shop_id":"71171388","shop_name":"Sharp夏普电视","shop_url":"\/\/wjdianshi.taobao.com\/","validity":"1502777024","dateline":"1501854500"},{"shop_id":"59158241","shop_name":"今旺旗舰店","shop_url":"\/\/jinwang.tmall.com","validity":"1501593729","dateline":"1501593729"},{"shop_id":"108854614","shop_name":"匠心店","shop_url":"\/\/shop108854614.taobao.com\/","validity":"1500249425","dateline":"1500249425"},{"shop_id":"57300507","shop_name":"热风旗舰店","shop_url":"\/\/hotwind.tmall.com","validity":"1500129234","dateline":"1500129234"}],"servtime":1502110224}
    keyword = {"return":0,"result":{"shop_id":shopusername,"shop_name":shopname,"shop_url":"www.zhess.com","validity":"1500249425","dateline":"1500249425"},"servtime":1502110224}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')

# Create your views here.

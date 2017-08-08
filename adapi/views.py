#coding:utf-8
from django.shortcuts import render, HttpResponse
from adapi.models import advert
import json
import time

def advert_method(request):
    advertlist =  {}
    advertvalue = advert.objects.all()
    for i in advertvalue.all():
        advertlist[i.name] = {'id':i.id,'key':i.name,'title':i.title,'thumb':i.thumb,'url':i.url,'timeline':i.timeline}
    print(json.dumps(advertlist))
    print(type(json.dumps(advertlist)))
    return HttpResponse(json.dumps(advertlist, ensure_ascii=False, indent=2), content_type='application/json')


def version_last(request):
    version_list =  {"ver":"2.0.7","version":"3.0.1","host":"http://www.chaocheyi.com/"}
    return HttpResponse(json.dumps(version_list, ensure_ascii=False, indent=2), content_type='application/json')



def get_word(request):
    try:
        print(request.POST['postdata'])
    except:
        print('no')
    return HttpResponse([1,2,3], content_type='application/json')


def login(request):
    login_list = {"return": 0, "result": {"member_id": "3625", "member_name": "6780192", "status": "1", "level_id": 2},"servtime": 1501755761}
    login_list['servtime'] = int(time.time())
    return HttpResponse(json.dumps(login_list, ensure_ascii=False, indent=2), content_type='application/json')

def package(request):
    #if shop没有捆绑 else:"return":"undefined"
    #product":["fun_1"] control button
    packagelist = {"id":"6","key":"test0","name":"专业版","product":["fun_1","fun_1","fun_1","fun_2","fun_3","fun_4","fun_5","fun_6","fun_7","fun_8","fun_9","fun_10","fun_11","fun_12","fun_13","fun_14","fun_15","fun_count"],"data":"false"}
    return HttpResponse(json.dumps(packagelist, ensure_ascii=False, indent=2), content_type='application/json')


def keywords(request):
    #getkeyword
    keywordslist = request.GET['text'].split(' ')
    keyword = {"words":keywordslist,"times":1}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')

def binding(request):
    print('a')
    #var re = jsonp.return;
    #if (re != 0) {alert("超车易提醒您：" + jsonp.result)}
    keyword = {"result":'a',"return":1}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')


def clientstore(request):
    keyword = {"return":0,"result":[{"shop_id":"71171388","shop_name":"Sharp夏普电视","shop_url":"\/\/wjdianshi.taobao.com\/","validity":"1502777024","dateline":"1501854500"},{"shop_id":"59158241","shop_name":"今旺旗舰店","shop_url":"\/\/jinwang.tmall.com","validity":"1501593729","dateline":"1501593729"},{"shop_id":"108854614","shop_name":"匠心店","shop_url":"\/\/shop108854614.taobao.com\/","validity":"1500249425","dateline":"1500249425"},{"shop_id":"57300507","shop_name":"热风旗舰店","shop_url":"\/\/hotwind.tmall.com","validity":"1500129234","dateline":"1500129234"}],"servtime":1502110224}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')

    #{"return":0,"result":[{"shop_id":"71171388","shop_name":"Sharp夏普电视","shop_url":"\/\/wjdianshi.taobao.com\/","validity":"1502777024","dateline":"1501854500"},{"shop_id":"59158241","shop_name":"今旺旗舰店","shop_url":"\/\/jinwang.tmall.com","validity":"1501593729","dateline":"1501593729"},{"shop_id":"108854614","shop_name":"匠心店","shop_url":"\/\/shop108854614.taobao.com\/","validity":"1500249425","dateline":"1500249425"},{"shop_id":"57300507","shop_name":"热风旗舰店","shop_url":"\/\/hotwind.tmall.com","validity":"1500129234","dateline":"1500129234"}],"servtime":1502110131}


def stat(request):
    keyword = {"return":0,"result":[{"shop_id":"71171388","shop_name":"Sharp夏普电视","shop_url":"\/\/wjdianshi.taobao.com\/","validity":"1502777024","dateline":"1501854500"},{"shop_id":"59158241","shop_name":"今旺旗舰店","shop_url":"\/\/jinwang.tmall.com","validity":"1501593729","dateline":"1501593729"},{"shop_id":"108854614","shop_name":"匠心店","shop_url":"\/\/shop108854614.taobao.com\/","validity":"1500249425","dateline":"1500249425"},{"shop_id":"57300507","shop_name":"热风旗舰店","shop_url":"\/\/hotwind.tmall.com","validity":"1500129234","dateline":"1500129234"}],"servtime":1502110224}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')

def getdata(request):
    keyword = {"return":0,"result":[{"shop_id":"71171388","shop_name":"Sharp夏普电视","shop_url":"\/\/wjdianshi.taobao.com\/","validity":"1502777024","dateline":"1501854500"},{"shop_id":"59158241","shop_name":"今旺旗舰店","shop_url":"\/\/jinwang.tmall.com","validity":"1501593729","dateline":"1501593729"},{"shop_id":"108854614","shop_name":"匠心店","shop_url":"\/\/shop108854614.taobao.com\/","validity":"1500249425","dateline":"1500249425"},{"shop_id":"57300507","shop_name":"热风旗舰店","shop_url":"\/\/hotwind.tmall.com","validity":"1500129234","dateline":"1500129234"}],"servtime":1502110224}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')


def getshop(request):
    keyword = {"return":0,"result":[{"shop_id":"71171388","shop_name":"Sharp夏普电视","shop_url":"\/\/wjdianshi.taobao.com\/","validity":"1502777024","dateline":"1501854500"},{"shop_id":"59158241","shop_name":"今旺旗舰店","shop_url":"\/\/jinwang.tmall.com","validity":"1501593729","dateline":"1501593729"},{"shop_id":"108854614","shop_name":"匠心店","shop_url":"\/\/shop108854614.taobao.com\/","validity":"1500249425","dateline":"1500249425"},{"shop_id":"57300507","shop_name":"热风旗舰店","shop_url":"\/\/hotwind.tmall.com","validity":"1500129234","dateline":"1500129234"}],"servtime":1502110224}
    return HttpResponse(json.dumps(keyword, ensure_ascii=False, indent=2), content_type='application/json')

# Create your views here.

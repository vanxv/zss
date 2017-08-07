#coding:utf-8
from django.shortcuts import render, HttpResponse
from adapi.models import advert
import json
import time

def advert_method(request):
    advertlist =  {}
    advertvalue = advert.objects.all()
    for i in advertvalue.all():
        print(type(i.title))
        print(i.title)
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
    print('hello')
    login_list = {"return": 0, "result": {"member_id": "3625", "member_name": "6780192", "status": "1", "level_id": 2},"servtime": 1501755761}
    login_list['servtime'] = int(time.time())
    return HttpResponse(json.dumps(login_list, ensure_ascii=False, indent=2), content_type='application/json')

def package(request):
    #product":["fun_1"] control button
    packagelist = {"id":"6","key":"test0","name":"专业版","product":["fun_1","fun_1","fun_1","fun_2","fun_3","fun_4","fun_5","fun_6","fun_7","fun_8","fun_9","fun_10","fun_11"],"data":"false"}
    return HttpResponse(json.dumps(packagelist, ensure_ascii=False, indent=2), content_type='application/json')

# Create your views here.

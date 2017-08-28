from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import mobiletask, mobileid, softid, QQFriends, QQFriendslog
import json
from datetime import datetime, timedelta
from django.core import serializers

# Create your views here.
#------- AUTOSERVER FLOW--------#
#1. mobiles method ='get' server  'task values'
#2. server auto1 make task
#3. mobile sort Deal With
#4. mysql 'mobiletask' is tasklist, other is  userid and SortMessage
# [ ] Add
#   [ ] friend
#        [ ] time在系统分发
#        [ ] number从当日列表计算
#        [ ] 列表是通过算法完成
#   [ ] Group.User
#   [ ]  Group
# [ ] Get.
#   [ ] Friend list.
#       [ ] 判断值是否和服务器一致
#       [ ] 如果不一致从新数据跑一次
#   [ ] Group user list.
#   [ ] Group. list.
# [ ] Change.ip
# [ ] Change name.
#   [ ] 在检测的时是否在数据有这个号如果没有就点击查看，并修改名字
# [ ] Send.
#   [ ] Space.
#   [ ] Message.
#   [ ] Say.
# [ ] interactivity
#   [ ] Like.
#   [ ] Get information.
#------- AUTOSERVER FLOW--------#


def index(request):
    if request.method=='GET':
        return JsonResponse({'foo': 'bar'})

def Task(request, mobile_ID = ''):
    if request.method=='POST':
        mobileID = mobileid.objects.get(id=int(mobile_ID))
        locktime = datetime.now() - timedelta(minutes=1)
        task = mobiletask.objects.filter(mobileid=mobileID, status=1).filter(startTime__lt=locktime)[0]
        taskdict ={
            'deviceName':task.mobileid.deviceName,
            'platformVersion':task.mobileid.platformVersion,
            'appActivity':task.softid.appActivity,
            'appPackage':task.softid.appPackage,
            'taskSort':task.taskSort,
            'AccountId': task.AccountId,
            'content': task.content,
            'startTime': task.startTime,
            'endTime': task.endTime,
            'statusTime': task.statusTime,
            'status': task.status,
            'webserverurl':task.mobileid.webserverurl,
            'udid':task.mobileid.udid,
            'mobileID':task.mobileid_id,
            'taskid':task.id,
            'QQ':task.mobileid.QQ,
        }
        return JsonResponse(taskdict, safe=False)

def QQID(request, QQ_ID=''):
    if request.method == 'GET':
        QQlist_temp = QQFriends.objects.filter(QQid=QQ_ID)
        QQlist = []
        for x in QQlist_temp:
            QQlist.append(x.QQFriends)
    return JsonResponse(QQlist, safe=False)


# def tasklog(request, mobileID='', taskid=''):
#     if request.method=='GET':
#         mobileidget = mobileid.objects.get(id=int(mobileID))
#         mobiletaskget = mobiletask.objects.get(id=int(taskid))
#         tasklog = mobiletasklog.objects.filter(mobileid=mobileidget, mobiletask=mobiletaskget).order_by('-logdatetime')
#         if tasklog.exists():
#             return HttpResponse(tasklog[0].logid)
#         else:
#             return HttpResponse(0)
#
# def tasklogDone(request, mobileID='', taskid='', objectid=''):
#     if request.method == 'POST':
#         mobileidget = mobileid.objects.get(id=int(mobileID))
#         mobiletaskget = mobiletask.objects.get(id=int(taskid))
#         tasklog = mobiletasklog.objects.create(mobileid=mobileidget, mobiletask=mobiletaskget, logid=objectid)
#         tasklog.save()
#         return HttpResponse('ok')

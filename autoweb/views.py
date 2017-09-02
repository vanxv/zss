from django.shortcuts import render, HttpResponse,redirect
from django.http import JsonResponse
from .models import mobiletask, mobileid, softid, QQFriends, QQFriendslog,QQGroup,QQGrouplog,QQGroupList,QQGroupListlog, UserPortrait,softid
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
        UserPortraitlist = UserPortrait.objects.all()
        return render(request, 'autoweb/autoweb.html', {"UserPortraitlist":UserPortraitlist})
    if request.method=='POST':
        UserPortrait_Id = int(request.POST['UserPortrait'])
        TaskSort = int(request.POST['TaskSort'])
        GetMobilelist = mobileid.objects.filter(UserPortraitId=UserPortrait_Id)
        UserPortraitid = request.POST['UserPortrait']
        getlist = request.POST['getlist'].split(',')
        sendcontains = request.POST['sendcontains']
        softname = 0
        try:
            wechat = int(request.POST['wechat'])
        except:
            wechat=0
        try:
            QQ = int(request.POST['QQ'])
        except:
            QQ = 0
        if QQ == 1:
            softname = 1
        elif wechat == 1:
            softname = 2

        ##1. add firends
        if TaskSort == 1:
            for Qs in getlist:
                #Qsql = Qsql | Q(QQFriends=Qs)
                if Qs.__len__()<5:
                    del getlist[getlist.index(Qs):]
                    continue
                if QQFriends.objects.filter(QQfriends=int(Qs)).__len__()>2:
                    del getlist[getlist.index(Qs):]
                    continue

                softobname = softid.objects.get(id=softname)
                userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
                createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget,content=sendcontains,taskSort=TaskSort,softid=softobname,AccountId=int(Qs))
                createtask.save()
                return redirect('/autoweb/')
                #startTime = models.DateTimeField(null=True, default=timezone.now)
           #TaskSort:
        #2. add group
        if TaskSort == 2:
            for Qs in getlist:
                # Qsql = Qsql | Q(QQFriends=Qs)
                if Qs.__len__() < 5:
                    del getlist[getlist.index(Qs):]
                    continue
                if QQGroup.objects.filter(QQfriends=int(Qs)).__len__() > 2:
                    del getlist[getlist.index(Qs):]
                    continue

                softobname = softid.objects.get(id=softname)
                userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
                createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget, content=sendcontains,taskSort=TaskSort,
                                                       softid=softobname, AccountId=int(Qs))
                createtask.save()
                return redirect('/autoweb/')
        #3. sendALL firends
        if TaskSort == 3:
                softobname = softid.objects.get(id=softname)
                userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
                createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget, content=sendcontains,
                                                       taskSort=TaskSort,
                                                       softid=softobname)
                createtask.save()
                return redirect('/autoweb/')
        #4. sendALL Group
        if TaskSort == 4:
            softobname = softid.objects.get(id=softname)
            userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
            createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget, content=sendcontains,
                                                   taskSort=TaskSort,
                                                   softid=softobname)
            createtask.save()
            return redirect('/autoweb/')
        #5. Send assign firends
        if TaskSort == 5:
            for Qs in getlist:
                if Qs.__len__() < 5:
                    del getlist[getlist.index(Qs):]
                    continue
                softobname = softid.objects.get(id=softname)
                userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
                createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget, content=sendcontains,
                                                       taskSort=TaskSort, softid=softobname, AccountId=int(Qs))
                createtask.save()
                return redirect('/autoweb/')
        #6. Send assign Group
        if TaskSort == 6:
            for Qs in getlist:
                if Qs.__len__() < 5:
                    del getlist[getlist.index(Qs):]
                    continue
                softobname = softid.objects.get(id=softname)
                userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
                createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget, content=sendcontains,
                                                       taskSort=TaskSort, softid=softobname, AccountId=int(Qs))
                createtask.save()
                return redirect('/autoweb/')
        #7. get Group list
        if TaskSort == 7:
            softobname = softid.objects.get(id=softname)
            userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
            createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget, content=sendcontains,
                                                   taskSort=TaskSort,
                                                   softid=softobname)
            createtask.save()
            return redirect('/autoweb/')
        #8. get Group list Firends
        if TaskSort == 8:
            softobname = softid.objects.get(id=softname)
            userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
            createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget, content=sendcontains,
                                                   taskSort=TaskSort,
                                                   softid=softobname)
            createtask.save()
            return redirect('/autoweb/')

        #8. get Group list Firends
        if TaskSort == 9:
            for Qs in getlist:
                if Qs.__len__() < 5:
                    del getlist[getlist.index(Qs):]
                    continue
            softobname = softid.objects.get(id=softname)
            userportraitIdget = UserPortrait.objects.get(id=int(UserPortrait_Id))
            createtask = mobiletask.objects.create(UserPortraitId=userportraitIdget, content=sendcontains,
                                                   taskSort=TaskSort,
                                                   softid=softobname)
            createtask.save()
            return redirect('/autoweb/')

mobiletask_taskSort_choices = (
    (1, 'add_User'),
    (2, 'ADD_GROUP'),
    (3, 'send_message_to_friend_list'),
    (4, 'send_message_to_GROUP_list'),
    (5, 'send_message_to_user_Accoutid'),
    (6, 'send_message_to_GROUP_Accoutid'),
    (7, 'Get_Pople_list'),
    (8, 'Get_Group_list'),
    (9, 'Get_Group_QQ_list'),
)



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

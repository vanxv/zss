from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import mobiletask, mobileid, softid
import json
from datetime import datetime, timedelta
from django.core import serializers

# Create your views here.

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
        }
        return JsonResponse(taskdict, safe=False)
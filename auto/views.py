from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import mobiletask, mobileid, softid
import json
from django.core import serializers

# Create your views here.

def index(request):
    if request.method=='GET':
        return JsonResponse({'foo': 'bar'})

def Task(request, deviceName = '', platformVersion=''):
    if request.method=='POST':
        mobileID = mobileid.objects.get(andriodname=deviceName, platformVersion=platformVersion)
        task = mobiletask.objects.filter(mobileid=mobileID, status=1)[0]
        taskdict ={
            'appActivity':task.softid.appActivity,
            'appPackage':task.softid.appPackage,
            'taskSort':task.taskSort,
            'AccountId': task.AccountId,
            'content': task.content,
            'startTime': task.startTime,
            'endTime': task.endTime,
            'statusTime': task.statusTime,
            'status': task.status,
        }
        return JsonResponse(taskdict, safe=False)
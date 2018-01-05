from django.shortcuts import render
from .models import woopGameName, woopGameOutcome, woopGameObstacles, WoopGameScore, UserWoopGameScore,WoopGameReward
# Create your views here.
from django.contrib.auth import authenticate, login


def index(request):
    if request.user.is_authenticated == False:
        return render(request, 'login.html')
    if request.method=='GET':
        UserwoopGameName = woopGameName.objects.filter(user=request.user)
        return render(request, 'woopgame/index.html', {"UserwoopGameName":UserwoopGameName})
    if request.method=='POST':
        pass

def woopgame(request, woopgameid):
    if request.user.is_authenticated == False:
        return render(request, 'login.html')
    if request.method=='GET':
        UserwoopGameName = woopGameOutcome.objects.filter(woopGameNameId=woopgameid.user)
        UserwoopGameName = woopGameObstacles.objects.filter(woopGameNameId=woopgameid.user)
        UserwoopGameName = WoopGameReward.objects.filter(woopGameNameId=woopgameid.user)
        return render(request, 'woopgame/index.html', {"UserwoopGameName":UserwoopGameName})
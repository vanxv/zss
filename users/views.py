from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.hashers import make_password
from .models import AuthUser, pcGuid, pcGuidLog, Visuallog, tbUsername, jdUsername, real_name,blacklistlog, pcGuid, pcGuidLog
from django.views.generic.base import View
from cryapp.models import CryOrder
from .forms import LoginForm, RegisterForm, tbForm, jdForm
from cryapp.models import CryOrder
from django.db.models import Q
from goods.models import Goods
from financial.models import deposit
from cryapp.views import authenticationlogin
# Create your views here.

@login_required
def seller(request):
    '''sellerindex'''
    return render(request, 'index/index.html')

@login_required
def logout(request):
    '''注销登录'''
    auth.logout(request)
    return redirect('login')

def AuUserlogin(request):
    authen = request.user.is_authenticated()
    if authen == False:
        return render(request, 'login.html')
        pass


class RegisterView(View):
    template_name = 'register.html'
    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        form = RegisterForm(request.POST)
        if not form.is_valid():
            return render(request, self.template_name)
        username = request.POST.get('username')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')
        if password != password2:
            return render(request, 'register.html', {"msg": "密码两次输入不一致"})

        user_profile = AuthUser()
        user_profile.username = username
        # user_profile.email = username
        user_profile.password = make_password(password)
        user_profile.is_active = True
        user_profile.save()
        createdeposit = deposit.objects.create(user=user_profile, deposit=0)
        createdeposit.save()
        return redirect('login')
class LoginView(View):
    def get(self, request):
        return render(request, "login.html")

    def post(self, request):
        form = LoginForm(request.POST)
        if not form.is_valid():
            return render(request, "login.html", {"login_form": form})

        username = request.POST.get('username')
        password = request.POST.get('password')
        print(request.POST.get('cpuid'))
        print(request.POST.get('visual'))
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('buyerindex')
        else:
            return render(request, 'login.html', {'msg': '账号密码错误'})


##pc hardware insert
def PcHardwareInsert(request):
    if request.method == 'GET':
        return render(request, 'users/usersRequest.html', {'usersRequest':1});
    elif request.method == 'POST':
        form = LoginForm(request.POST)
        if not form.is_valid():
            return render(request, 'users/usersRequest.html', {'usersRequest':form});
        #get hardVisual
        username = request.POST.get('username')
        password = request.POST.get('password')
        cpuid = request.POST.get('cpuid')
        visual = int(request.POST.get('visual'))
        diskid = request.POST.get('diskid')
        biosid = request.POST.get('biosid')
        boardid = request.POST.get('boardid')
        hardkey = int(request.POST.get('hardkey'))
        print(hardkey)
        #get hardVisual
        ### down get ip###
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        ###above get ip###
        #-------return add rules ------------#

        #next authuser
        user = auth.authenticate(username=username, password=password)
        usersRequest = ''
        if user is not None:
            usersRequest = 'usernamehave'
            auth.login(request, user)
            #visual rules
            if visual == 1:
                user = AuthUser.objects.get(username=username)
                visuallog = Visuallog.objects.create(user=user, resip=ip)
                Visuallog.save()
                BlackListUpdate = AuthUser.objects.update(username=user, is_blacklist=1)
                BlackListUpdate.save()
                usersRequest = 1
                return render(request, 'users/usersRequest.html', {'usersRequest':usersRequest});
            else:
                user = AuthUser.objects.get(username=username)
                usersRequest = 1
                try:
                    pcguidTurn = pcGuid.objects.get(PcGuid=hardkey, user=user)
                    pcGuidLogturn =pcGuidLog.objects.create(user=user, PcGuid=pcguidTurn, resip=ip)
                    pcGuidLogturn.save()
                except:
                    savehard = pcGuid.objects.create(user=user, PcGuid=hardkey, cpuid=cpuid, diskid=diskid, boardid=boardid, biosid=biosid, resip=ip)
                    savehard.save()
                    pcguidTurn = pcGuid.objects.get(PcGuid=hardkey)
                    pcGuidLogturn = pcGuidLog.objects.create(user=user, PcGuid=pcguidTurn, resip=ip)
                    pcGuidLogturn.save()

            return render(request, 'users/usersRequest.html', {'usersRequest':usersRequest});
        else:
            usersRequest = 0
            return render(request, 'users/usersRequest.html', {'usersRequest':usersRequest});


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def managelogin(request):
    if not request.user.is_authenticated:
        return render(request, 'login.html')
    if not AuthUser.objects.filter(id=request.user.id).filter(is_staff=1).exists():
        return render(request, "login.html")
    return

#------ manageviews -------#
def manage(request):
    managelogin(request)
    if request.method == 'GET':
        CryOrderfilter = CryOrder.objects.filter(~Q(Status=0),~Q(Status=5),~Q(Status=8),~Q(Status=6)).order_by('-AddTime')
        return render(request, 'material/manager/table.html',{'CryOrderfilter':CryOrderfilter})
    if request.method == 'POST':
        return render(request, 'material/manager/table.html')

#------ manageviews -------#

def manage_hardware(request):
    managelogin(request)
    if request.method == 'GET':
        return render(request, 'material/manager/hardware.html')
    if request.method == 'POST':
        username = request.POST['username']
        hardware = str(request.POST['hardware'])
        if not pcGuid.objects.filter(pcGuid=hardware).filter(user__username=username).exists():
            if not AuthUser.objects.filter(user__username=username).exists():
                return render(request, 'material/manager/hardware.html', {'test':'账户不存在'})
            else:
                GuidgetUsername = AuthUser.objects.get(username=username)
                pcGuidsave = pcGuid.objects.create(user=GuidgetUsername, PcGuid=hardware)
                pcGuidsave.save()
                pcGuidLogsave = pcGuidLog.objects.create(user = GuidgetUsername,PcGuid = pcGuidsave, resip = get_client_ip(), visual = 0)
                return render(request, 'material/manager/hardware.html', {'test':'增加了新硬件与登录记录'})

        else:
            GuidgetUsername = AuthUser.objects.get(username=username)
            pcGuidsave = pcGuid.objects.get(PcGuid=hardware)
            pcGuidLogsave = pcGuidLog.objects.create(user=GuidgetUsername, PcGuid=pcGuidsave, resip=get_client_ip(),visual=0)
            return render(request, 'material/manager/hardware.html', {'test': '增加了登录记录'})


#----status6 ----#
def managestatusSix(request):
        managelogin(request)
        if request.method == 'GET':
            CryOrderfilter = CryOrder.objects.filter(Status=6, managerid=request.user).order_by('-AddTime')
            return render(request, 'material/manager/table.html', {'CryOrderfilter': CryOrderfilter})

#----status7 ----#
def managestatusSeven(request):
        managelogin(request)
        if request.method == 'GET':
            CryOrderfilter = CryOrder.objects.filter(Q(Status=7)).order_by('-AddTime')
            return render(request, 'material/manager/table.html', {'CryOrderfilter': CryOrderfilter})

# ----update order----#
def getorder(request, cryorders_id=0):
    managelogin(request)
    if request.method == 'POST':
        updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=6, managerid=request.user, buyerMoney=3.5)
        return redirect('/users/manage/')

def update_cryorder_statussix(request, cryorders_id=0):
    managelogin(request)
    if request.method == 'POST':
        updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=7, managerid=request.user, buyerMoney=3.5)
        return redirect('/users/manage/')

def update_cryorder_statusSeven(request, cryorders_id=0):
    managelogin(request)
    if request.method == 'POST':
        updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=6, managerid=request.user, buyerMoney=3.5)
        return redirect('/users/manage/')

def update_cryorder_delete(request, cryorders_id=0):
    managelogin(request)
    if request.method == 'POST':
        updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=1, managerid='', buyerMoney='')
        return redirect('/users/manage/')

def cryorder_edit(request, cryorders_id=0):
    managelogin(request)
    if request.method == 'GET':
        return render(request, 'material/manager/project_edit.html')
    if request.method == 'POST':
        return redirect('/users/manage/')
# ----update order----#





# ------ manageviews -------#


#------ tb 1688 -----#
def tb(request):
    authenticationlogin_def = authenticationlogin(request)
    if not authenticationlogin_def is None:
        return authenticationlogin_def
    if request.method == 'GET':
        pass
    elif request.method == "POST":
        form = tbForm(request.POST)
        if not form.is_valid():
            return render(request, 'users/usersRequest.html', {'usersRequest':form});
        selecttbid = tbUsername.objects.filter(tbUsername=request.POST['tbusername'])
        if len(selecttbid.values()) > 0:
            blacklistlogsave = blacklistlog.objects.create(user=request.user, resip=get_client_ip(request), Remarks ='tbiderror:'+ request.POST['tbusername'])
            blacklistlogsave.save()
            return render(request, 'users/usersRequest.html', {'usersRequest':'ID exist'});
        createtbid = tbUsername.objects.create(user = request.user, tbUsername = request.POST['tbusername'])
        createtbid.save()
        return redirect('/cryapp/buyer/users/')

def jd(request):
    authenticationlogin_def = authenticationlogin(request)
    if not authenticationlogin_def is None:
        return authenticationlogin_def
    if request.method == 'GET':
        pass
    if request.method == 'POST':
        form = jdForm(request.POST)
        if not form.is_valid():
            return render(request, 'users/usersRequest.html', {'usersRequest':form});
        selecttbid = jdUsername.objects.filter(jdUsername=request.POST['jdusername'])
        if len(selecttbid.values()) > 0:
            blacklistlogsave = blacklistlog.objects.create(user=request.user, resip=get_client_ip(request), Remarks ='jdiderror:'+ request.POST['jdusername'])
            blacklistlogsave.save()
            return render(request, 'users/usersRequest.html', {'usersRequest':'ID exist'});
        createjdid = jdUsername.objects.create(user = request.user, jdUsername = request.POST['jdusername'])
        createjdid.save()
        return redirect('/cryapp/buyer/users/')
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.hashers import make_password
from .models import AuthUser, pcGuid, pcGuidLog, Visuallog, tbUsername, jdUsername, real_name,blacklistlog, pcGuid, pcGuidLog, alipay, wechat, Idcard, Bankcard
from django.views.generic.base import View
from cryapp.models import CryOrder
from .forms import LoginForm, RegisterForm, tbForm, jdForm, alipayForm, wechatForm, BankcardForm, IdcardForm
from cryapp.models import CryOrder
from django.db.models import Q,F
from goods.models import Goods
from financial.models import deposit, orderBill
from cryapp.views import authenticationlogin, crycost
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
            getuserblacklist = AuthUser.objects.get(username=username)
            if getuserblacklist.is_blacklist == 1:
                return render(request, 'login.html', {'msg': '账户有安全隐患请联系客服。'})
            else:
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
        CryOrderfilter = CryOrder.objects.filter(~Q(Status=0)).filter(~Q(Status=1)).filter(~Q(Status=5)).filter(~Q(Status=6)).filter(~Q(Status=7)).filter(~Q(Status=8)).order_by('-AddTime')
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
            CryOrderfilter = CryOrder.objects.filter(managerid=request.user).filter(Q(Status=6) | Q(Status=7)).order_by('-AddTime')
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
    getCryOrder = CryOrder.objects.get(id=cryorders_id)
    if getCryOrder.buyerid:
        if request.method == 'POST':
            updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=6, managerid=request.user)
            return redirect('/users/manage/')
    else:
        return redirect('/users/manage/')
def update_cryorder_statussix(request, cryorders_id=0):
    managelogin(request)
    if request.method == 'POST':
        updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=7)
        return redirect('/users/manage/')

def update_cryorder_statusSeven(request, cryorders_id=0):
    managelogin(request)
    if request.method == 'POST':
        updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=6, managerid=request.user)
        return redirect('/users/manage/')

def update_cryorder_delete(request, cryorders_id=0):
    managelogin(request)
    if request.method == 'POST':
        updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=1, managerid=None, buyerMoney=None, tbUsername=None, jdUsername=None)
        return redirect('/users/manage/')

def cryorder_edit(request, cryorders_id=0):
    managelogin(request)
    getorderedit = CryOrder.objects.get(id=cryorders_id)
    if request.method == 'GET':
        return render(request, 'material/manager/project_edit.html', {'order':getorderedit})
    if request.method == 'POST':
        try:
            sellercost, buyercost = crycost(request.POST['money'])
            updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Keywords=request.POST['keywords'], Money=request.POST['money'], Note=request.POST['note'], PlatformOrdersid=request.POST['platformid'], buyerMoney=buyercost, sellerMoney=sellercost)
            return redirect('/users/manage/')
        except:
            return redirect('/users/manage/')

def cryorder_done(request, cryorders_id=0):
    managelogin(request)
    cryordersGet = CryOrder.objects.get(id=cryorders_id)
    if request.method == 'POST':
        updatacryorder = CryOrder.objects.filter(id=cryorders_id).update(Status=5)
        depositSeller = deposit.objects.get(user=cryordersGet.Userid)
        depositSeller.deposit = F('deposit') - (cryordersGet.Money + cryordersGet.Express + cryordersGet.sellerMoney)
        depositSeller.save()
        depositbuyer = deposit.objects.get(user=cryordersGet.buyerid_id)
        depositbuyer.deposit = F('deposit') + (cryordersGet.Money + cryordersGet.Express + cryordersGet.buyerMoney)
        depositbuyer.save()

        return redirect('/users/manage/statusseven/')
# ----update order----#





# ------ manageviews -------#


#------ tb 1688 -----#


#---- add user information ----#
def tb(request):
    authenticationlogin_def = authenticationlogin(request)
    if not authenticationlogin_def is None:
        return authenticationlogin_def
    if request.method == 'GET':
        pass
    elif request.method == "POST":
        form = tbForm(request.POST)
        if not form.is_valid():
            return redirect('/cryapp/buyer/users/?error=%s' % form['tbusername'].errors)
        selecttbid = tbUsername.objects.filter(tbUsername=request.POST['tbusername'])
        if selecttbid.count() > 0:
            blacklistlogsave = blacklistlog.objects.create(user=request.user, resip=get_client_ip(request), Remarks ='tbiderror:'+ request.POST['tbusername'])
            blacklistlogsave.save()
            return redirect('/cryapp/buyer/users/?error=信息错误，请联系管理员')
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
            return redirect('/cryapp/buyer/users/?error=%s' % form['jdusername'].errors)
        selecttbid = jdUsername.objects.filter(jdUsername=request.POST['jdusername'])
        if selecttbid.count() > 0:
            blacklistlogsave = blacklistlog.objects.create(user=request.user, resip=get_client_ip(request), Remarks ='jdiderror:'+ request.POST['jdusername'])
            blacklistlogsave.save()
            return redirect('/cryapp/buyer/users/?error=信息错误，请联系管理员')
        createjdid = jdUsername.objects.create(user = request.user, jdUsername = request.POST['jdusername'])
        createjdid.save()
        return redirect('/cryapp/buyer/users/')


def alipay_def(request):
    authenticationlogin_def = authenticationlogin(request)
    if not authenticationlogin_def is None:
        return authenticationlogin_def
    if request.method == 'GET':
        pass
    if request.method == 'POST':
        form = alipayForm(request.POST)
        if not form.is_valid():
            return redirect('/cryapp/buyer/users/?error=%s' % form['alipay'].errors)
        selectalipayid = alipay.objects.filter(alipay=request.POST['alipay'])
        if selectalipayid.count() > 0:
            blacklistlogsave = blacklistlog.objects.create(user=request.user, resip=get_client_ip(request), Remarks ='alipayiderror:'+ request.POST['alipay'])
            blacklistlogsave.save()
            return redirect('/cryapp/buyer/users/?error=信息错误，请联系管理员')
        alipayid = alipay.objects.create(user = request.user, alipay = request.POST['alipay'])
        alipayid.save()
        return redirect('/cryapp/buyer/users/')


def wechat_def(request):
    authenticationlogin_def = authenticationlogin(request)
    if not authenticationlogin_def is None:
        return authenticationlogin_def
    if request.method == 'GET':
        pass
    if request.method == 'POST':
        form = wechatForm(request.POST)
        if not form.is_valid():
            return redirect('/cryapp/buyer/users/?error=%s' % form['wechat'].errors)
        selectwechatid = wechat.objects.filter(wechat=request.POST['wechat'])
        if selectwechatid.count() > 0:
            blacklistlogsave = blacklistlog.objects.create(user=request.user, resip=get_client_ip(request),
                                                           Remarks='wechatiderror:' + request.POST['wechat'])
            blacklistlogsave.save()
            return redirect('/cryapp/buyer/users/?error=信息错误，请联系管理员')
        wechatid = wechat.objects.create(user=request.user, wechat=request.POST['wechat'])
        wechatid.save()
        return redirect('/cryapp/buyer/users/')

def bankcard_def(request):
    authenticationlogin_def = authenticationlogin(request)
    if not authenticationlogin_def is None:
        return authenticationlogin_def
    if request.method == 'GET':
        pass
    if request.method == 'POST':
        form = BankcardForm(request.POST)
        if not form.is_valid():
            return redirect('/cryapp/buyer/users/?error=%s' % form['Bankcard'].errors)
        selectwechatid = wechat.objects.filter(wechat=request.POST['Bankcard'])
        if selectwechatid.count() > 0:
            blacklistlogsave = blacklistlog.objects.create(user=request.user, resip=get_client_ip(request),
                                                           Remarks='Bankcardiderror:' + request.POST['Bankcard'])
            blacklistlogsave.save()
            return redirect('/cryapp/buyer/users/?error=信息错误，请联系管理员')
        Bankcardid = Bankcard.objects.create(user=request.user, Bankcard=request.POST['Bankcard'])
        Bankcardid.save()
        return redirect('/cryapp/buyer/users/')


def Idcard_def(request):
    authenticationlogin_def = authenticationlogin(request)
    if not authenticationlogin_def is None:
        return authenticationlogin_def
    if request.method == 'GET':
        pass
    if request.method == 'POST':
        form = IdcardForm(request.POST)
        if not form.is_valid():
            idcarderror = ''
            if form['Idcard'].errors:
                idcarderror += form['Idcard'].errors
            if form['name'].errors:
                idcarderror += form['name'].errors
            return redirect('/cryapp/buyer/users/?error=%s' % idcarderror)
            Idcardid = Idcard.objects.filter(wechat=request.POST['Idcard'])
        if Idcardid.count() > 0:
            blacklistlogsave = blacklistlog.objects.create(user=request.user, resip=get_client_ip(request),
                                                           Remarks='Idcardiderror:' + request.POST['Idcard'])
            blacklistlogsave.save()
            return redirect('/cryapp/buyer/users/?error=信息错误，请联系管理员')
        Idcardid = Idcard.objects.create(user=request.user, Idcard=request.POST['Idcard'], Idcardname=request.POST['name'])
        Idcardid.save()
        return redirect('/cryapp/buyer/users/')

# ---- add user information ----#

from django.shortcuts import render, redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import CryOrder
from financial.models import deposit, orderBill
from goods.models import Shop, Goods
from users.models import AuthUser, pcGuidLog, jdUsername, tbUsername,mobileid,mobilelog,real_name, blacklistlog, alipay, wechat, Bankcard, Idcard
from users.forms import tbForm, jdForm, alipayForm
import re
import requests
import time
from django.db.models import Q, F
from django.views.generic.base import View  # View是一个get和post的一个系统，可以直接def post和get，
from django.contrib.auth import authenticate, login
from datetime import datetime, timedelta
#from django.urls import reverse
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.shortcuts import redirect
#---- test Paginator
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

#url切出数字和切出店铺分类
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
        id = re.findall(r'/(\d+).html',self)[0]
        url1688 ='https://detail.1688.com/offer/' + id +'.html'
        imagetemp1 = ''
        while len(imagetemp1) < 10:
            time.sleep(3)
            res = requests.get(url1688, headers)
            res.encoding="gbk"
            print(res.text)
            #next get image#
            imagetemp1 = re.findall(r'ready-to-magnify="true">(.*?)>', res.text) #正则切到J_ImgBooth字段
        imagetemp2 = re.findall(r'src="(.*?).jpg', imagetemp1[0]) #正则切到J_ImgBooth字段
        GoodsImage = imagetemp2[0] + '.jpg'
        if 'http' in GoodsImage:
            pass
        else:
            GoodsImage = 'https:' + GoodsImage
        #next get GoodsName
        tempGoodsname = re.findall(r'<title>(.*?)-', res.text)#获取产品名
        Goodsname = tempGoodsname[0]
        tempusername = re.findall(r'class="company-name">(.*?)</a>', res.text) #正则获取用户名
        tempshopname = re.findall(r'class="company-name">(.*?)</a>', res.text) #正则获取用户名
        shopname = tempshopname[0]
        shopusername = tempusername[0]
    else:
        pass
    return id, platform, shopname ,shopusername, GoodsImage, Goodsname

def crycost(x):
    x = float(x)
    c = 10
    sellercost = round((x/100) + 10,2)
    buyercost = round(((x/100)*0.5) + 5,2)
    return sellercost, buyercost

def ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def ordermoney(request):
    ordermoneytotal = 0
    statuslist = [0,5,8]
    orderMoneyFilter = CryOrder.objects.filter(Userid=request.user.id).exclude(Status__in=statuslist)
    #orderMoneyFilter = CryOrder.objects.filter(Userid=x)
    for money in orderMoneyFilter:
        ordermoneytotal += (float(money.Money) + float(money.Express) + float(money.sellerMoney))
    return ordermoneytotal


def authenticationlogin(request):
    if request.user.is_authenticated == False:
        return render(request, 'login.html')
    # ---Authentication blacklist
    UserBlackList = AuthUser.objects.filter(id=request.user.id, is_blacklist=1)
    if UserBlackList:
        return redirect('/')
        # ---Authentication blacklist

def lockOrderAuthentication(request):
    # lock_Authentication_orders
    lockdaynumber = 33
    lockday = datetime.now() - timedelta(days=lockdaynumber)
    lockOrderSelect = CryOrder.objects.filter(buyerid=request.user.id).filter(AddTime__gt=lockday).filter(~Q(Status=0))
    lockOrderlist = []
    for CLOS in lockOrderSelect:
        clos_number = CLOS.Userid_id
        if CLOS.Userid_id in lockOrderlist:
            pass
        else:
            lockOrderlist.append(CLOS.Userid_id)
    return lockOrderlist


#save task
##Home_page_add_product
class sellerIndex(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            mymoney = deposit.objects.get(user=request.user.id)
            return render(request, 'material/seller/dashboard.html', {'mymoney':mymoney})
        else:
            return render(request, 'login.html')
class seller_orders(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            ordersfilter = CryOrder.objects.filter(Userid=request.user.id).filter(~Q(Status=0)).order_by('-AddTime')
            paginator = Paginator(ordersfilter, 10)  # Show 25 contacts per page
            page = request.GET.get('page')
            try:
                contacts = paginator.page(page)
            except PageNotAnInteger:
                # If page is not an integer, deliver first page.
                contacts = paginator.page(1)
            except EmptyPage:
                # If page is out of range (e.g. 9999), deliver last page of results.
                contacts = paginator.page(paginator.num_pages)
            return render(request, 'material/seller/table.html', {'orderslists':contacts})
        else:
            return render(request, 'login.html')

class buyerIndex(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            orderdict = {}
            select_cryorder = CryOrder.objects.filter()
            lockOrderlist = lockOrderAuthentication(request)
            buyerIndexSqlMove = ''
            buyerIndexSql = 'SELECT * FROM cryapp_cryorder WHERE Status = 1 GROUP BY GoodId_id'
            if len(lockOrderlist) == 1:
                buyerIndexSql = 'SELECT * FROM cryapp_cryorder WHERE Status = 1 and Userid_id <> '+ str(lockOrderlist[0]) + ' GROUP BY GoodId_id'
            elif len(lockOrderlist) > 1:
                for i in range(1, len(lockOrderlist)):
                    buyerIndexSqlMove = buyerIndexSqlMove + ' AND Userid_id <>' + str(lockOrderlist[i])
                buyerIndexSql = 'SELECT * FROM cryapp_cryorder WHERE Status = 1 and Userid_id <> '+ str(lockOrderlist[0]) + buyerIndexSqlMove + ' ' + ' GROUP BY GoodId_id'
            orderdict = CryOrder.objects.raw(buyerIndexSql)
            # Html_file= open("bug.html","w")
            # Html_file.write(datetime.now()+bxuyerIndexSql+type(orderdict)+orderdict)
            # Html_file.close
            return render(request, 'material/index.html', {'orderdict':orderdict})
        else:
            orderdict = CryOrder.objects.raw('SELECT * FROM cryapp_cryorder GROUP BY(GoodId_id)')
            return render(request, 'material/index.html', {'orderdict':orderdict})


def GetGoods(request, goodid):
    if request.method=="GET":
        getcryorder = CryOrder.objects.get(id=goodid)
        # --- old product list
        #return render(request, 'product/goods.html', {'goodsview':goodsview,'money':money})
        # --- old product list
        return render(request, 'material/product.html', {'goodsview':getcryorder})

    elif request.method == "POST":
        def Platform_account(request):
            goodsviews = CryOrder.objects.get(id=request.POST['cryorderid'])
            if goodsviews.platform == 'tmall' or goodsviews.platform == 'taobao' or goodsviews.platform == '1688':
                if len(tbUsername.objects.filter(user=request.user.id).values()) == 0:
                    return HttpResponseRedirect('/cryapp/buyer/users/')
            elif goodsviews.platform == 'jd':
                if jdUsername.objects.filter(user=request.user.id) == False:
                    return HttpResponseRedirect('/cryapp/buyer/users/')
        def iphoneid_authentication(request):
            phoneid_post = str(request.POST['phoneid'])
            if phoneid_post == '':
                return redirect('/webbrowser/')
            mobileidvalues = mobileid.objects.filter(mobileid=phoneid_post)
            if mobileidvalues.count() > 0:
                mobileuserexists1 = mobileid.objects.filter(mobileid=phoneid_post).filter(~Q(user=request.user.id))
                if mobileuserexists1.count() > 0:
                    blacklistlogcreate = blacklistlog.objects.create(user=request.user,resip=ip(request),Remarks='request.user.id:'+str(request.user.id)+'mobileid not have:'+phoneid_post)
                    blacklistlogcreate.save()
                    return redirect('/')
                else:
                    mobileidget = mobileid.objects.get(mobileid=phoneid_post)
                    mobilelogcreate = mobilelog.objects.create(user=request.user,resip=ip(request), mobileid=mobileidget)
                    mobilelogcreate.save()
                    return


            else:
                if mobileid.objects.filter(mobileid=phoneid_post).count() > 3:
                    blacklistlogcreate = blacklistlog.objects.create(user=request.user.id,ip=ip(request),Remarks=(request.user.id+'ERROR:mobileid>3'+phoneid_post))
                    blacklistlogcreate.save()
                    return
                else:
                    mobilecreate = mobileid.objects.create(user=request.user,resip=ip(request),mobileid=phoneid_post)
                    mobilecreate.save()
                    return

        goodsviews = CryOrder.objects.get(id=request.POST['cryorderid'])
        authenticationlogin_def=authenticationlogin(request)
        if not authenticationlogin_def is None:
            return authenticationlogin_def

        lockOrderlist = lockOrderAuthentication(request)
        iphoneid_authenticatio_def = iphoneid_authentication(request)
        # if not iphoneid_authenticatio_def is None:
        #     return iphoneid_authenticatio_def
        if goodsviews.Userid_id in lockOrderlist:
            return redirect('/')
        Platform_account_def = Platform_account(request)
        if not Platform_account_def is None:
            return Platform_account_def
        status = CryOrder.objects.get(id=request.POST['cryorderid'])
        if status.Status != 1:
            return HttpResponseRedirect('/')
        #--Authentication phonelog---#
        if goodsviews.platform == 'jd':
            goodsviews = CryOrder.objects.filter(id=request.POST['cryorderid']).update(buyerid_id=request.user.id, Status=2, jdUsername=jdUsername.objects.get(user=request.user))
        else:
            goodsviews = CryOrder.objects.filter(id=request.POST['cryorderid']).update(buyerid_id=request.user.id, Status=2, tbUsername=tbUsername.objects.get(user=request.user))
        return redirect('/cryapp/buyer/orders/')


        #--- Authentication phonelog ---#
            #-- hard authentiaction
            # yesterday = datetime.now() - timedelta(hours=1)
            # pcguid = pcGuidLog.objects.filter(user=request.user.id).filter(addtime__gt=yesterday)
            # if pcguid.count() == 0:
            #-- hard authentiaction

class Good_Index_Add(LoginRequiredMixin, View):
    ##############首页增加产品#######################
    def post(self, request, *args, **kwargs):

        # ----- get values-----#
        self.ordernumber_index_add = int(request.POST['number']) #获取数量
        global ordeordernumber_index_addrnumber
        money = float(request.POST['money'])
        sellercost, buyercost = crycost(money)
        sellercosttotal = (sellercost * self.ordernumber_index_add)
        total = float((self.ordernumber_index_add*money)+sellercosttotal)
        geteposit = deposit.objects.get(user=request.user.id)
        deposit_index_add = float(geteposit.deposit)
        cryordermoney = ordermoney(request)
        txtIndexAddUrl = request.POST['txtIndexAddUrl'] #获取链接
        keywords = request.POST['keywords'] #获取关键词
        note = request.POST['note'] #获取备注
        startdatetime = request.POST['startDate'] #获取启动时间
        endDateTime = request.POST['endDate'] #获取结束时间
        # ----- get values-----#
        def saveorder():
            while self.ordernumber_index_add > 0:
                savecryorder = CryOrder.objects.create(Userid=request.user, OrderSort=1, ShopId=saveshop, Status=1, GoodId=getGoods, StartTime=startdatetime, EndTime=endDateTime,  platform=platform, Keywords=keywords,Note=note, Money=request.POST['money'], Express=0, buyerMoney=buyercost, sellerMoney=sellercost)
                savecryorder.save()
                self.ordernumber_index_add -= 1

        def savegoods():
            saveGoods = Goods.objects.create(user=request.user, shop=saveshop, name=Goodsname, pgoods_id=id, sendaddress='', platform=platform,image1=GoodsImage,keyword1=keywords,price1=request.POST['money'],remark1=note)
            saveGoods.save()

        #deposit 
        trytotal = (total > (deposit_index_add - cryordermoney - 100))
        if trytotal == True:
            text = '余额不足请充值,'
            return render(request, 'material/seller/dashboard.html', {'test': text, 'money':deposit})
        #deposit
        #get urls values
        id,platform,shopname,shopusername,GoodsImage,Goodsname = platformUrl(txtIndexAddUrl) #用正则读取数据

        #判断产品是否存在
        tempGoodsTrue = Goods.objects.filter(pgoods_id=id, platform=platform, shop__shopname__contains=shopname)
        tempGoodsUserTrue = Goods.objects.filter(pgoods_id=id, platform=platform, shop__shopname__contains=shopname, user_id=request.user.id)
        tempShopFlase = Shop.objects.filter(shopname=shopname, platform=platform).filter(~Q(user_id=request.user.id))
        tempShopUserFlase = Shop.objects.filter(shopname=shopname, platform=platform).filter(~Q(user_id=request.user.id))
        tempShopUserTrue = Shop.objects.filter(shopname=shopname, platform=platform).filter(Q(user_id=request.user.id))
        print('----')
        print(tempGoodsUserTrue.exists())
        print('----')
        if tempGoodsUserTrue.exists(): #判断产品是否存在
            saveshop = Shop.objects.get(user=request.user, shopname=shopname) #店铺名称
            saveGoods = Goods.objects.get(user=request.user, pgoods_id=id)#shop=saveshop, name=Goodsname,
            getGoods = Goods.objects.get(user=request.user, pgoods_id=id, platform=platform)
            saveorder()
        elif tempShopUserFlase.exists(): #判断产品是否在其他在其他店铺上
            return render(request, 'material/seller/dashboard.html', {'test': '产品已存在'})
        elif tempShopUserTrue.exists(): #判断产品是否在其他账户上
            saveshop = Shop.objects.get(user=request.user, shopname=shopname, shopkeepername=shopusername,platform=platform) #增加店铺
            saveshop.save()
            savegoods()
            getGoods = Goods.objects.get(user=request.user, pgoods_id=id, platform=platform)
            saveorder()
        elif tempShopFlase.exists(): #判断产品是否在其他账户上
            return render(request, 'material/seller/dashboard.html', {'test': '店铺已存在其他人账户上'})
        else:
            saveshop = Shop.objects.create(user=request.user, shopname=shopname, shopkeepername=shopusername,platform=platform) #增加店铺
            saveshop.save()
            savegoods()
            getGoods = Goods.objects.get(user=request.user, pgoods_id=id, platform=platform)
            saveorder()
        return render(request, 'material/seller/dashboard.html',{'test':'已经发布任务'})

#-------seller CRUD -----#
def cryapp_delete(request, cryorders_id = 0):
    cryorders = int(cryorders_id)
    getCryOrder = CryOrder.objects.get(id=cryorders)
    if getCryOrder.Status in [1,5,8]:
        return redirect('/cryapp/seller/orders/')
    deletecryappdate = CryOrder.objects.filter(id=cryorders).update(Status=1, tbUsername=None,jdUsername=None)
    return redirect('/cryapp/seller/orders/')

def ordersnotdone(request, cryorders_id = 0):
    cryorders = int(cryorders_id)
    getCryOrder = CryOrder.objects.get(id=cryorders)
    if getCryOrder.Status in [1,5,8]:
        return redirect('/cryapp/seller/orders/')
    notthrough = CryOrder.objects.filter(id=cryorders).update(Status=4)
    return redirect('/cryapp/seller/orders/')

def ordersdone(request, cryorders_id = 0):
    cryorders = int(cryorders_id)
    # - create money
    cryordersGet = CryOrder.objects.get(id=cryorders)
    if cryordersGet.buyerid:
        try:
            depositSeller = deposit.objects.get(user=cryordersGet.Userid)
            sellercost, buyercost = crycost(cryordersGet.Money)
            CryOrder.objects.filter(id=cryorders).update(Status=5, buyerMoney=buyercost)
            depositSeller.deposit = F('deposit') - (cryordersGet.Money+cryordersGet.Express+cryordersGet.buyerMoney)
            depositSeller.save()
            depositbuyer = deposit.objects.get(user=cryordersGet.buyerid_id)
            depositbuyer.deposit = F('deposit') + (cryordersGet.Money+cryordersGet.Express+buyercost)
            depositbuyer.save()
            return redirect('/cryapp/seller/orders/')
        except:
            print('errorlog')
            return redirect('/cryapp/seller/orders/')
    else:
        return redirect('/cryapp/seller/orders/')


# ---- seller_edit------#
def cryapp_edit(request, cryorders_id = 0):
    cryorders = int(cryorders_id)
    editcryappdata = CryOrder.objects.get(id=cryorders)
    if request.method=="GET":
        return render(request, 'material/seller/seller_edit.html', {'commitorders':editcryappdata})
    if request.method=="POST":
        sellercost, buyercost = crycost(request.POST['money'])
        editcryappdata = CryOrder.objects.filter(id=cryorders).update(Keywords=request.POST['keywords'],Money=request.POST['money'],Note=request.POST['Note'],PlatformOrdersid=request.POST['orderid'], buyerMoney=buyercost, sellerMoney=sellercost)
        return redirect('/cryapp/seller/orders/')
# ---- seller_edit------#

#-------seller CRUD -----#
def cryapp_buyer_delete(request, cryorders_id = 0):
    cryorders = int(cryorders_id)
    deletecryappdate = CryOrder.objects.filter(id=cryorders).update(Status=1, buyerid=None, tbUsername=None, jdUsername=None)
    return redirect('/cryapp/buyer/orders/')

#----- buyer CRUD ----#
def buyer_edit(request, cryorders_id = 0):
    cryorderid = cryorders_id
    if request.method == 'GET':
        commitorders = CryOrder.objects.get(id=cryorderid)
        return render(request, 'material/buyer/buyer_edit.html', {'commitorders':commitorders})
    if request.method == 'POST':
        sellercost, buyercost = crycost(request.POST['money'])
        commitorders = CryOrder.objects.filter(id=cryorderid).update(Money=request.POST['money'], PlatformOrdersid=request.POST['orderid'], buyerMoney=buyercost, sellerMoney=sellercost)
        return redirect('/cryapp/buyer/orders/')
#----- buyer CRUD ----#

#———————buyer admin------#
def buyeradmin(request):
    if request.user.is_authenticated:
        return render(request, 'material/buyer/dashboard.html')
    else:
        return render(request, 'login.html')

def buyer_user(request, errors=''):
    if request.method == "GET":
        if request.user.is_authenticated:
            try:
                error = request.GET['error']
            except:
                error = ''
            tb = tbUsername.objects.filter(user=request.user.id)
            jd = jdUsername.objects.filter(user=request.user.id)
            alipay_re = alipay.objects.filter(user=request.user.id)
            wechat_re = wechat.objects.filter(user=request.user.id)
            Bankcard_re = Bankcard.objects.filter(user=request.user.id)
            #Idcard_re = Idcard.objects.filter(user=request.user.id)
            return render(request, 'material/buyer/user.html', {'tb':tb,'jd':jd,'alipay':alipay_re,'error':error,'wechat':wechat_re,'Bankcard':Bankcard_re})
        else:
            return render(request, 'login.html')

class buyer_orders(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        ordersfilter = CryOrder.objects.filter(buyerid=request.user.id).filter(~Q(Status=0),~Q(Status=1)).order_by('-AddTime')
        paginator = Paginator(ordersfilter, 10)  # Show 25 contacts per page
        page = request.GET.get('page')
        try:
            contactsb = paginator.page(page)
        except PageNotAnInteger:
            # If page is not an integer, deliver first page.
            contactsb = paginator.page(1)
        except EmptyPage:
            # If page is out of range (e.g. 9999), deliver last page of results.
            contactsb = paginator.page(paginator.num_pages)
        return render(request, 'material/buyer/table.html',{'orderslists':contactsb})

def buyer_commit_orders(request, cryorders_id = 0):
    cryorderid=cryorders_id
    commitorders = CryOrder.objects.filter(id=cryorderid).update(PlatformOrdersid=int(request.POST['paltfromorders']), Status=3)
    return redirect('/cryapp/buyer/orders/')
#———————buyer admin------#



#---------tb,jd accunt ------#



#---------tb,jd accunt ------#
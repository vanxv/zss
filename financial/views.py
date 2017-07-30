from django.shortcuts import render
from .models import deposit, TopUpwithdrawal, orderBill, alipayDetail
from django.db.models import Q
from users.views import AuUserlogin
# Create your views here.
def financial_index(request):
    if request.user.is_authenticated:
        if request.method == 'GET':
            class financial_index_post():
                def depositdef(self):
                    deposit_def = deposit.objects.get(user=request.user.id)
                    money = deposit_def.deposit
                    return money
                def orderBill(self):
                    orderBilldef =orderBill.objects.filter(Q(CryOrderid__buyerid_id=request.user.id) | Q(CryOrderid__Userid_id=request.user.id)).order_by('-datetime')
                    return orderBilldef.values()

                def __init__(self):
                    self.money = self.depositdef()
                    self.orderBilldef =self.orderBill()

            financial_index_class = financial_index_post()
            return render(request, 'material/financial/moneytable.html',{
                            'money':float(financial_index_class.money),
                            'orderBill':financial_index_class.orderBilldef
                          })

        if request.method == 'POST':
            pass
    else:
        return render(request, 'login.html')

def financial_topUp_list(request):
    if request.method == 'GET':
        class financial_index_post():
            def depositdef(self):
                deposit_def = deposit.objects.get(user=request.user.id)
                money = deposit_def.deposit
                return money
            def TopUpwithdrawal(self):
                TopUpwithdrawaldef =TopUpwithdrawal.objects.filter(user=request.user.id).order_by('-add_time')
                return TopUpwithdrawaldef.values()

            def __init__(self):
                self.money = self.depositdef()
                self.TopUpwithdrawaldef =self.TopUpwithdrawal()
                #return money, TopUpwithdrawaldef, orderBilldef

        financial_index_class = financial_index_post()
        return render(request, 'material/financial/Money_TopUp_Withdrawal.html',{
                        'money':float(financial_index_class.money),
                        'TopUpwithdrawaldef':financial_index_class.TopUpwithdrawaldef
                      })

    if request.method == 'POST':
        pass

def financial_AutoTopUp(request):
        #AuUserlogin(request)
        if request.method == 'GET':
            return render(request, 'material/financial/financial_autoTopUp.html')
        if request.method == 'POST':
            # Authentication alipaylist
            try:
                updatealipay = alipayDetail.objects.get(alipayid=request.POST['alipayid'])
            except:
                text = '没有流水号或已使用，请确认信息。'
                return render(request, 'material/financial/financial_autoTopUp.html', {'text': text})


            print(request.POST['alipayid'])
            print(type(request.POST['alipayid']))
            alipayupid = alipayDetail.objects.filter(alipayid=request.POST['alipayid']).update(userid=request.user.id)
            depositupdate = deposit.objects.get(user=request.user.id)
            depositupdate = deposit.objects.filter(user=request.user.id).update(deposit=depositupdate.deposit+updatealipay.alipayAmount)
            TopUpwithdrawalcreate = TopUpwithdrawal.objects.create(
                TopUp_withdrawalSort=1,
                certificate=request.POST['alipayid'],
                certificateid=request.POST['alipayid'],
                amount = updatealipay.alipayAmount,
                transfer_account = 'ironvanxv@gmail.com',
                status = 2,
                user= request.user
            )
            TopUpwithdrawalcreate.save()

            text = ('充值成功充值金额：' + str(updatealipay.alipayAmount))
            return render(request, 'material/financial/financial_autoTopUp.html', {'text':text})
        #except:
            text = '没有流水号或已使用，请确认信息。'
            return render(request, 'material/financial/financial_autoTopUp.html', {'text':text})

def financial_kiting(request):
    getdeposit = deposit.objects.get(user=request.user.id)
    if request.method == 'GET':
        money = getdeposit.deposit
        return render(request, 'material/financial/financial_kiting.html',{'money':money})
    if request.method == 'POST':
        text= '提现成功'
        if getdeposit.deposit > float(request.POST['kiting']):
            try:
                deposit.objects.filter(user=request.user.id).update(deposit=(float(getdeposit.deposit) - float(request.POST['kiting'])))
                TopUpwithdrawal.objects.create(TopUp_withdrawalSort=2,amount=float(request.POST['kiting']),user=request.user,status=1)
            except:
                text = '信息错误'
        else:
            text = '信息错误'

        return render(request, 'material/financial/financial_kiting.html', {'text':text})

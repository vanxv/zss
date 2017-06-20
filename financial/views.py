from django.shortcuts import render
from .models import deposit, TopUpwithdrawal, orderBill
from django.db.models import Q
# Create your views here.
def financial_index(request):
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
                #return money, TopUpwithdrawaldef, orderBilldef

        financial_index_class = financial_index_post()
        return render(request, 'material/financial/moneytable.html',{
                        'money':float(financial_index_class.money),
                        'orderBill':financial_index_class.orderBilldef
                      })

    if request.method == 'POST':
        pass


def financial_topUp(request):
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

from django.shortcuts import render, redirect
from django.utils.decorators import method_decorator
# Create your views here.
from django.views.generic.base import View  # View是一个get和post的一个系统，可以直接def post和get，
from .models import Shop, Goods
from users.models import AuthUser
from .forms import TBShopName, JDShopName, GoodForm
from django.http import JsonResponse, HttpResponse
from django.utils import timezone
from django.contrib.auth.mixins import LoginRequiredMixin

class shopsViews(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        authuser = AuthUser.objects.get(username=request.user.username)
        userid = Shop.objects.filter(user=authuser)
        tbform = TBShopName()
        jdform = JDShopName()
        return render(request, 'goods/shop.html', {"userid": userid, "tbform": tbform, "jdform": jdform})

    def post(self, request, *args, **kwargs):
        authuser = AuthUser.objects.get(username=request.user.username)
        tbform = TBShopName(request.POST)
        jdform = JDShopName(request.POST)
        c = timezone.now()

        msg1 = {"msg": "帐号已存在,请联系客服"}
        msg2 = {"msg": "店铺已存在,请联系客服"}
        msg3 = {"msg": "b"}
        if tbform.is_valid():
            a = request.POST['your_name']
            b = request.POST['shop_name']
            selected_name = Shop.objects.filter(platform='淘宝').filter(sellername=a).count()
            selected_shop = Shop.objects.filter(platform='淘宝').filter(shopname=b).count()
            if selected_name >= 1:
                return JsonResponse(msg1)
            elif selected_shop >= 1:
                return JsonResponse(msg2)
            elif selected_name == 0 and selected_shop == 0:
                add = Shop.objects.create(user=authuser, sellername=a, shopname=b, platform='淘宝', add_time=c)
                return JsonResponse(msg3)
        elif jdform.is_valid():
            d = request.POST['jdyour_name']
            e = request.POST['jdshop_name']
            selected_jdname = Shop.objects.filter(platform='京东').filter(sellername=d).count()
            selected_jdshop = Shop.objects.filter(platform='京东').filter(shopname=e).count()
            if selected_jdname >= 1:
                return JsonResponse(msg2)
            elif selected_jdshop >= 1:
                return JsonResponse(msg1)
            elif selected_jdname == 0 and selected_jdshop == 0:
                add = Shop.objects.create(user=authuser, sellername=d, shopname=e, platform='京东', add_time=c)
                return JsonResponse(msg3)
                #########   ##################################   dian pu li de shang pin


class shop_goodsViews(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        shop_id = int(self.kwargs['shop_id'])
        shop_select = Shop.objects.get(id=shop_id)
        user_goods = Goods.objects.filter(shop=shop_select)
        return render(request, 'goods/table_foo_table.html', {"user_goods": user_goods, "shop_id": shop_id})

        ###########################    suo you shang pin


class all_goodsViews(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user = request.user
        user_goods = Goods.objects.filter(user=user)

        return render(request, 'goods/table_foo_table.html', {"user_goods": user_goods})


        ##########################################################  xin jian shang pin


class add_goodViews(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        shop_id = int(self.kwargs['shop_id'])
        good_form = GoodForm()
        return render(request, 'goods/add_good.html', {"form": good_form, "shop_id": shop_id})

    def post(self, request, *args, **kwargs):
        shop_id = int(self.kwargs['shop_id'])
        good = GoodForm(request.POST or None, request.FILES or None)
        print(shop_id)
        if good.is_valid():
            base = good.save(commit=False)
            base.user = request.user
            base.shop = Shop.objects.get(id=shop_id)
            base.add_time = timezone.now()
            base.save()
            return redirect('good:shop_good', shop_id=shop_id)
        else:

            return HttpResponse('baocunshibai')



###########################################################     xiugai  shang pin
class change_goodViews(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        shop_id = int(self.kwargs['shop_id'])
        good_id = int(self.kwargs['good_id'])
        a = Goods.objects.get(id=good_id)
        good_form = GoodForm(instance=a)
        return render(request, 'goods/gai.html', {"form": good_form, "shop_id": shop_id, "good_id": good_id})

    def post(self, request, *args, **kwargs):
        good = GoodForm(request.POST or None, request.FILES or None)
        shop_id = int(self.kwargs['shop_id'])
        good_id = int(self.kwargs['good_id'])
        pgood_id = request.POST['pgood_id']
        a = Goods.objects.get(id=good_id)
        if good.is_valid():
            base = good.save(commit=False)
            base.id = good_id
            base.user = request.user
            base.shop = Shop.objects.get(id=shop_id)
            base.add_time = timezone.now()
            base.save()
            return redirect('good:shop_good', shop_id=shop_id)

        else:
            return HttpResponse('biaodanshibai')




##Home_page_add_product
class Good_Index_Add(LoginRequiredMixin, View):
    def post(self, request, *args, **kwargs):
        test = request.POST['txtIndexAddUrl']
        print(test)
        babyid = Goods.objects.filter(pgoods_id=test)
        print(babyid)
        if len(babyid) > 0:
            return render(request, 'welcome.html', {'test': '产品已存在'})
        else:
            babyidsave = Goods.objects.create(name=str(test), pgoods_id=test, keyword1=test, user_id=1, shop_id=1)
            babyidsave.save()
            try:
                #selectmodels
                #if conntaions
                #return：existing problems
                #if no conntaions
                #Go online to read
                pass
            except:
                #有错，请联系管理员
                pass
            return render(request, 'welcome.html',{'test':test})

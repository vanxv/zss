from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from .models import UserProfile
from django.views.generic.base import View
from .froms import LoginForm
# Create your views here.


#下面是一个验证流程，用了Q，
class CustomBackend(ModelBackend):
    def authenticate(self, username=None, password=None, **kwargs):
        try:
            user = UserProfile.objects.get(Q(username=username)|Q(email=username))
            if user.check_password(password):
                return user
        except Exception as e:
            return None

class LoginView(View):
    def get(self, request):
        return render(request, "login_v2.html", {})
    def post(self, request):
        login_form = LoginForm(request.POST)
        if login_form.is_valid():
            user_name = request.POST.get("username", "")
            pass_word = request.POST.get("password", "")
            user = authenticate(username=user_name, password=pass_word)
            if user is not None:
                login(request, user)
                return render(request, "index.html")
        else:
            return render(request, "login_v2.html", {"msg":"账号密码错误"})
#
# def user_login(request):
#     if request.method == 'POST':
#         user_name = request.POST.get("username", "")
#         pass_word = request.POST.get("password", "")
#         user = authenticate(username=user_name, password=pass_word)
#         if user is not None:
#             login(request, user)
#             return render(request, 'index.html')
#         else:
#             return render(request, 'login_v2.html', {"msg":"用户名和密码错误！"})
#             pass
#     elif request.method == 'GET':
#         return render(request, 'login_v2.html', {})
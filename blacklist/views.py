from django.shortcuts import render
from .models import blacklist
from django.db.models import Q

def index(request):
    if request.method == 'POST':
        returnvalue = request.POST['serachtext']
        print(str(returnvalue))
        # returnBlacklist = blacklist.objects.filter(Q(buyerMobile=int(returnvalue)) | Q(buyeralipay=returnvalue))
        returnBlacklist = blacklist.objects.filter(Q(buyeralipay=returnvalue))
        return render(request, 'blacklist/blist.html', {'returnBlacklist':returnBlacklist})
    elif request.method == 'GET':
        return render(request, 'blacklist/blist.html')

def add(request):
    if request.method == 'POST':
        shellername = request.POST['shellername']
        shellermobile = int(request.POST['shellermobile'])
        buyer = request.POST['buyer']
        buyermobile = int(request.POST['buyermobile'])
        buyeraddress = request.POST['buyeraddress']
        buyeralipay = request.POST['buyeralipay']
        # proveimages = request.POST['proveimages']
        note = request.POST['note']
        resa = blacklist.objects.create(buyer=buyer, buyerMobile=buyermobile, buyeraddress=buyeraddress,
                                        buyeralipay=buyeralipay, note=note, user_id=3)
        resa.save()
        return render(request, 'blacklist/add.html')
    elif request.method == 'GET':
        return render(request, 'blacklist/add.html')

# Create your views here.

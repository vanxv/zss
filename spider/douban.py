# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import re
import csv
import urllib
import hashlib
import time
import json
import random
import datetime

def getDoubanEvaluation(url):
	xx = requests.get(url).text
	soup = BeautifulSoup(xx, "html.parser")
	htmlheader = soup.find_all('header', 'main-hd')
	for i in htmlheader:
		people = i.find_all('a', 'avator')
		score = i.find_all('span')
		fieldnames = ['id', 'user','Eval']
		with open('movie2.csv','a',encoding='UTF-8') as csvfile:
			filex = csv.DictWriter(csvfile,delimiter=',',fieldnames=fieldnames)
			filex.writerow({'id': url, 'user': people,'Eval':score})


def geturl(number):
	NumberToUrl = 'https://movie.douban.com/subject/' + str(number)+'/reviews'
	print(NumberToUrl)
	xx = requests.get(NumberToUrl).text
	with open('a.html','w') as htmlsave:
		htmlsave.write(xx)
	overnumber_temp = re.findall('共(\d+)条',xx)
	try:
		overnumber = int(overnumber_temp[0])
	except:
		overnumber = 1

	for pageNum in range(0, overnumber, 20):
		NumberToUrl = 'https://movie.douban.com/subject/' + str(number) +'/reviews?start=' + str(pageNum)
		getDoubanEvaluation(NumberToUrl)
		print(pageNum)



class Adsl():
    def __init__(self):
        self.host = '192.168.31.1/'
        self.username = 'admin'
        self.password = '1q2w3e4r'

    def connect(self):
        host = self.host
        homeRequest = requests.get('http://' + host + '/cgi-bin/luci/web/home')
        key = re.findall(r'key: \'(.*)\',', homeRequest.text)[0]
        mac = re.findall(r'deviceId = \'(.*)\';', homeRequest.text)[0]
        aimurl = "http://" + host + "/cgi-bin/luci/api/xqsystem/login"
        nonce = "0_" + mac + "_" + str(int(time.time())) + "_" + str(random.randint(1000, 10000))
        pwdtext = self.password
        pwd = hashlib.sha1()
        pwdtt = pwdtext + key
        print(pwdtt)
        pwd.update(pwdtt.encode('utf-8'))
        hexpwd1 = pwd.hexdigest()
        print(hexpwd1)
        pwd2 = hashlib.sha1()
        pwd2tt = nonce + hexpwd1
        pwd2.update(pwd2tt.encode('utf-8'))
        hexpwd2 = pwd2.hexdigest()
        print(hexpwd2)
        data = {
            "logtype": 2,
            "nonce": nonce,
            "password": hexpwd2,
            "username": self.username
        }
        response = requests.post(url=aimurl, data=data, timeout=15)
        resjson = json.loads(response.content)
        print(resjson)
        token = resjson['token']
        webstop = urllib.request.urlopen('http://192.168.31.1/cgi-bin/luci/;stok=' + token + '/api/xqnetwork/pppoe_stop')
        #time.sleep(1)
        webstart = urllib.request.urlopen('http://192.168.31.1/cgi-bin/luci/;stok=' + token + '/api/xqnetwork/pppoe_start')
        date = datetime.datetime.now()
        nowtime = str(date)[:-10]
        print(nowtime + ', congratulations, the IP is changed !')

with open('movie.csv','r',encoding='UTF-8') as csvfile:
	filex = csv.DictReader(csvfile,delimiter='^')
	timea = 0
	for row in filex:
		geturl(row['id'])
		timea +=1
		if timea ==5:
			timea = 0
			testInstance = Adsl()
			testInstance.connect()
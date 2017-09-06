import csv
import requests
import codecs

#----post sort 3 & 7-----#
csvfile = codecs.open('ename.csv', 'w')
namefield = ['QQ', 'name', 'nick', 'contains']
writer = csv.DictWriter(csvfile,fieldnames=namefield)
writer.writeheader()
writer.writerow({'QQ': '678092', 'name': 'Beans','nick':'nick','contains':'contains'})
writer.writerow({'QQ': '24781222', 'name': 'vanxv','nick':'nick','contains':'contains'})
writer.writerow({'QQ': '7382732', 'name': 'google','nick':'nick','contains':'contains'})
csvfile.close()

csvfile2 = codecs.open('ename.csv')
reader = csv.DictReader(csvfile2, fieldnames=namefield)
csvtuples = {}
for row in reader:
    a ={'name':row['name'],'nick':row['nick'],'contains':row['contains']}
    if not row['QQ'] == 'QQ':
        csvtuples[row['QQ']] = a

print(csvtuples)
requests.post('http://127.0.0.1:8000/autoweb/done/22/7/', json=csvtuples)


#----post sort 4 & 8-----#
csvfile = codecs.open('ename.csv', 'w')
fieldname = ['GroupId','GroupName']
writer = csv.DictWriter(csvfile,fieldnames=fieldname)
writer.writeheader()
writer.writerow({'GroupId': '678092', 'GroupName': 'Beans'})
writer.writerow({'GroupId': '24781222', 'GroupName': 'vanxv'})
writer.writerow({'GroupId': '7382732', 'GroupName': 'google'})
csvfile.close()

csvfile2 = codecs.open('ename.csv')
reader = csv.DictReader(csvfile2)
dictlist = {}
for xx in reader:
    dictlist[xx['GroupId']]=xx['GroupName']

print(dictlist)
requests.post('http://127.0.0.1:8000/autoweb/done/22/8/', json=dictlist)


import csv
import requests
import json
import codecs
#---post sort 9 ---#
csvfile = codecs.open('ename.csv', 'w')
fieldname = ['QQ','name','level','contains']
writer = csv.DictWriter(csvfile,fieldnames=fieldname)
writer.writeheader()
writer.writerow({'QQ': 678092, 'name': '广州','level':1,'contains':'电影'})
writer.writerow({'QQ': 24781222, 'name': 'vanxv','level':1,'contains':'游戏'})
writer.writerow({'QQ': 7382732, 'name': 'google','level':1,'contains':'游戏'})
csvfile.close()

csvfile2 = open('ename.csv','r')
reader = csv.DictReader(csvfile2,fieldnames=fieldname)
csvtuples = {}
for row in reader:
    a ={'name':row['name'],'level':row['level'],'contains':row['contains']}
    if not row['QQ'] == 'QQ':
        csvtuples[row['QQ']] = a

out = json.dumps(csvtuples)

RETURNhtml = requests.post('http://127.0.0.1:8000/autoweb/done/24/9/',  json=out)





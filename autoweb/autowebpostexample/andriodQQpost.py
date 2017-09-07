import csv
import requests
import codecs

#----post sort 3 & 7-----#
import csv
import requests
import json
import codecs
temp_taskid = codecs.open('36.csv','r', encoding='utf_8')
fieldname = ['QQ','name','nick','contains']
reader = csv.DictReader(temp_taskid, fieldnames=fieldname)
csvtuples = {}
for row in reader:
    if 'QQ' in row['QQ']:
        continue
    a={}
    a['name']= row['name']
    a['nick']=row['nick']
    a['contains']=row['contains']
    b = row['QQ']
    b = b.replace(u'\ufeff', '')
    csvtuples[b] = a
    out = json.dumps(csvtuples)

a = requests.post('http://127.0.0.1:8000/autoweb/done/36/7/', json=out)

open('index.html','r').write(a.text)

#----post sort 4 & 8-----#
import csv
import requests
import json
import codecs
temp_taskid = codecs.open('29.csv','r', encoding='utf_8')
fieldname = ['GroupId','GroupName','number']
reader = csv.DictReader(temp_taskid, fieldnames=fieldname)
csvtuples = {}
for row in reader:
    if 'GroupId' in row['GroupId']:
        continue
    a={}
    a['GroupName']= row['GroupName']
    a['number']=row['number']
    b = row['GroupId']
    b = b.replace(u'\ufeff', '')
    csvtuples[b] = a
    out = json.dumps(csvtuples)

a = requests.post('http://127.0.0.1:8000/autoweb/done/29/8/', json=out)

open('index.html','r').write(a.text)
#---post sort 9

import csv
import requests
import json
import codecs
temp_taskid = codecs.open('27.csv','r', encoding='utf_8')
fieldname = ['QQ', 'name', 'level', 'contains']
reader = csv.DictReader(temp_taskid, fieldnames=fieldname)
csvtuples = {}
for row in reader:
    if 'QQ' in row['QQ']:
        continue
    a={}
    a['name']= row['name']
    a['level']=row['level']
    a['contains']=row['contains']
    b = row['QQ']
    b = b.replace(u'\ufeff', '')
    csvtuples[b] = a
    out = json.dumps(csvtuples)
RETURNhtml = requests.post('http://127.0.0.1:8000/autoweb/done/27/9/', json=out)




import csv
import requests
csvfile = open('ename.csv', 'w')
fieldname = ['GroupId','GroupName']
writer = csv.DictWriter(csvfile,fieldnames=fieldname)
writer.writeheader()
writer.writerow({'GroupId': '678092', 'GroupName': 'Beans'})
writer.writerow({'GroupId': '24781222', 'GroupName': 'vanxv'})
writer.writerow({'GroupId': '7382732', 'GroupName': 'google'})
csvfile.close()

csvfile2 = open('ename.csv')
reader = csv.DictReader(csvfile2)
dictlist = {}
for xx in reader:
    dictlist[xx['GroupId']]=xx['GroupName']

print(dictlist)
requests.post('http://127.0.0.1:8000/autoweb/done/22/8/', json=dictlist)
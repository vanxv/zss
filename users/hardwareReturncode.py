import requests
from bs4 import BeautifulSoup
UA = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.13 Safari/537.36"
url = "http://127.0.0.1:8000/users/PcHardwareInsert/"
header = { "User-Agent" : UA,
           "Referer": "http://www.v2ex.com/signin"
           }
data={
    'username':'xxxxxxxx',
    'password':'111111111',
}
session = requests.Session()
f = session.post(url, data=data, headers=header)
print(f.content.decode())
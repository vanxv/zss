# -*- coding:UTF-8 -*-
from selenium import webdriver
import time
import re
def scroll(n,i):
    return "window.scrollTo(0,(document.body.scrollHeight/{0})*{1});".format(n,i)

url = 'https://item.taobao.com/item.htm?id=530502470295'

firefox = webdriver.Chrome('/users/VANXV/downloads/chromedriver')
firefox.get(url)
firefox.maximize_window()
n = 10
for i in range(1,n+1):
    s = scroll(n,i)
    print(s)
    firefox.execute_script(s)
    time.sleep(2)
print(len(firefox.page_source))
body = firefox.page_source
pattam_id = '"src"="(.*?)"'
all_id = re.compile(pattam_id).findall(body)
for i in range(0, len(all_id)):
    this_id = all_id[i]
    url = 'https://item.taobao.com/item.htm?id=' + str(this_id)
    print(url)
all_id = re.compile(pattam_id).findall(body)
firefox.quit()
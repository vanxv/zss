# -*- coding:UTF-8 -*-
from selenium import webdriver
import time
import re

def scroll(n,i):
    return "window.scrollTo(0,(document.body.scrollHeight/{0})*{1});".format(n,i)

def crawler(username, password, addnumber):

    url = 'https://www.linkedin.com/'
    #firefox = webdriver.Chrome('/users/VANXV/downloads/coding/chromedriver')
    firefox = webdriver.Chrome('chromedriver')
    #firefox = webdriver.PhantomJS('/users/VANXV/downloads/coding/phantomjs/bin/phantomjs')
    firefox.get(url)
    firefox.maximize_window()
    firefox.find_element_by_id('login-email').send_keys(username)
    firefox.find_element_by_id('login-password').send_keys(password)
    try:
        firefox.find_element_by_id('login-submit').click()
        time.sleep(1)
    except:
        time.sleep(1)
    firefox.get('http://www.linkedin.com/mynetwork/')
    n = 5
    for i in range(1,n+1):
        s = scroll(n,i)
        print(s)
        firefox.execute_script(s)
        time.sleep(2)
    print(len(firefox.page_source))
    firefox.execute_script("window.scrollTo(0,(document.body.scrollHeight/5)*0);")
    body = firefox.page_source
    buttion = firefox.find_elements_by_xpath("//ul/li/div/button")
    del buttion[0]
    for xxx in buttion:
        try:
            if addnumber > 0:
                xxx.click()
                addnumber = int(addnumber) - 1
                time.sleep(1)
        except:
            continue
    firefox.quit()

def main():
    file = open('account.txt','r')
    for account in file:
        a = re.split(',', account)
        print(a[0] + a[1] + a[2])
        crawler(a[0],a[1],a[2])
    file.close()
if __name__=="__main__":
    main()
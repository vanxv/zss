# -*- coding:UTF-8 -*-
from selenium import webdriver
import time
import re
import pymysql


def scroll(n,i):
    return "window.scrollTo(0,(document.body.scrollHeight/{0})*{1});".format(n,i)

def crawler(self):
    key = self
    for i in range(0, 100):
        url = 'https://s.taobao.com/search?q=' + str(key) + '&s=' + str(44 * i) + '&sort=sale-desc&filter=reserve_price%5B40%2C100%5D'
        firefox = webdriver.Chrome('/users/VANXV/downloads/coding/chromedriver')
        #firefox = webdriver.PhantomJS('/users/VANXV/downloads/coding/phantomjs/bin/phantomjs')
        firefox.get(url)
        firefox.maximize_window()
        n = 5
        for i in range(1,n+1):
            s = scroll(n,i)
            print(s)
            #firefox.execute_script(s)
            #firefox.execute_script('window.scrollTo(0, document.body.scrollHeight)')
            firefox.execute_script("window.scrollTo(0, document.body.scrollHeight)")
            #firefox.execute_script('document.title')
            time.sleep(2)
        print(len(firefox.page_source))
        body = firefox.page_source
        pattam_id = '"nid":"(.*?)"'
        all_id = re.compile(pattam_id).findall(body)
        for i in range(0, len(all_id)):
            this_id = all_id[i]
            url = 'https://item.taobao.com/item.htm?id=' + str(this_id)
            print(url)

        psagestotal = firefox.find_element_by_class_name("current").text
        print(psagestotal)
        firefox.quit()

def main():
    crawler('手表女')
if __name__=="__main__":
    main()
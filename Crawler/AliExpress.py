# -*- coding:UTF-8 -*-
from selenium import webdriver
import time
import re
from selenium.webdriver.common.action_chains import ActionChains

def scroll(n,i):
    return "window.scrollTo(0,(document.body.scrollHeight/{0})*{1});".format(n,i)

def crawler(self):
    key = self
    for i in range(0, 100):
        url = 'https://www.aliexpress.com/wholesale?&SearchText=' + str(key) + '&page=' + str(i)
        #firefox = webdriver.Chrome('/users/VANXV/downloads/coding/chromedriver')
        option = webdriver.ChromeOptions()
        option.add_extension('/Users/VANXV/Downloads/hmanipjnbjnhoicdnooapcnfonebefel.crx')  # 自己下载的crx路径
        firefox = webdriver.Chrome('/users/VANXV/downloads/coding/chromedriver', chrome_options=option)
        #firefox = webdriver.PhantomJS('/users/VANXV/downloads/coding/phantomjs/bin/phantomjs')
        firefox.get(url)
        firefox.maximize_window()
        n = 5
        print(len(firefox.page_source))
        for i in range(1,n+1):
            s = scroll(n,i)
            print(s)
            firefox.execute_script(s)
            #time.sleep(2)
        print(len(firefox.page_source))
        body = firefox.page_source
        #time.sleep(2)
        #---- click order ----#
        elm_Men_Menu = firefox.find_element_by_xpath('//*[@id="hs-list-items"]/ul/li[8]/div/div[3]/a[1]')
        elm_Men_Menu2 = firefox.find_element_by_xpath('//*[@id="hs-list-items"]/ul/li[8]/div/div[2]')
        print('elm_Men_Menu' + str(elm_Men_Menu))
        time.sleep(1)
        builder = ActionChains(firefox)
        time.sleep(1)
        #document.getElementById(“test”).scrollIntoView();
        builder.move_to_element(elm_Men_Menu2)
        print('waittng____click')
        time.sleep(2)
        builder.move_to_element(elm_Men_Menu2).click(elm_Men_Menu).perform()
        time.sleep(2)
        print('ok____click')
        #---- click order ----#

        pattam_id = '"/item/":"(.*?)"'
        all_id = re.compile(pattam_id).findall(body)
        for i in range(0, len(all_id)):
            this_id = all_id[i]
            url = 'https://item.taobao.com/item.htm?id=' + str(this_id)

            print(url)
        # psagestotal = firefox.find_element_by_class_name("current").text
        # print(psagestotal)
        firefox.quit()
def main():
    crawler('girl')
if __name__=="__main__":
    main()
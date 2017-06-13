import pickle
from selenium import webdriver
import time
import pymysql

connect = pymysql.Connect(
    host='localhost',
    port=3306,
    user='root',
    passwd='1q2w3e4r',
    db='autofacebook',
    charset='utf8'
)
cursor = connect.cursor()


from selenium.webdriver.common.keys import Keys

#---- setting useragent ---#
ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
options = webdriver.ChromeOptions()
options.add_argument('lang=en')
options.add_argument(ua)
#---- setting useragent ---#

firefox = webdriver.Chrome(chrome_options=options)
cookies = pickle.load(open("cookies.pkl", "rb"))
firefox.get("https://www.facebook.com/")
for cookie in cookies:
    firefox.add_cookie(cookie)
firefox.get("https://www.facebook.com/PopfieldOfficial/")
pickle.dump( firefox.get_cookies() , open("cookies.pkl","wb"))

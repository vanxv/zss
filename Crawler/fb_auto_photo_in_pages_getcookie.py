import pickle
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys


#---- setting useragent ---#
ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
options = webdriver.ChromeOptions()
options.add_argument('lang=en')
options.add_argument(ua)
service_log_path = "./chromedriver.log"
#---- setting useragent ---#

#---- open setting cookie and web ---#
firefox = webdriver.Chrome(chrome_options=options,executable_path='/Users/VANXV/Downloads/coding/chromedriver', service_log_path=service_log_path)
cookies = pickle.load(open("cookies.pkl", "rb"))
firefox.get("https://www.facebook.com/")
for cookie in cookies:
    firefox.add_cookie(cookie)
firefox.get("https://www.facebook.com/PopfieldOfficial/")
firefox.find_element_by_xpath('//*[@id="PHOTO_VIDEO"]/div/i').click()
time.sleep(2)
firefox.find_element_by_name('composer_photo')
firefox.find_element_by_name('composer_photo').send_keys("/Users/VANXV/Downloads/popfield/bags001/1.jpg")
firefox.find_element_by_name('composer_photo').send_keys("/Users/VANXV/Downloads/popfield/bags001/2.jpg")
#firefox.find_elements_by_name('composer_photo').click()
time.sleep(2)
firefox.find_element_by_xpath("//button[@data-testid='react-composer-post-button']").click()
print('ok')
#pickle.dump( firefox.get_cookies() , open("cookies.pkl","wb"))


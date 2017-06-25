import pickle
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
import pymysql
from datetime import datetime
import re


def replace(x):
	# 去除img标签,7位长空格
	removeImg = re.compile('<img.*?>| {7}|')
	# 删除超链接标签
	removeAddr = re.compile('<a.*?>|</a>')
	# 把换行的标签换为\n
	replaceLine = re.compile('<tr>|<div>|</div>|</p>')
	# 将表格制表<td>替换为\t
	replaceTD = re.compile('<td>')
	# 把段落开头换为\n加空两格
	replacePara = re.compile('<p.*?>')
	# 将换行符或双换行符替换为\n
	replaceBR = re.compile('<br><br>|<br>')
	# 将其余标签剔除
	removeExtraTag = re.compile('<.*?>')
	# 将&#x27;替换成'
	replacex27 = re.compile('&#x27;')
	# 将&gt;替换成>
	replacegt = re.compile('&gt;|&gt')
	# 将&lt;替换成<
	replacelt = re.compile('&lt;|&lt')
	# 将&nbsp换成''
	replacenbsp = re.compile('&nbsp;')
	# 将多余3个的空格换成"
	replacespace = re.compile('\s{3,}')
	x = re.sub(removeImg, "", x)
	x = re.sub(removeAddr, "", x)
	x = re.sub(replaceLine, "\n", x)
	x = re.sub(replaceTD, "\t", x)
	x = re.sub(replacePara, "", x)
	x = re.sub(replaceBR, "\n", x)
	x = re.sub(removeExtraTag, "", x)
	x = re.sub(replacex27, '\'', x)
	x = re.sub(replacegt, '>', x)
	x = re.sub(replacelt, '<', x)
	x = re.sub(replacenbsp, '', x)
	x = re.sub(replacespace, '', x)
	return x.strip()

def chuli(ss): # 从网页源码中提取需要的信息,传入的ss必须是unicode编码
	p1 = re.compile(u'<td class="name">.*?<p class="consume-title".*?>(.*?)</p>.*?data-clipboard-text="(.*?)".*?<span class="amount-pay">(.*?)</span>.*?<p class="text-muted">(.*?)</p>',re.S)
	items = re.findall(p1,ss)
	print(len(items))
	results = []
	for item in items:
		result = []
		tmp = [replace(x) for x in item]
		s = tmp[2].split()
		result.extend(tmp[:2])
		result.append(s[1])
		result.append(tmp[3])
		result.append(s[0])
		print('|'.join(result))
		results.append(result)
	return results

class AutoWebUA():
    def setUa(self):
        self.ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        self.options = webdriver.ChromeOptions()
        self.options.add_argument('lang=en')
        self.options.add_argument(self.ua)
        self.service_log_path = "./chromedriver.log"

    def cookieAndWeb(self):
        #---- open setting cookie and web ---#
        #firefox = webdriver.Chrome(chrome_options=self.options,executable_path='./chromedriver', service_log_path=self.service_log_path)
        firefox = webdriver.Chrome(chrome_options=self.options,executable_path='./chromedriver_ubuntux64', service_log_path=self.service_log_path)
        #cookies = pickle.load(open("alipaycookie.pkl", "rb"))
        firefox.get("https://www.alipay.com/")
        #for cookie in cookies:
        #    firefox.add_cookie(cookie)
        firefox.get("https://auth.alipay.com/login/index.htm")
        firefox.find_element_by_id('J-input-user').send_keys(self.alipayusername)
        firefox.find_element_by_id('password_rsainput').send_keys(self.alipayps)
        firefox.find_element_by_id('J-login-btn').click()
        firefox.get('https://consumeprod.alipay.com/record/standard.htm')
        html = firefox.page_source
        self.results = chuli(html)

    def mysqldb(self):
        # 创建连接
        conn = pymysql.connect(host='www.zhess.com', port=3306, user='root', passwd='1121hotsren', db='zss', charset='utf8')
        # 创建游标
        cursor = conn.cursor()
        # 执行SQL，并返回收影响行数
        for res in self.results:
            #测试是否有订单编号
            selectalipayid = cursor.execute("select * from financial_alipaydetail WHERE alipayid='" +  res[1] + "';")
            if selectalipayid ==0:
                if res[3] == '交易成功':
                    if res[4] == '-':
                        res[2] = (float(res[2]) * -1)
                        valueNone = 1
                    else:
                        valueNone = None
                    sql = "INSERT INTO financial_alipaydetail VALUES (%s,%s,%s,%s,%s,%s,%s)"
                    cmd = (cursor.lastrowid,res[1], res[0], res[2], datetime.now(), self.alipayusername, valueNone)
                    effect_row = cursor.execute(sql,cmd)
                    conn.commit()


        # 执行SQL，并返回受影响行数
        # effect_row = cursor.execute("update tb7 set pass = '123' where nid = %s", (11,))
        # 执行SQL，并返回受影响行数,执行多次
        # effect_row = cursor.executemany("insert into tb7(user,pass,licnese)values(%s,%s,%s)", [("u1","u1pass","11111"),("u2","u2pass","22222")])
        # 提交，不然无法保存新建或者修改的数据
        conn.commit()
        # 关闭游标
        cursor.close()
        # 关闭连接
        conn.close()

    def __init__(self):
        self.alipayusername = '18606622210'
        self.alipayps = 'hotsren1121'
        self.setUa()
        self.cookieAndWeb()
        self.mysqldb()
        #缺cookie保存
AutoWebUA()
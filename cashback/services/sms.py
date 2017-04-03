# coding: utf-8

# 接口类型：互亿无线营销短信接口，支持发送会员营销短信。
# 账户注册：请通过该地址开通账户http://sms.ihuyi.com/register.html
# 注意事项：
# （1）调试期间，请用默认的模板进行测试，默认模板详见接口文档；
# （2）请使用APIID（查看APIID请登录用户中心->短信营销->帐户及签名设置->APIID）及 APIkey来调用接口；
# （3）该代码仅供接入互亿无线短信接口参考使用，客户可根据实际需要自行编写；

import requests

host = "api.yx.ihuyi.com"
sms_send_uri = "/webservice/sms.php?method=Submit"

# //用户名是登录用户中心->短信营销->帐户及签名设置->APIID
account = "用户名"
# 密码 查看密码请登录用户中心->短信营销->帐户及签名设置->APIKEY
password = "密码"


def send_sms(mobile, content):
    '''
    调用接口发送短信
    :param mobile: 手机号码(多个号码使用英文逗号分隔)
    :param content:短信内容
    :return:
    '''
    try:
        params = {
            'account': account,
            'password': password,
            'content': content,
            'mobile': mobile,
            'format': 'json'
        }
        result = requests.post(host + sms_send_uri, params)
        result_code = result.text
        if result_code == '0':
            return True
        return False
    except Exception as e:
        return False


if __name__ == '__main__':
    mobile = "138xxxxxxxx"
    text = "尊敬的会员，您好，夏季新品已上市，请关注。退订回TD【互亿无线】"

    print(send_sms(text, mobile))

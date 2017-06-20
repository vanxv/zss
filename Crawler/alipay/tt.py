#encoding=utf-8
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

with open('zhengze.html') as f:
	ss = f.read()
chuli(ss.decode('utf-8','ignore'))
# coding:utf-8
import csv
from datetime import datetime
import os
from orders.models import Order
from crm.models import Customer

ORDER_STATUS = {
    '买家已付款，等待卖家发货': 1,
    '卖家已发货，等待买家确认': 2,
    '交易成功': 3,
    '交易关闭': 4
}


class OrderService:
    def import_orders(self, filename, user_id, platform):
        '''
        批量导入订单
        :param filename:文件名(绝对路径)
        :param user_id: 用户id
        :param platform: 订单平台
        :return:
        '''
        try:
            file = open(filename, 'r')
            reader = csv.reader(file)

            orders = []
            customers = []
            usernames = []
            ordernos = []
            for line in reader:
                if '订单编号' in line:
                    continue

                customer = Customer()
                customer.username = line[1]
                customer.seller_id = user_id  # 商家id
                customer.alipay = line[2]
                customer.realname = line[12]
                customer.address = line[13]
                customer.mobile = line[16].strip("'")
                usernames.append(customer.username)
                customers.append(customer)

                order = Order()
                order.id = line[0].strip('=').strip('"')
                order.seller_id = user_id
                order.customer_name = customer.username
                order.platform = platform
                order.amount = float(line[6])
                order.status = ORDER_STATUS[line[10]]
                order.add_time = datetime.strptime(line[17], '%Y-%m-%d %H:%M:%S')
                order.remark = line[23]
                order.count = int(line[24])
                order.shop_id = int(line[25])
                ordernos.append(order.id)
                orders.append(order)

            file.close()
            os.remove(filename)

            # 排除已存在的会员
            exists_usernames = Customer.objects.filter(seller_id=user_id, username__in=usernames) \
                .values_list('username', flat=True)
            exists_usernames = list(exists_usernames)
            customers = list(filter(lambda u: u.username not in exists_usernames, customers))

            # 排除已存在的订单
            exists_ordernos = Order.objects.filter(seller_id=user_id, id__in=ordernos) \
                .values_list('id', flat=True)
            exists_ordernos = list(exists_ordernos)
            orders = list(filter(lambda o: o.id not in exists_ordernos, orders))

            customer_ids = list(Customer.objects.values_list('id', flat=True))
            if len(customer_ids) == 0:
                customer_ids.append(0)

            if len(customers) > 0:
                Customer.objects.bulk_create(customers)  # 批量导入买家信息
            new_customers = Customer.objects.exclude(id__in=customer_ids).values('id', 'username')

            for order in orders:
                for customer in new_customers:
                    if order.customer_name == customer['username']:
                        order.customer_id = customer['id']

            if len(orders) > 0:
                Order.objects.bulk_create(orders)  # 批量导入订单信息

            msg = '成功导入订单：{0}条 成功导入会员：{1}位'.format(len(orders), len(customers))
            return True, msg

        except Exception as e:
            return False, '导入失败'

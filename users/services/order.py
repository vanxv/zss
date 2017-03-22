# coding:utf-8
import csv
from datetime import datetime
import os
from orders.models import Order

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
            for line in reader:
                if '订单编号' in line:
                    continue

                order = Order()
                order.id = line[0].strip('=').strip('"')
                order.user_id = user_id
                order.platform = platform
                order.amount = float(line[6])
                order.status = ORDER_STATUS[line[10]]
                order.add_time = datetime.strptime(line[17], '%Y-%m-%d %H:%M:%S')
                order.remark = line[23]
                order.count = int(line[24])
                order.shop_id = int(line[25])
                orders.append(order)

            file.close()
            Order.objects.bulk_create(orders)  # 批量插入
            os.remove(filename)

        except Exception as e:
            return False

        return True

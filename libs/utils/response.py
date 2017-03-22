# coding:utf-8

class PagedResult:
    def __init__(self):
        self.records = 50,  # 总记录数
        self.rows = '',  # 页数据
        self.page = 1  # 页码
        self.pagesize = 5  # 页容量
        self.total = 10  # 页总数

    def set(self, page, pagesize, recodes, rows=None):
        self.page = page
        self.pagesize = pagesize
        self.records = recodes
        self.rows = rows
        self.total = (self.records + self.pagesize - 1) // self.pagesize  # 向上整除

    def to_dict(self):
        return {
            'records': self.records,
            'rows': self.rows,
            'page': self.page,
            'pagesize': self.pagesize,
            'total': self.total
        }


paged_result = PagedResult()

res_code = {
    'success': '10000',
    'error': '10001'
}

res_msg = {
    'msg': '',
    'data': '',
    'retcode': res_code['success'],
}

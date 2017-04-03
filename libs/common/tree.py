# coding:utf-8


# ztree模型
class TreeDto:
    def __init__(self, id, pId, name, open, isParent):
        self.id = id
        self.pId = pId
        self.name = name
        self.open = open
        self.isParent = isParent

    def to_dict(self):
        return {
            'id': self.id,
            'pId': self.pId,
            'name': self.name,
            'open': self.open,
            'isParent': self.isParent
        }

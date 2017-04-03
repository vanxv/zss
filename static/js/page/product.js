var productSetting = {
    async: {
        enable: true,
        url: "/cashback/getgoodstree/",
        autoParam: ["id", "name=n", "level=lv"],
        otherParam: {"otherParam": "tree"},
        type: 'get'
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    check: {
        enable: true,
        chkboxType: {"Y": "s", "N": "s"}
    },
    callback: {
        onAsyncSuccess: checkProduct
    }
};

function checkProduct(e, treeId, treeNode, msg) {
    var productTree = $.fn.zTree.getZTreeObj("productTree");
    productTree.checkAllNodes(false);

    task_id = getUrlParam('id')
    if (task_id) {
        $.ajax({
            url: "/cashback/gettaskgoods/?id=" + task_id,
            type: "get",
            dataType: "json",
            success: function (res) {
                for (var i = 0, id; id = res[i]; i++) {
                    var node = productTree.getNodeByParam("id", id);
                    productTree.checkNode(node, true, false, false);
                }
            }
        });
    }
}


function getCheckProduct() {
    var datas = [];
    var productTree = $.fn.zTree.getZTreeObj("productTree");
    var products = productTree.getCheckedNodes(true);
    if (products == null || products.length === 0) {
        parent.layer.alert("请选择商品");
    }
    else {
        for (var i = 0, product; product = products[i]; i++) {
            datas.push({id: product.id, 'pId': product.pId});
        }
        var postData = JSON.stringify(datas)
        return postData;
    }
}


function saveData() {
    var roleTree = $.fn.zTree.getZTreeObj("roleTree");
    var roles = roleTree.getCheckedNodes(true);
    if (roles != null && roles.length > 0) {
        var menuTree = $.fn.zTree.getZTreeObj("menuTree");
        var menus = menuTree.getCheckedNodes(true);
        if (menus == null || menus.length === 0) {
            parent.layer.alert("请选择要授权的菜单");
        } else {
            var datas = [];
            var roleId = roles[0].id;
            for (var i = 0, menu; menu = menus[i]; i++) {
                datas.push({RoleId: roleId, MenuId: menu.id});
            }
            var postData = JSON.stringify(datas);
            var btn = $(this);
            btn.button("loading");
            $.ajax({
                url: "/Role/SetRoleMenus",
                type: "POST",
                dataType: "json",
                data: postData,
                contentType: "application/json, charset=utf-8",
                success: function (res) {
                    btn.button("reset");
                    if (res.flag) {
                        parent.layer.alert("授权成功");
                    } else {
                        parent.layer.alert("授权失败：" + res.msg);
                    }
                }
            });
        }
    } else {
        parent.layer.alert("请选择一个角色");
    }
}

function clearData() {
    var roleTree = $.fn.zTree.getZTreeObj("roleTree");
    var roles = roleTree.getCheckedNodes(true);
    if (roles != null && roles.length > 0) {
        var role = roles[0];
        var btn = $(this);
        btn.button("loading");
        parent.layer.confirm("您确定要清空【" + role.name + "】下的所有权限?", {
            btn: ['确认', '取消'] //按钮
        }, function () {
            var menuTree = $.fn.zTree.getZTreeObj("menuTree");
            $.ajax({
                url: "/Role/ClearRoleMenus/" + role.id,
                type: "POST",
                dataType: "json",
                data: null,
                success: function (res) {
                    btn.button("reset");
                    menuTree.checkAllNodes(false);
                    if (res.flag) {
                        parent.layer.alert("清空成功");
                    } else {
                        parent.layer.alert("清空失败：" + res.msg);
                    }
                }
            });
        }, function () {
            btn.button("reset");
        });
    } else {
        parent.layer.alert("请选择一个角色");
    }
}

function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if (r != null) return unescape(r[2]);
    return null;
}


$(document).ready(function () {
    $.fn.zTree.init($("#productTree"), productSetting);
    // $("#btnSave").click(saveData);
    // $("#btnClear").click(clearData);
});
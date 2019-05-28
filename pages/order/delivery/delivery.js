var connect = require('../../../connect.js')

Page({
    data: {
        deliveryInfo: [
            {
                'id': 1,
                'profilePhoto': '/image/friend.png',
                'name': 'char',
                'time': '4小时前',
                'tag': '外卖',
                'state': '未领取',
                'description': '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
            },
            {
                'id': 2,
                'profilePhoto': '/image/friend.png',
                'name': 'char',
                'time': '4小时前',
                'tag': '外卖',
                'state': '未领取',
                'description': '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
            },
            {
                'id': 3,
                'profilePhoto': '/image/friend.png',
                'name': 'char',
                'time': '4小时前',
                'tag': '外卖',
                'state': '未领取',
                'description': '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
            },
            {
                'id': 4,
                'profilePhoto': '/image/friend.png',
                'name': 'char',
                'time': '4小时前',
                'tag': '外卖',
                'state': '未领取',
                'description': '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
            }
        ]
    },
    onShow: function (e) {
        this.setData({deliveryInfo:[]});
        connect.changePage(this, '外卖');
    },

    navigateToAccept: function (e) {
        //e.currentTarget.id 为 deliveryInfo 中的id
        console.log(e.currentTarget.id);
      connect.changeTabIndex(e.currentTarget.id);
      connect.acceptOrder();
        wx.navigateTo({
            url: '../accept/accept'
        })
    },
    navigateToAddFriend: function (e) {
        //e.currentTarget.id 为 deliveryInfo 中的id
      console.log(e.currentTarget.id);
      connect.changeTabIndex(e.currentTarget.ownerId);
      connect.addFriend();
        wx.navigateTo({
            url: '../addFriend/addFriend'
        })
    },

    //跳转下单界面
    make_order: function (e) {
        wx.navigateTo({
            url: '../make_order/make_order',
        })
    },
})
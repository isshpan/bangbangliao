Page({
    data: {
        deliveryInfo: [
            {
                'profilePhoto': '/image/好友.png',
                'name': 'char',
                'time': '4小时前',
                'tag': '外卖',
                'state': '未领取',
                'description': '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
            },
            {
                'profilePhoto': '/image/好友.png',
                'name': 'char',
                'time': '4小时前',
                'tag': '外卖',
                'state': '未领取',
                'description': '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
            },
            {
                'profilePhoto': '/image/好友.png',
                'name': 'char',
                'time': '4小时前',
                'tag': '外卖',
                'state': '未领取',
                'description': '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
            },
            {
                'profilePhoto': '/image/好友.png',
                'name': 'char',
                'time': '4小时前',
                'tag': '外卖',
                'state': '未领取',
                'description': '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
            }
        ]
    },
    navigateToAccept: function () {
        wx.navigateTo({
            url: '../accept/accept'
        })
    },
    navigateToAddFriend: function () {
        wx.navigateTo({
            url: '../addFriend/addFriend'
        })
    }
})
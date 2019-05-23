Page({
    data: {
      profilePhoto: '/image/friend.png',
        name: 'char',
        time: '4小时前',
        tag: '外卖',
        state: '未领取',
        description: '有没有人啊，要饿死啦！求带7食堂的照烧鸡排饭！！地址：女子小区6号楼（接头地点私聊叭）'
    },
    navigateToAddFriend: function () {
        wx.navigateTo({
            url: '../addFriend/addFriend'
        })
    }
})
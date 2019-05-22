Page({
  data: {
    'chatInfoList': [
      {
        'photo': '/image/friend.png',
        'name': 'char',
        'description': '嘿嘿嘿',
        'time': '昨天',
        'tag': 0
      },
      {
        'photo': '/image/friend.png',
        'name': 'Rose',
        'description': '啦啦啦啦啦啦啦啦啦啦啦啦啦啦...',
        'time': '08:42',
        'tag': 1
      }, {
        'photo': '/image/friend.png',
        'name': 'Jack',
        'description': '啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
        'time': '07:21',
        'tag': 3
      }
    ]
  },

  //跳转添加好友界面
  addFriend: function (options) {
    wx.navigateTo({
      url: '../order/addFriend/addFriend',
    })
  },
  navigateToChatUI: function (){
    wx.navigateTo({
      url: './chatui/chatui'
    })
  }
})

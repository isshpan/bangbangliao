Page({
  data: {
    'chatInfoList': [
      {
        'photo': '/image/friend.png',
        'name': 'char',
        'description': '嘿嘿嘿',
        'time': '昨天',
        'tag': 0,
        'id': 1   //此ID为好友的openID
      },
      {
        'photo': '/image/friend.png',
        'name': 'Rose',
        'description': '啦啦啦啦啦啦啦啦啦啦啦啦啦啦...',
        'time': '08:42',
        'tag': 1,
        'id': 2
      },
      {
        'photo': '/image/friend.png',
        'name': 'Jack',
        'description': '啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
        'time': '07:21',
        'tag': 3,
        'id': 3
      }
    ]
  },

  //跳转添加好友界面
  addFriend: function (options) {
    wx.navigateTo({
      url: '../order/addFriend/addFriend',
    })
  },
  navigateToChatUI: function (e) {
    //e.currentTarget.id 为 chatInfoList 中的id
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: './chatui/chatui?id=' + e.currentTarget.id
      
    });
    
  }
})

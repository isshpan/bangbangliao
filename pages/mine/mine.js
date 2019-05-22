//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    profile: {
      'photo': '/image/friend.png',
      'name': 'char',
      'phone': '132****0688'
    },
    count: {
      'delivery': 3,
      'express': 6,
      'friend': 9
    }
  },

  //转到收货地址页面
  address: function (options) {
    wx.navigateTo({
      url: '../address/address',
    })
  },

  //转到个人主页
  personal: function (options) {
    wx.navigateTo({
      url: '../mine/personal/personal',
    })
  },

  //转到服务中心
  server_center: function (options) {
    wx.navigateTo({
      url: '../mine/server_center/server_center',
    })
  },

  //转到帮助反馈
  feedback: function (options) {
    wx.navigateTo({
      url: '../mine/feedback/feedback',
    })
  },

  //转到规则中心
  rule: function (options) {
    wx.navigateTo({
      url: '../mine/rule/rule',
    })
  },

  //转到推荐有奖
  recommend: function (options) {
    wx.navigateTo({
      url: '../mine/recommend/recommend',
    })
  },

  //跳转好友聊天界面
  chat: function (options) {
    wx.switchTab({
      url: '../chat/chat',
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

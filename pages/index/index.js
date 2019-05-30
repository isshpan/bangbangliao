const app = getApp();
var connect = require('../../connect.js');

Page({
  data: {
    infoList: [],
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  navigateToAccept: function (e) {
    //e.currentTarget.id 为 deliveryInfo 中的id
    //console.log(e.currentTarget.id);
    connect.changeTabIndex(e.currentTarget.id);
    connect.acceptOrder(e.currentTarget.id);
    wx.navigateTo({
      url: '../order/accept/accept'
    })
  },
  navigateToAddFriend: function (e) {
    //e.currentTarget.id 为 deliveryInfo 中的id
    console.log(e.currentTarget.id);
    connect.changeTabIndex(e.currentTarget.id);
    connect.addFriend();
    wx.navigateTo({
      // url: '../order/addFriend/addFriend'
      url: '../order/addFriend/addFriend?id=' + e.currentTarget.id
    })
  },

  //跳转下单界面
  make_order: function (options) {
    wx.navigateTo({
      url: '../order/make_order/make_order',
    })
  },
  //跳转外卖订单界面
  delivery: function (options) {
    wx.navigateTo({
      url: '../order/delivery/delivery',
    })
  },
  //跳转快递订单界面
  express: function (options) {
    wx.navigateTo({
      url: '../order/express/express',
    })
  },
  //跳转添加好友界面
  addFriend: function (options) {
    wx.navigateTo({
      url: '../order/addFriend/addFriend',

    })
  },

  //搜索信息
  onSearch: function (e) {
    const info = e.detail;
    connect.searchRecommendPage(this, info);
  },

  onShow: function () {
    connect.changeRecommendPage(this);
  },

  onLoad:function(){
    connect.changeRecommendPage(this);
  },

  //获取用户信息
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },

  //对话框
  showDialog: function () {
    this.dialog.showDialog();
  },

  confirmEvent: function () {
    this.dialog.hideDialog();
  },

  bindGetUserInfo: function (event) {
    // 用户点击授权后，这里可以做一些登陆操作
    app.globalData.userInfo = event.detail.event.detail.userInfo;
    connect.initUserData();
  },

  //下拉刷新
  onPullDownRefresh: function () {
    var that = this;
    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      connect.changeRecommendPage(that);
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
    //console.log("下拉刷新")
  },
})
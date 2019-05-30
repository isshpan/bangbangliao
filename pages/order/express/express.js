var connect = require('../../../connect.js');

Page({
  data: {
    deliveryInfo: []
  },

  onLoad:function(e){
    this.setData({ deliveryInfo: [] });
    if (connect.getMe()) {
      connect.changeMyOrder(this, '快递');
    } else {
      connect.changePage(this, '快递');
    }
  },

  onShow: function (e) {
    this.setData({ deliveryInfo: [] });
    if (connect.getMe()) {
      connect.changeMyOrder(this, '快递');
    } else {
      connect.changePage(this, '快递');
    }
    ////console.log(this.data.deliveryInfo);
  },

  navigateToAccept: function (e) {
    //e.currentTarget.id 为 deliveryInfo 中的id
    ////console.log(e.currentTarget.id);
    connect.changeTabIndex(e.currentTarget.id);
    connect.acceptOrder();
    wx.navigateTo({
      url: '../accept/accept'
    })
  },
  navigateToAddFriend: function (e) {
    //e.currentTarget.id 为 deliveryInfo 中的id
    ////console.log(e.currentTarget.id);
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
  //下拉刷新
  onPullDownRefresh: function () {
    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
    ////console.log("下拉刷新")
  },
})
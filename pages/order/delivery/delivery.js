var connect = require('../../../connect.js')

Page({
    data: {
        deliveryInfo: []
    },
    onShow: function (e) {
        this.setData({deliveryInfo:[]});
        connect.changePage(this, '外卖');
    },

    navigateToAccept: function (e) {
        //e.currentTarget.id 为 deliveryInfo 中的id
        //console.log(e.currentTarget.id);
      connect.changeTabIndex(e.currentTarget.id);
      connect.acceptOrder();
        wx.navigateTo({
            url: '../accept/accept'
        })
    },
    navigateToAddFriend: function (e) {
        //e.currentTarget.id 为 deliveryInfo 中的id
      //console.log(e.currentTarget.id);
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
var connect = require('../../../connect.js')
Page({
    data: {},
    navigateToAddFriend: function () {
        wx.navigateTo({
            url: '../addFriend/addFriend'
        })
    },
    onShow:function(e){
      connect.changeAcceptInfo(this);
    }
})
var connect = require('../../connect.js')
// pages/address/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    'addressInfoList': [
      {
        'id': 1,    //此处ID应为openID
        'name': 'char',
        'sex': '女士',
        'phone': '13269200688',
        'location': '教室',
        'address': '信教1006',
      },
      {
        'id': 2,    //此处ID应为openID
        'name': 'char',
        'sex': '女士',
        'phone': '13269200688',
        'location': '宿舍',
        'address': '女子小区6号楼',
      }
    ]
  },

  onShow:function(e){
    this.setData({
      'addressInfoList':[]
    });
    connect.changeAddressPage(this);
  },

  edit_address: function (e) {
    //e.currentTarget.id 为 addressInfoList 中的id
    console.log(e.currentTarget.id);
    connect.changeTabIndex(e.currentTarget.id);
    wx.navigateTo({
      url: '../address/edit_address/edit_address?id=' + e.currentTarget.id,
    });
  },

  add_address: function (options) {
    wx.navigateTo({
      url: '../address/add_address/add_address',
    })
  },
})
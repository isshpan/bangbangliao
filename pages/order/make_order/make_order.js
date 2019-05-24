// pages/order/make_order/make_order.js
Page({

  data: {
    requestInput: '',
    textInput: '',
    express: 'default',
    delivery:'warning',
    addressInfo:[
      {
        'location': '宿舍',
        'address': '女子小区6号楼',
      },
      {
        'location': '教室',
        'address': '信教2008',
      }
    ],
    submit:{
      lable: '',
      order: '外卖',
      text: '',
      address: '',
    }
  },

  clearRequestInput: function (options) {
    this.setData({
      'requestInput': ''
    })
  },

  //按钮选择
  changeToExpress: function () {
    this.setData({ 
      express: 'warning',
      submit:{
        order: '快递',
      }
    });
    this.setData({ delivery: 'default' });
  },

  changeToDelivery: function () {
    this.setData({ express: 'default' });
    this.setData({
      delivery: 'warning',
      submit: {order: '外卖'}
    });
  },

  formSubmit(e) {
    this.setData({
      submit:{
        lable: e.detail.value.标签,
        order: this.data.submit['order'],
        text: e.detail.value.正文,
        address: e.detail.value.收货地址,
      }
    })
    console.log('提交的表单信息为：', this.data.submit)
  },

  //发布弹窗提醒
  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '确认发布？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.navigateBack({
            delta : 2
          })
        } else if (res.cancel) {
          console.log('用户点击取消');
          wx.navigateTo({
            url: '../make_order/make_order',
          })
        }
      }
    })
  },
})
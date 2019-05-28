var connect = require('../../../connect.js')
// pages/order/make_order/make_order.js
Page({

  data: {
    requestInput: '',
    textInput: '',
    express: 'default',
    delivery: 'warning',
    addressInfo: [
      {
        'location': '宿舍',
        'address': '女子小区6号楼',
      },
      {
        'location': '教室',
        'address': '信教2008',
      }
    ],
    submit: {
      label: '',
      order: '外卖',
      text: '',
      address: '',
    }
  },

  onShow: function (e) {
    connect.changeAddressTab(this);
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
      submit: {
        order: '快递',
      }
    });
    this.setData({ delivery: 'default' });
  },

  changeToDelivery: function () {
    this.setData({ express: 'default' });
    this.setData({
      delivery: 'warning',
      submit: { order: '外卖' }
    });
  },

  formSubmit(e) {
    var temp = e.detail.value;
    if (temp.标签 != '' && temp.正文 != '' && temp.收货地址 != '') {
      this.setData({
        submit: {
          label: e.detail.value.标签,
          order: this.data.submit['order'],
          text: e.detail.value.正文,
          address: e.detail.value.收货地址,
        }
      })
      //console.log('提交的表单信息为：', this.data.submit);
    }
  },

  //发布弹窗提醒
  modalcnt: function () {
    if (this.data.submit['label'] == '' || this.data.submit['text'] == '') {
      wx.showToast({
        title: '存在未填信息',
        icon: 'none',
        duration: 1000
      }, 2000)
      //console.log('存在未填信息');
    }
    else {
      var that = this;
      wx.showModal({
        title: '提示',
        content: '确认发布？',
        success: function (res) {
          if (res.confirm) {
            //console.log('用户点击确定');
            connect.addOrderData(that.data.submit.address, that.data.submit.order, that.data.submit.text);
            wx.navigateBack({
              delta: 2
            });
          } else if (res.cancel) {
            //console.log('用户点击取消');
            wx.navigateTo({
              url: '../make_order/make_order',
            })
          }
        }
      })
    }
  },
})
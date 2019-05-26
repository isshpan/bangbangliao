var connect = require('../../../connect.js')
// pages/address/edit_address/edit_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    male: 'info',
    female: 'default',
    dormitory: 'info',
    classroom: 'default',
    other: 'default',
    submit: {
      contacts: '',
      sex: '先生',
      tel: '',
      address: '',
      location: '宿舍',
    }
  },

  //表单信息
  formSubmit(e) {
    this.setData({
      submit: {
        contacts: e.detail.value.contacts,
        sex: this.data.submit['sex'],
        tel: e.detail.value.tel,
        address: e.detail.value.address,
        location: this.data.submit['location'],
      }
    })
    console.log('提交的表单信息为：', this.data.submit)
    connect.addAddress(this.data.submit);
  },

  /*
  获取输入内容
  */
  getDataBindTap: function (e) {
    var result = e.detail.value;
  },

  changeToMale: function () {
    this.setData({
      male: 'info',
      submit: { sex: '先生' }
    });
    this.setData({ female: 'default' });
  },

  changeToFemale: function () {
    this.setData({ male: 'default' });
    this.setData({
      female: 'info',
      submit: { sex: '女士' }
    });
  },

  changeToDormitory: function () {
    this.setData({
      dormitory: 'info',
      submit: { location: '宿舍' }
    });
    this.setData({ classroom: 'default' });
    this.setData({ other: 'default' });
  },

  changeToClassroom: function () {
    this.setData({ dormitory: 'default' });
    this.setData({
      classroom: 'info',
      submit: { location: '教室' }
    });
    this.setData({ other: 'default' });
  },

  changeToOther: function () {
    this.setData({ dormitory: 'default' });
    this.setData({ classroom: 'default' });
    this.setData({
      other: 'info',
      submit: { location: '其他' }
    });
  },

  //确认后返回上一级
  okBack: function () {
    wx.navigateBack({
      delta: 1
    })
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1000
    }, 2000)
    console.log('地址修改成功');
  }
})
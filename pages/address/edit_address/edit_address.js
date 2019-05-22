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
      other: 'default'
  },

  /*
  获取输入内容
  */
  getDataBindTap: function (e) {
    var result = e.detail.value;
  },

  changeToMale: function () {
    this.setData({male: 'info'});
    this.setData({female: 'default'});
  },

  changeToFemale: function () {
    this.setData({male: 'default'});
    this.setData({female: 'info'});
  },

  changeToDormitory: function () {
    this.setData({dormitory: 'info'});
    this.setData({classroom: 'default'});
    this.setData({other: 'default'});
  },

  changeToClassroom: function () {
    this.setData({dormitory: 'default'});
    this.setData({classroom: 'info'});
    this.setData({other: 'default'});
  },

  changeToOther: function () {
    this.setData({dormitory: 'default'});
    this.setData({classroom: 'default'});
    this.setData({other: 'info'});
  }
})
// pages/mine/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    submit: {
      advice: '',
      tel: '',
    }
  },

  /*
    获取输入内容
    */
  getDataBindTap: function (e) {
    var result = e.detail.value;
    //console.log(result)
  },

  formSubmit(e) {
    if (e.detail.value.advice != '' && e.detail.value.tel != '') {
      this.setData({
        submit: {
          advice: e.detail.value.advice,
          tel: e.detail.value.tel,
        }
      })
      //console.log('提交的表单信息为：', this.data.submit);
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 1000
      }, 2000)
      setTimeout(
        function () {
          wx.navigateBack({
            delta: 1
          })
        }, 1000
      )
    } else {
      wx.showToast({
        title: '存在未填信息',
        icon: 'none',
        duration: 1000
      }, 2000)
      // console.log('存在未填信息');
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
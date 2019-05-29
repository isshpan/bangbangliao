Page({
    data: {
        requestInput: '',
        aliasInput: '',
    },
    clearRequestInput: function (options) {
        this.setData({
            'requestInput': ''
          })
    },
    clearAliasInput: function (params) {
        this.setData({
            'aliasInput': ''
          })
    },

  formSubmit(e) {
    //console.log('提交的表单信息为：', e.detail.value)
  },

  success:function(){
    wx.navigateBack({
        delta: 1
    })
    wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 1000
    }, 2000)
  }
})
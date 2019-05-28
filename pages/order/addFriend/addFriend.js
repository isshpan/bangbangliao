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
      if (this.data.requestInput == '' || this.data.aliasInput  == '') {
        wx.showToast({
            title: '存在未填信息',
            icon: 'none',
            duration: 1000
        }, 2000)
        //console.log('存在未填信息');
    }
    else
    {
        wx.navigateBack({
            delta: 1
        })
        wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 1000
        }, 2000)
    }
  }
})
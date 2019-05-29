var connect = require('../../../connect.js');
const db = wx.cloud.database({});
const chatDataTable = db.collection('chatDataTable')//云端数据初始化
Page({
    data: {
        requestInput: '',
        aliasInput: '',
        id:0,
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

onLoad: function (id){
    this.data.id = id;
    console.log("id:", this.data.id);
  getApp().globalData.otherid = this.data.id["id"]
},

  success: function (id){
    
    //  if (this.data.requestInput == '' || this.data.aliasInput  == '') {
    //    wx.showToast({
   //         title: '存在未填信息',
   //         icon: 'none',
   //         duration: 1000
   //     }, 2000)
        //console.log('存在未填信息');
  //  }
  // else
    {
      //  this.data.id["id"],
        let mm = {
          speaker: getApp().globalData.userInfo["nickName"],
          //contentType: 'text',
          content:"我们已经成为好友！"
        }
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 1000
      }, 2000)
       connect.chatTable1(mm);
        wx.navigateBack({
            delta: 1
        })
    }
  }
})
var connect = require('../../../connect.js');
// pages/address/edit_address/edit_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id: null,   //此处id自动被设置为address页面中的id
      male: 'info',
      female: 'default',
      dormitory: 'info',
      classroom: 'default',
      other: 'default',
      sex:'先生',
      location:'宿舍',
      submit:{
        contacts:'',
        tel:'',
        address:'',
      }
  },

  //表单信息
  formSubmit(e) {
    var temp = e.detail.value;
    if (temp.contacts != '' && temp.tel != '' && temp.address != '') {
      this.setData({
        submit: {
          contacts: e.detail.value.contacts,
          sex: this.data.submit['sex'],
          tel: e.detail.value.tel,
          address: e.detail.value.address,
          location: this.data.submit['location'],
        }
      })
      // //console.log('提交的表单信息为：', this.data.submit)
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 1000
      }, 2000)
      connect.addAddress(this.data.submit);
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
      // //console.log('存在未填信息');
    }
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
      sex:'先生'
    });
    this.setData({female: 'default'});
  },

  changeToFemale: function () {
    this.setData({male: 'default'});
    this.setData({
      female: 'info',
      sex: '女士'
    });
  },

  changeToDormitory: function () {
    this.setData({
      dormitory: 'info',
      location: '宿舍' 
    });
    this.setData({classroom: 'default'});
    this.setData({other: 'default'});
  },

  changeToClassroom: function () {
    this.setData({dormitory: 'default'});
    this.setData({
      classroom: 'info',
      location: '教室' 
    });
    this.setData({other: 'default'});
  },

  changeToOther: function () {
    this.setData({dormitory: 'default'});
    this.setData({classroom: 'default'});
    this.setData({
      other: 'info',
      location: '其他' 
    });
  },
})
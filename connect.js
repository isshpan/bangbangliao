
var db = null;
var friendTable = null;
var orderTable = null;
var userTable = null;
var chatTable = null;
var addressTable = null;
var userOpenid = null;
var info = {
  name : null,
  avatarUrl:null,
  gender:null
};


//用于初始化云函数并返回Openid
function initAndGetOpenId() {
    console.log("happen");
    wx.cloud.init({
      env: 'bit-bbl1-ln1i2'
    });
    db = wx.cloud.database();
    orderTable = db.collection('orderTable');
    friendTable = db.collection('friendTable');
    chatTable = db.collection('chatDataTable');
    userTable = db.collection('userTable');
    addressTable = db.collection('addressTable');
    
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        userOpenid = res.result.openid;
        wx.setStorage({
          key: 'openid',
          data: res.result.openid
        });
      },
    });
}

function getOpenid(){
  return userOpenid;
}

function examHasUserAndReturn(openid){
  return userTable.where({wxNumber:openid}).get();
}

function examHasUserAndReturn2(openid,data){
  return examHasUserAndReturn(openid).then(res=>{return {personData:res,data:data}});
}

function initUserData(){
  var id = getOpenid();
  var app = getApp();
  console.log(app.globalData.userInfo);
  var userInfo = app.globalData.userInfo;
  if(userInfo!=null){
    info.name = userInfo.nickName;
    info.gender = userInfo.gender;
    info.avatarUrl = userInfo.avatarUrl;
  }
  examHasUserAndReturn(id).then(res=>{
    if(res.data.length==0&&userInfo!=null){    
      insertUserData(id,userInfo);
    }else if(res.data.length==0&&userInfo==null){
      insertUserData(id,{gender:0,name:'帮帮聊用户',avatar:'/image/friend.png'});
    }else{
      if (res.data[0].name == null ||res.data[0].name=='帮帮聊用户'||res.data[0].name!=userInfo.nickName||res.data[0].avatar!=userInfo.avatarUrl){
        if(userInfo!=null)
          changeUserData(id,userInfo);
      }
    }
  });
}

function insertUserData(id,userInfo){
  userTable.add({
    data: {
      wxNumber: id,
      gender: userInfo.gender,
      name: userInfo.nickName,
      avatar: userInfo.avatarUrl
    },
    success: function (res) {
      console.log('插入成功', res);
    },
    fail: function (res) {
      console.log('插入失败', res);
    }
  });
}

function changeUserData(id,userInfo){
  userTable.where({wxNumber:id}).update({
    data: {
      wxNumber: id,
      gender: userInfo.gender,
      name: userInfo.nickName,
      avatar: userInfo.avatarUrl
    },
    success: function (res) {
      console.log('插入成功', res);
    },
    fail: function (res) {
      console.log('插入失败', res);
    }
  });
}

function getOrderData(free,tag = 0,openid){
  if(free){
    return orderTable.where({status:0,lable:tag}).get();
  }
  else{
    return orderTable.where({wxNumber:openid}).get();
  }
}

function getAllOrderData() {
  return orderTable.get();
}

function changeOrderPage(that,tag)
{
  var num  = null;
  if(tag=='外卖')
    num = 0;
  else num = 1;
  return getOrderData(true, num, null).then
  (res => {
    console.log(res.data);
    var arr = that.data.deliveryInfo;
    var promises = [];
    for (var i = 0; i < res.data.length; i++) 
    {
      var p = examHasUserAndReturn2(res.data[i].wxNumber,res.data[i]).then(res => 
        {
          var timeStr = formatTime(res.data.time);
          var t = res.data.text;
          arr.push({
            'profilePhoto': res.personData.data[0].avatar,
            'name': res.personData.data[0].name,
            'time': timeStr,
            'tag': tag,
            'state': '未领取',
            'description': t
          });
        });
      promises.push(p);
    }
      Promise.all(promises).then(
        res => {
        that.setData({
          deliveryInfo: arr
        })}
      );
  });   
}

function changeRecommendPage(that,info) {
  return getAllOrderData().then
    (res => {
      that.data.infoList = [];
      var arr = that.data.infoList;
      var promises = [];
      for (var i = 0; i < res.data.length; i++) {
        var p = examHasUserAndReturn2(res.data[i].wxNumber, res.data[i]).then(res => {
          var timeStr = formatTime(res.data.time);
          var t = res.data.text;
          var tag = null;
          if(res.data.lable==0)
            tag = '宿舍';
          else
            tag = '教室';
          arr.push({
            'image': res.personData.data[0].avatar,
            'name': res.personData.data[0].name,
            'time': timeStr,
            'tag': tag,
            'state': '未领取',
            'description': t
          });
        });
        promises.push(p);
      }
      Promise.all(promises).then(
        res => {
          that.setData({
            infoList: arr
          });
        }
      );
    });
}

function searchRecommendPage(that,info) {
  return getAllOrderData().then
    (res => {
      that.data.infoList = [];
      var arr = that.data.infoList;
      var promises = [];
      for (var i = 0; i < res.data.length; i++) {
        console.log(res.data.length);
        var p = examHasUserAndReturn2(res.data[i].wxNumber, res.data[i]).then(res => {
          var timeStr = formatTime(res.data.time);
          var t = res.data.text;
          var n = res.personData.data[0].name;
          var tag = null;
          if (res.data.lable == 0)
            tag = '宿舍';
          else
            tag = '教室';
         
          if (t.match(info) != null || n.match(info)!=null || tag.match(info)!=null ){

            arr.push({
              'image': res.personData.data[0].avatar,
              'name': n,
              'time': timeStr,
              'tag': tag,
              'state': '未领取',
              'description': t
            });
          }
        });
        promises.push(p);
      }
      Promise.all(promises).then(
        res => {
          that.setData({
            infoList: arr
          });
        }
      );
    });
}

//用于修改时间
function formatTime(date){
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  console.log(date,year,month,day,hour,minute);
  var now = new Date();
  if (now.getFullYear() == year && now.getMonth() == month - 1 && now.getDate()==day){
    var ans = now.getHours() - hour;
    if(ans==0){
      return hour.toString()+':'+minute.toString();
    }
    return ans.toString()+'小时前';
  }
  else{
    return (year%100).toString()+'-'+month.toString()+'-'+day.toString();
  }
}

function addOrderData(address,order,text){
  var myOrder = null;
  if(order=='外卖')
    myOrder = 0;
  else
    myOrder = 1;
  console.log(address,order,text);
  var ad = address;
  var te = text;
  orderTable.add({
    data:{
      address: ad,
      lable: myOrder,
      text: te,
      status: 0,
      time: new Date(),
      wxNumber: getOpenid(),
    },
    success:function(res){
      console.log(res);
    }
  });
}

//用于更改外卖，快递，好友数
function changeCount(that) {
  wx.cloud.callFunction({
    name: 'getCounter',
    data:{
      openid:getOpenid()
    }
  }).then(res => {
    var orderNum = 0;
    var friendNum = 0;
    var expressNum = 0;
    console.log(res);

    for (var i = 0; i < res.result.data.length; i++) {
      if (res.result.data[i].lable == null) continue;
      if (res.result.data[i].lable == 0) {
        orderNum++;
      }
      else
        expressNum++;
    }

    friendNum = res.result.data.length - (orderNum + expressNum);
    that.setData({
      'count.delivery': orderNum,
      'count.express': expressNum,
      'count.friend': friendNum
    });
  });
}

function getAllAddress(){
   return addressTable.where({wxNumber:getOpenid()}).get();
}

function changeAddressPage(that){
  getAllAddress().then(res=>{
    console.log(res);
    var arr = that.data.addressInfoList;
    console.log(arr);
    var gender = null;
    var location = null;
    for(var i = 0;i<res.data.length;i++){
      if(res.data[i].sex==0){
        gender = '先生';
      }else{
        gender = '女士';
      }
      if (res.data[i].lable == 0) {
        location = '宿舍';
      } else {
        location = '教室';
      }
      arr.push({
        'name':info.name,
        'sex':gender,
        'phone':res.data[i].phoneNumber,
        'location':location,
        'address':res.data[i].address
      });
    }
    that.setData({
      'addressInfoList':arr
    });
  });
}

function changeAddressTab(that){
  var arr = [];
  getAllAddress().then(res=>{
    var location = null;
    for (var i = 0; i < res.data.length; i++) {
      if (res.data[i].lable == 0) {
        location = '宿舍';
      } else {
        location = '教室';
      }
      arr.push({
        'location':location,
        'address':res.data[i].address
      });
    }
    that.setData({
      'addressInfo': arr
    });
  });
}

function addAddress(data){
  var sex = 0;
  if(data.sex=='先生')
    sex = 0;
  else
    sex = 1;
  var location = 0;
  if(data.location=='宿舍')
    location = 0;
  else
    location = 1;
  return addressTable.add({
    data:{
      'wxNumber': getOpenid(),
      'sex': sex,
      'phoneNumber': data.tel,
      'lable': location,
      'address': data.address
    }
  });
}

function changeAddress(data){
  var sex = 0;
  if (data.sex == '先生')
    sex = 0;
  else
    sex = 1;
  var location = 0;
  if (data.location == '宿舍')
    location = 0;
  else
    location = 1;
  return addressTable.where({wxNumber:getOpenid()}).update({
    data: {
      'wxNumber': getOpenid(),
      'sex': sex,
      'phoneNumber': data.tel,
      'lable': location,
      'address': data.address
    }});
}

module.exports = {
  initAndGetOpenId: initAndGetOpenId,
  changeCount:changeCount,
  examHasUserAndReturn:examHasUserAndReturn,
  initUserData: initUserData,
  getOrderData:getOrderData,
  getOpenid:getOpenid,
  changePage:changeOrderPage,
  addOrderData:addOrderData,
  changeAddressPage: changeAddressPage,
  addAddress: addAddress,
  changeAddress:changeAddress,
  changeAddressTab: changeAddressTab,
  changeRecommendPage: changeRecommendPage,
  searchRecommendPage: searchRecommendPage
}



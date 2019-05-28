
// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env: 'bit-bbl1-ln1i2'
});

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const db = cloud.database();
  var friend =  db.collection('friendTable');
  var order = db.collection('orderTable');
  const tasks = [];

  var p1 = order.where({ wxNumber: event.openid }).get();
  var p2 = friend.where({ wxNumber: event.openid }).get();
  tasks.push(p1);
  tasks.push(p2);

  return (await Promise.all(tasks)).reduce((acc, cur) => ({
    data: acc.data.concat(cur.data),
    errMsg: acc.errMsg,
  }));



    
  }
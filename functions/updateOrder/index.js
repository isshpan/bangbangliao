// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env: 'bit-bbl1-ln1i2'
});
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('orderTable').doc(event.id).update({
      // data 传入需要局部更新的数据
      data: {
        status:1,
        receiver:event.receiver
      }
    })
  } catch (e) {
    console.error(e)
  }
}
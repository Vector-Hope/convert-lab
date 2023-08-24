// const util = require('../../../../utils/util.js')
// const fileWxs = require('./index.wxs')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    num1: 10,
    num2: 20,
    wxsFuncRes: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const { num1, num2 } = this.data
    // const wxsFuncRes = fileWxs.operator(num1, num2);
    // this.setData({
    //   wxsFuncRes,
    // })
  },
})

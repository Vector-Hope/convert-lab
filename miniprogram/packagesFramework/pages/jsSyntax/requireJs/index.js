// packagesFramework/pages/jsSyntax/requireJs/index.js
const outer = require('../outerPath');
const same1 = require('./samePath');
const same2 = require('/samePath');
const same3 = require('samePath');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    samePath1: same1.print(),
    samePath2: same2.print(),
    samePath3: same3.print(),
    outerPath: outer.print(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});

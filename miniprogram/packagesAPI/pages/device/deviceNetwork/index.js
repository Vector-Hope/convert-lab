// packagesAPI/pages/device/deviceNetwork/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'onNetworkWeakChange',
        func: null,
      },
      {
        id: 'onNetworkStatusChange',
        func: (data = {}) => {
          return new Promise((resolve) => {
            wx.onNetworkStatusChange((res) => {
              console.log('test API: onNetworkStatusChange');
              console.log(res);
              that.setData({
                networkType: res.networkType,
              });
              resolve({ callback: res });
            });
          });
        },
        isDone: true,
      },
      {
        id: 'offNetworkWeakChange',
        func: null,
      },
      {
        id: 'offNetworkStatusChange',
        func: (data = {}) => {
          wx.offNetworkStatusChange();
          return {};
        },
        isDone: true,
      },
      {
        id: 'getNetworkType',
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.getNetworkType({
              success: (res) => {
                callback['success'] = res;
                that.setData({
                  networkType: res.networkType,
                });
              },
              fail: (res) => {
                callback['fail'] = res;
                that.setData({
                  networkType: '获得网络失败',
                });
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({ callback });
              },
            });
          });
        },
        isDone: true,
      },
      {
        id: 'getLocalIPAddress',
        func: null,
      },
    ],
    networkType: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
  },

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

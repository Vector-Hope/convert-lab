// packagesAPI/pages/device/deviceNetwork/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      onNetworkWeakChange: {
        func: null,
      },
      onNetworkStatusChange: {
        func: (data = {}, id) => {
            wx.onNetworkStatusChange((res) => {
              that.setData({
                networkType: res.networkType,
              });
              that.setCallback(id, res);
            });
        },
        isDone: true,
      },
      offNetworkWeakChange: {
        func: null,
      },
      offNetworkStatusChange: {
        func: (data = {}, id) => {
          wx.offNetworkStatusChange();
        },
        isDone: true,
      },
      getNetworkType: {
        func: (data = {}, id) => {
          let callback = {};
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
                that.setCallback(id, {...callback, complete: res});
              },
            });
        },
        isDone: true,
      },
      getLocalIPAddress: {
        func: null,
      },
  },
    networkType: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
    const {list} = this.data;
    const listKey = Object.keys(list);
    listKey.forEach((key) => {
      list[key].callbackRes = {};
    })
    this.setData({
      list
    })
  },
  setCallback(id, callback) {
    const {list} = that.data;
    console.log(callback);
    list[id].callbackRes = callback;
    that.setData({
      list
    })
  },
});

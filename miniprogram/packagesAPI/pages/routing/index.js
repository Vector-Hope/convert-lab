// packagesAPI/pages/routing/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      switchTab: {
        inputData: {
          url: '../../../pages/API/index',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.switchTab({
            url: data.url,
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      reLaunch: {
        inputData: {
          url: '../../../pages/API/index',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.reLaunch({
            url: data.url,
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      redirectTo: {
        inputData: {
          url: '../../../pages/API/index',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.redirectTo({
            url: data.url,
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      navigateTo: {
        func: (data = {}, id) => {
          let callback = {};
          wx.navigateTo({
            url: './routingPage/index',
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EventChannel: {
        func: null,
      },
    },
  },

  onLoad(options) {
    that = this;
    const {
      list
    } = this.data;
    const listKey = Object.keys(list);
    listKey.forEach((key) => {
      list[key].callbackRes = {};
    })
    this.setData({
      list
    })
  },
  setCallback(id, callback) {
    const {
      list
    } = that.data;
    console.log(callback);
    list[id].callbackRes = callback;
    that.setData({
      list
    })
  },
});
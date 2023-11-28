// packagesAPI/pages/basics/system/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      openSystemBluetoothSetting: {
        func: null,
      },
      openAppAuthorizeSetting: {
        func: (data = {}, id) => {
          let callback = {};
          wx.openAppAuthorizeSetting({
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
      getWindowInfo: {
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getWindowInfo');
          const res = Taro.getWindowInfo();
          TestConsole.consoleSuccess.call(this, res, apiIndex);
        },
      },
      getSystemSetting: {
        func: (data = {}, id) => {
          const res = wx.getSystemSetting();
          that.setCallback(id, res);
        },
        isDone: true,
      },
      getSystemInfoSync: {
        func: (data = {}, id) => {
          const res = wx.getSystemInfoSync();
          that.setCallback(id, res);
        },
        isDone: true,
      },
      getSystemInfoAsync: {
        func: (data = {}, id) => {
          let callback ={};
          wx.getSystemInfoAsync({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          })
        },
      },
      getSystemInfo: {
        func: (data = {}, id) => {
          let callback = {};
          wx.getSystemInfo({
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
      getDeviceInfo: {
        func: (data = {}, id) => {
          const res = wx.getDeviceInfo();
          that.setCallback(id, res);
        },
        isDone: true,
      },
      getAppBaseInfo: {
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getAppBaseInfo');
          let res = Taro.getAppBaseInfo();
          TestConsole.consoleSuccess.call(this, res, apiIndex);
        },
      },
      getAppAuthorizeSetting: {
        func: (data = {}, id) => {
          const res = wx.getAppAuthorizeSetting();
          that.setCallback(id, res);
        },
        isDone: true,
      },
  },
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
  }
});

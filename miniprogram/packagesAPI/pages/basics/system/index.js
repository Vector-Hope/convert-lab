// packagesAPI/pages/basics/system/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'openSystemBluetoothSetting',
        func: null,
      },
      {
        id: 'openAppAuthorizeSetting',
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.openAppAuthorizeSetting({
              success: (res) => {
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
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
        id: 'getWindowInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getWindowInfo');
          const res = Taro.getWindowInfo();
          TestConsole.consoleSuccess.call(this, res, apiIndex);
        },
      },
      {
        id: 'getSystemSetting',
        func: (data = {}) => {
          const res = wx.getSystemSetting();
          return {
            callback: res,
          }
        },
        isDone: true
      },
      {
        id: 'getSystemInfoSync',
        func: (data = {}) => {
          const res = wx.getSystemInfoSync();
          return {
            callback: res,
          }
        },
        isDone: true
      },
      {
        id: 'getSystemInfoAsync',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getSystemInfoAsync');
          Taro.getSystemInfoAsync({
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex);
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex);
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex);
            },
          }).then((res) => {
            TestConsole.consoleReturn.call(this, res, apiIndex);
          });
        },
      },
      {
        id: 'getSystemInfo',
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.getSystemInfo({
              success: (res) => {
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({callback});
              },
            })
          })
        },
        isDone: true
      },
      {
        id: 'getDeviceInfo',
        func: (data = {}) => {
          const res = wx.getDeviceInfo();
          return {
            callback: res,
          }
        },
        isDone: true
      },
      {
        id: 'getAppBaseInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getAppBaseInfo');
          let res = Taro.getAppBaseInfo();
          TestConsole.consoleSuccess.call(this, res, apiIndex);
        },
      },
      {
        id: 'getAppAuthorizeSetting',
        func: (data = {}) => {
          const res = wx.getAppAuthorizeSetting();
          return {
            callback: res,
          }
        },
        isDone: true
      },
    ],
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

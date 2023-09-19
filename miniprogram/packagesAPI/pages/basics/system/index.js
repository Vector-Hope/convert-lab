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
            const callback = {}
            wx.openAppAuthorizeSetting({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'getWindowInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getWindowInfo')
          const res = Taro.getWindowInfo()
          TestConsole.consoleSuccess.call(this, res, apiIndex)
        },
      },
      {
        id: 'getSystemSetting',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getSystemSetting')
          const res = Taro.getSystemSetting()
          TestConsole.consoleSuccess.call(this, res, apiIndex)
        },
      },
      {
        id: 'getSystemInfoSync',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getSystemInfoSync')
          try {
            const res = Taro.getSystemInfoSync()
            TestConsole.consoleSuccess.call(this, res, apiIndex)
          } catch (err) {
            TestConsole.consoleFail.call(this, err, apiIndex)
          }
        },
      },
      {
        id: 'getSystemInfoAsync',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getSystemInfoAsync')
          Taro.getSystemInfoAsync({
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
          }).then((res) => {
            TestConsole.consoleReturn.call(this, res, apiIndex)
          })
        },
      },
      {
        id: 'getSystemInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getSystemInfo')
          Taro.getSystemInfo({
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
          }).then((res) => {
            TestConsole.consoleReturn.call(this, res, apiIndex)
          })
        },
      },
      {
        id: 'getDeviceInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getDeviceInfo')
          let res = Taro.getDeviceInfo()
          TestConsole.consoleSuccess.call(this, res, apiIndex)
        },
      },
      {
        id: 'getAppBaseInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getAppBaseInfo')
          let res = Taro.getAppBaseInfo()
          TestConsole.consoleSuccess.call(this, res, apiIndex)
        },
      },
      {
        id: 'getAppAuthorizeSetting',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getAppAuthorizeSetting')
          let res = Taro.getAppAuthorizeSetting()
          TestConsole.consoleSuccess.call(this, res, apiIndex)
        },
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
})

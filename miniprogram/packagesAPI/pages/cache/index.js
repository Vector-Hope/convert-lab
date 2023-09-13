// packagesAPI/pages/cache/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'setStorageSync',
        func: (apiIndex) => {
          Taro.setStorageSync('setStorageSyncKey', 'setStorageSyncValue')
        },
      },
      {
        id: 'setStorage',
        func: (apiIndex) => {
          TestConsole.consoleTest('setStorage')
          Taro.setStorage({
            data: 'setStorageValue',
            key: 'setStorageKey',
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
        id: 'revokeBufferURL_暂不支持',
        func: null,
      },
      {
        id: 'removeStorageSync',
        func: (apiIndex) => {
          TestConsole.consoleTest('removeStorageSync')
          const res = Taro.removeStorageSync('setStorageSyncKey')
          TestConsole.consoleSuccess.call(this, res, apiIndex)
        },
      },
      {
        id: 'removeStorage',
        func: (apiIndex) => {
          TestConsole.consoleTest('removeStorage')
          Taro.removeStorage({
            key: 'setStorageKey',
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
        id: 'getStorageSync',
        func: (apiIndex) => {
          TestConsole.consoleTest('getStorageSync')
          try {
            var value = Taro.getStorageSync('setStorageSyncKey')
            if (value) {
              TestConsole.consoleSuccess.call(this, value, apiIndex)
            }
          } catch (err) {
            TestConsole.consoleFail.call(this, err, apiIndex)
          }
        },
      },
      {
        id: 'getStorageInfoSync',
        func: (apiIndex) => {
          TestConsole.consoleTest('getStorageInfoSync')
          try {
            const res = Taro.getStorageInfoSync()
            TestConsole.consoleSuccess.call(this, res, apiIndex)
          } catch (err) {
            TestConsole.consoleFail.call(this, err, apiIndex)
          }
        },
      },
      {
        id: 'getStorageInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('getStorageInfo')
          Taro.getStorageInfo({
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
        id: 'getStorage',
        func: (apiIndex) => {
          TestConsole.consoleTest('getStorage')
          Taro.getStorage({
            key: 'setStorageKey',
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
        id: 'createBufferURL_暂不支持',
        func: null,
      },
      {
        id: 'clearStorageSync',
        func: (apiIndex) => {
          TestConsole.consoleTest('clearStorageSync')
          try {
            const res = Taro.clearStorageSync()
            TestConsole.consoleSuccess.call(this, res, apiIndex)
          } catch (err) {
            TestConsole.consoleFail.call(this, err, apiIndex)
          }
        },
      },
      {
        id: 'clearStorage',
        func: (apiIndex) => {
          TestConsole.consoleTest('clearStorage')
          Taro.clearStorage({
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
        id: 'PeriodicUpdate_暂不支持',
        func: null,
      },
      {
        id: 'setBackgroundFetchToken',
        inputData: {
          token: '',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('setBackgroundFetchToken')
          Taro.setBackgroundFetchToken({
            ...data,
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
          })
        },
      },
      {
        id: 'getBackgroundFetchData',
        inputData: {
          fetchType: '',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('getBackgroundFetchData')
          Taro.getBackgroundFetchData({
            ...data,
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
          })
        },
      },
      {
        id: 'CacheManager_暂不支持',
        func: null,
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

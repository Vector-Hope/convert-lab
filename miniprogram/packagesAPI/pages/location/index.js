// packagesAPI/pages/location/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'onLocationChange',
        func: (apiIndex) => {
          TestConsole.consoleTest('onLocationChange')
          Taro.onLocationChange((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onLocationChange', apiIndex)
          })
        },
      },
      {
        id: 'startLocationUpdate',
        func: (apiIndex) => {
          TestConsole.consoleTest('startLocationUpdate')
          Taro.startLocationUpdate({
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
        id: 'stopLocationUpdate',
        func: (apiIndex) => {
          TestConsole.consoleTest('stopLocationUpdate')
          Taro.stopLocationUpdate({
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
        id: 'startLocationUpdateBackground',
        func: (apiIndex) => {
          TestConsole.consoleTest('startLocationUpdateBackground')
          Taro.startLocationUpdateBackground({
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
        id: 'offLocationChange',
        func: (apiIndex) => {
          TestConsole.consoleTest('offLocationChange')
          Taro.offLocationChange((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offLocationChange', apiIndex)
          })
        },
      },
      {
        id: 'onLocationChangeError',
        func: (apiIndex) => {
          TestConsole.consoleTest('onLocationChangeError')
          Taro.onLocationChangeError((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onLocationChangeError', apiIndex)
          })
        },
      },
      {
        id: 'offLocationChangeError',
        func: (apiIndex) => {
          TestConsole.consoleTest('offLocationChangeError')
          Taro.offLocationChangeError((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onLocationChangeError', apiIndex)
          })
        },
      },
      {
        id: 'getLocation',
        inputData: {
          altitude: 'false',
          highAccuracyExpireTime: 8000,
          isHighAccuracy: true,
          type: 'wgs84',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.getLocation({
              ...data,
              success: (res) => {
                callback['success'] = res;
                const location = that.formatLocation(res.longitude, res.latitude);
                that.setData({
                  location,
                })
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
        id: 'chooseLocation',
        inputData: {
          latitude: 114.34,
          longitude: 30.50
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.chooseLocation({
              ...data,
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
        id: 'getFuzzyLocation',
        inputData: {
          type: 'gcj02',
        },
        func: (apiIndex, data) => {
          try {
            TestConsole.consoleTest('getFuzzyLocation')
            Taro.getFuzzyLocation({
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
            }).then((res) => {
              TestConsole.consoleResult.call(this, res, apiIndex)
            })
          } catch (err) {
            TestConsole.consoleDebug('getFuzzyLocation', err)
          }
        },
      },
      {
        id: 'openLocation',
        func: async (apiIndex) => {
          try {
            TestConsole.consoleTest('openLocation')
            const loc = await Taro.getFuzzyLocation({ type: 'gcj02' })
            Taro.openLocation({
              longitude: loc.longitude,
              latitude: loc.latitude,
              name: '未来科技城',
              address: '中国湖北省武汉市高新大道999号未来科技城',
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
              TestConsole.consoleResult.call(this, res, apiIndex)
            })
          } catch (err) {
            TestConsole.consoleDebug('openLocation', err)
          }
        },
      },
    ],
    location: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
  },

  formatLocation(longitude, latitude) {
    if (typeof longitude === 'string' && typeof latitude === 'string') {
      longitude = parseFloat(longitude);
      latitude = parseFloat(latitude);
    }
    longitude = longitude.toFixed(2).toString().split('.');
    latitude = latitude.toFixed(2).toString().split('.');
    
    return `E: ${longitude[0]}°${longitude[1]}' N: ${latitude[0]}°${latitude[1]}'`;
  }
});

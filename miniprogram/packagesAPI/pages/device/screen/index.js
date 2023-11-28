// packagesAPI/pages/device/screen/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      setScreenBrightness: {
        inputData: {
          value: 0.5,
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.setScreenBrightness');
          TestConsole.consoleNormal('Taro.setScreenBrightness value:', data.value);
          Taro.setScreenBrightness({
            ...data,
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex);
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex);
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex);
            },
          })
            .then((res) => {
              TestConsole.consoleReturn.call(this, res, apiIndex);
            })
            .catch((err) => {
              TestConsole.consoleReturn.call(this, err, apiIndex);
            });
        },
      },
      setKeepScreenOn: {
        inputData: {
          keepScreenOn: true,
        },
        func: (data = {}, id) => {
          let callback = {};
          const { keepScreenOn } = data;
          wx.setKeepScreenOn({
            keepScreenOn,
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
      onUserCaptureScreen: {
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onUserCaptureScreen');
          Taro.onUserCaptureScreen(this.userCaptureScreen);
        },
      },
      offUserCaptureScreen: {
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offUserCaptureScreen');
          Taro.offUserCaptureScreen(this.userCaptureScreen);
        },
      },
      getScreenBrightness: {
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getScreenBrightness');
          Taro.getScreenBrightness({
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex);
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex);
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex);
            },
          })
            .then((res) => {
              TestConsole.consoleReturn.call(this, res, apiIndex);
            })
            .catch((err) => {
              TestConsole.consoleReturn.call(this, err, apiIndex);
            });
        },
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
  },
});

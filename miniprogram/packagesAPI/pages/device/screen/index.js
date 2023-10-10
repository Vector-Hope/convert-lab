// packagesAPI/pages/device/screen/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'setScreenBrightness',
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
      {
        id: 'setKeepScreenOn',
        inputData: {
          keepScreenOn: true,
        },
        func: (data = {}) => {
          const { keepScreenOn } = data;
          return new Promise((resolve) => {
            const callback = {};
            wx.setKeepScreenOn({
              keepScreenOn,
              success: (res) => {
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({
                  callback,
                  isShowToast: true,
                });
              },
            });
          });
        },
        isDone: true,
      },
      {
        id: 'onUserCaptureScreen',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onUserCaptureScreen');
          Taro.onUserCaptureScreen(this.userCaptureScreen);
        },
      },
      {
        id: 'offUserCaptureScreen',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offUserCaptureScreen');
          Taro.offUserCaptureScreen(this.userCaptureScreen);
        },
      },
      {
        id: 'getScreenBrightness',
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

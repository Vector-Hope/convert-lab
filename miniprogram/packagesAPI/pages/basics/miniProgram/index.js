// packagesAPI/pages/basics/miniProgram/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'onUnhandledRejection',
        func: (data = {}) => {
          new Promise((resolve, reject) => {
            reject({ message: 'error' })
          })
        },
        isDone: true,
      },
      {
        id: 'onThemeChange',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onThemeChange')
          Taro.onThemeChange((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onThemeChange', apiIndex)
          })
        },
      },
      {
        id: 'onPageNotFound',
        inputData: {
          url: 'pages/api/index/11',
        },
        func: (data = {}) => {
          wx.onPageNotFound((result) => {
            wx.showToast({
              title: 'page not found',
            })
          })
          wx.navigateTo({
            url: '../../pages/api/index/11',
          })
        },
      },
      {
        id: 'onError',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onError')
          Taro.onError((err) => {
            TestConsole.consoleOnCallback.call(this, err, 'onError', apiIndex)
          })
        },
      },
      {
        id: 'onAudioInterruptionEnd',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onAudioInterruptionEnd')
          Taro.onAudioInterruptionEnd((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onAudioInterruptionEnd', apiIndex)
          })
        },
      },
      {
        id: 'onAudioInterruptionBegin',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onAudioInterruptionBegin')
          Taro.onAudioInterruptionBegin((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onAudioInterruptionBegin', apiIndex)
          })
        },
      },
      {
        id: 'onAppShow',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onAppShow')
          Taro.onAppShow((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onAppShow', apiIndex)
          })
        },
      },
      {
        id: 'onAppHide',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onAppHide')
          Taro.onAppHide((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onAppHide', apiIndex)
          })
        },
      },
      {
        id: 'offThemeChange',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offThemeChange')
          Taro.offThemeChange((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offThemeChange', apiIndex)
          })
        },
      },
      {
        id: 'offPageNotFound',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offPageNotFound')
          Taro.offPageNotFound((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offPageNotFound', apiIndex)
          })
          Taro.navigateTo({
            url: 'pages/api/index/11',
          })
        },
      },
      {
        id: 'offError',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offError')
          Taro.offError((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offError', apiIndex)
          })
        },
      },
      {
        id: 'offAudioInterruptionEnd',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offAudioInterruptionEnd')
          Taro.offAudioInterruptionEnd((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offAudioInterruptionEnd', apiIndex)
          })
        },
      },
      {
        id: 'offAudioInterruptionBegin',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offAudioInterruptionBegin')
          Taro.offAudioInterruptionBegin((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offAudioInterruptionBegin', apiIndex)
          })
        },
      },
      {
        id: 'offAppShow',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offAppShow')
          Taro.offAppShow((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offAppShow', apiIndex)
          })
        },
      },
      {
        id: 'offAppHide',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.offAppHide')
          Taro.offAppHide((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offAppHide', apiIndex)
          })
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

// packagesAPI/pages/forward/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'updateShareMenu',
        func: null,
      },
      {
        id: 'showShareMenu',
        inputData: {
          withShareTicket: true,
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.showShareMenu')
          Taro.showShareMenu(data).then(() => {
            TestConsole.consoleNormal('showShareMenu')
          })
          Taro.showShareMenu({
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
        id: 'showShareImageMenu',
        func: null,
      },
      {
        id: 'shareVideoMessage',
        func: null,
      },
      {
        id: 'shareFileMessage',
        func: null,
      },
      {
        id: 'onCopyUrl',
        func: null,
      },
      {
        id: 'offCopyUrl',
        func: null,
      },
      {
        id: 'hideShareMenu',
        inputData: {
          menus: ['shareAppMessage', 'shareTimeline'],
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.hideShareMenu')
          Taro.hideShareMenu(data).then(() => {
            TestConsole.consoleNormal('hideShareMenu')
          })
          Taro.hideShareMenu({
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
        id: 'getShareInfo',
        inputData: {
          shareTicket: '',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.getShareInfo')
          Taro.getShareInfo({
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
        id: 'authPrivateMessage',
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
});

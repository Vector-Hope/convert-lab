// packagesAPI/pages/basics/debug/index.js
let that = null
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'setEnableDebug',
        inputData: {
          enableDebug: true,
        },
        func: (data = {}) => {
          const callback = {}
          return new Promise((resolve) => {
            wx.setEnableDebug({
              ...data,
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
        id: 'getRealtimeLogManager',
        func: (data = {}) => {
          const realtimeLogManager = wx.getRealtimeLogManager()
          that.setData({
            realtimeLogManager,
          })
          console.log(realtimeLogManager)
          return {
            callback: realtimeLogManager,
          }
        },
        isDone: true,
      },
      {
        id: 'getLogManager',
        inputData: {
          level: 0,
        },
        func: (data = {}) => {
          const logManager = wx.getLogManager({
            ...data,
          })
          that.setData({
            logManager,
          })
          console.log(logManager)
          return {
            callback: logManager,
          }
        },
        isDone: true,
      },
      {
        id: 'LogManager.debug',
        func: (data = {}) => {
          const { logManager } = that.data
          logManager.debug({ debugMsg: 'debug msg' }, 'debug log')
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'LogManager.info',
        func: (data = {}) => {
          const { logManager } = that.data
          logManager.info({ infoMsg: 'info msg' }, 'info log')
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'LogManager.log',
        func: (data = {}) => {
          const { logManager } = that.data
          logManager.log({ logMsg: 'log msg' }, 'log')
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'LogManager.warn',
        func: (data = {}) => {
          const { logManager } = that.data
          logManager.warn({ warnMsg: 'warn msg' }, 'warn log')
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'console',
        func: null,
      },
      {
        id: 'RealtimeTagLogManager',
        func: null,
      },
    ],
    logManager: null,
    realtimeLogManager: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this
  },

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

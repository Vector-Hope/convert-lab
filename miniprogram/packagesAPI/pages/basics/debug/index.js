// packagesAPI/pages/basics/debug/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      setEnableDebug: {
        inputData: {
          enableDebug: true,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setEnableDebug({
            ...data,
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
      getRealtimeLogManager: {
        func: (data = {}, id) => {
          const realtimeLogManager = wx.getRealtimeLogManager();
          that.setData({
            realtimeLogManager,
          });
          that.setCallback(id, realtimeLogManager);
        },
        isDone: true,
      },
      getLogManager: {
        inputData: {
          level: 0,
        },
        func: (data = {}, id) => {
          const logManager = wx.getLogManager({
            ...data,
          });
          that.setData({
            logManager,
          });
          that.setCallback(id, logManager);
        },
        isDone: true,
      },
      LogManager_debug: {
        func: (data = {}, id) => {
          const { logManager } = that.data;
          logManager.debug({ debugMsg: 'debug msg' }, 'debug log');
        },
        isDone: true,
      },
      LogManager_info: {
        func: (data = {}, id) => {
          const { logManager } = that.data;
          logManager.info({ infoMsg: 'info msg' }, 'info log');
        },
        isDone: true,
      },
      LogManager_log: {
        func: (data = {}, id) => {
          const { logManager } = that.data;
          logManager.log({ logMsg: 'log msg' }, 'log');
        },
        isDone: true,
      },
      LogManager_warn: {
        func: (data = {}, id) => {
          const { logManager } = that.data;
          logManager.warn({ warnMsg: 'warn msg' }, 'warn log');
        },
        isDone: true,
      },
      console: {
        func: null,
      },
      RealtimeTagLogManager: {
        func: null,
      },
  },
    logManager: null,
    realtimeLogManager: null,
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

// packagesAPI/pages/basics/update/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      updateWeChatApp: {
        func: null,
      },
      getUpdateManager: {
        func: (data = {}, id) => {
          const updateManager = wx.getUpdateManager();
          that.setData({
            updateManager,
          });
          that.setCallback(id, updateManager);
        },
        isDone: true,
      },
      UpdateManager_applyUpdate: {
        func: (data = {}, id) => {
          const { updateManager } = that.data;
          updateManager.applyUpdate();
          that.setData({
            updateManager,
          });
          that.setCallback(id, updateManager);
        },
        isDone: true,
      },
      UpdateManager_onCheckForUpdate: {
        func: (data = {}, id) => {
          const { updateManager } = that.data;
          updateManager.onCheckForUpdate((res) => {
            that.setCallback(id, res);
          });
          that.setData({
            updateManager,
          });
        },
        isDone: true,
      },
      UpdateManager_onUpdateReady: {
        func: (data = {}, id) => {
          const { updateManager } = that.data;
          updateManager.onUpdateReady((res) => {
            that.setCallback(id, res);
          });
          that.setData({
            updateManager,
          });
        },
        isDone: true,
      },
      UpdateManager_onUpdateFailed: {
        func: (data = {}, id) => {
          const { updateManager } = that.data;
          updateManager.onUpdateFailed((res) => {
            that.setCallback(id, res);
          });
          that.setData({
            updateManager,
          });
        },
        isDone: true,
      },
  },
    updateManager: null,
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
  }
});

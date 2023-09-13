// packagesAPI/pages/basics/update/index.js
let that = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'updateWeChatApp',
        func: null,
      },
      {
        id: 'getUpdateManager',
        func: (data = {}) => {
          const updateManager = wx.getUpdateManager();
          that.setData({
            updateManager,
          })
          console.log(updateManager)
          return updateManager;
        },
        isDone: true
      },
      {
        id: 'UpdateManager.applyUpdate',
        func: (data = {}) => {
          const {updateManager} = that.data;
          updateManager.applyUpdate();
          that.setData({
            updateManager
          })
          return updateManager;
        },
        isDone: true
      },
      {
        id: 'UpdateManager.onCheckForUpdate',
        func: (data = {}) => {
          const {updateManager} = that.data;
          return new Promise((resolve) => {
            updateManager.onCheckForUpdate((res) => {
              resolve(res);
            })
            that.setData({
              updateManager
            })
          })
        },
        isDone: true
      },
      {
        id: 'UpdateManager.onUpdateReady',
        func: (data = {}) => {
          const {updateManager} = that.data;
          return new Promise((resolve) => {
            updateManager.onUpdateReady((res) => {
              resolve(res);
            })
            that.setData({
              updateManager
            })
          })
        },
        isDone: true
      },
      {
        id: 'UpdateManager.onUpdateFailed',
        func: (data = {}) => {
          const {updateManager} = that.data;
          return new Promise((resolve) => {
            updateManager.onUpdateFailed((res) => {
              resolve(res);
            })
            that.setData({
              updateManager
            })
          })
        },
        isDone: true
      },
    ],
    updateManager: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
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

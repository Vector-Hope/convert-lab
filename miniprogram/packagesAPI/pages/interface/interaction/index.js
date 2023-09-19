// packagesAPI/pages/interface/interaction/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'showToast',
        inputData: {
          title: 'showToast',
          duration: 10000,
          icon: 'success',
          mask: false,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.showToast({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({
                  callback,
                  isShowToast: true,
                })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'hideToast',
        inputData: {
          noConflict: false,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.hideToast({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({
                  callback,
                  isShowToast: true,
                })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'showLoading',
        inputData: {
          title: '加载中',
          mask: false,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.showLoading({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({
                  callback,
                  isShowToast: true,
                })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'hideLoading',
        inputData: {
          noConflict: false,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.hideLoading({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({
                  callback,
                  isShowToast: true,
                })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'showModal',
        inputData: {
          title: '提示',
          content: '这是一个模态弹窗',
          showCancel: true,
          cancelColor: '#f00',
          cancelText: '取消',
          confirmColor: '#0f0',
          confirmText: '确认',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.showModal({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({
                  callback,
                  isShowToast: true,
                })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'showActionSheet',
        inputData: {
          alertText: '警示文案',
          itemList: ['ActionA', 'ActionB', 'ActionC'],
          itemColor: '#0f0',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.showActionSheet({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({
                  callback,
                  isShowToast: true,
                })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'enableAlertBeforeUnload',
        func: null,
      },
      {
        id: 'disableAlertBeforeUnload',
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

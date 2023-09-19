// packagesAPI/pages/interface/navigationBar/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'showNavigationBarLoading',
        func: null,
      },
      {
        id: 'setNavigationBarTitle',
        inputData: {
          title: '当前页面',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.setNavigationBarTitle({
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
        id: 'setNavigationBarColor',
        inputData: {
          frontColor: '#ffffff',
          backgroundColor: '#317af7',
          animation: {
            duration: 1000,
            timingFunc: 'easeIn',
          },
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.setNavigationBarColor({
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
        id: 'hideNavigationBarLoading',
        func: null,
      },
      {
        id: 'hideHomeButton',
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

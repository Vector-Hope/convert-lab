// packagesAPI/pages/interface/pullDownRefresh/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'startPullDownRefresh',
        func: (data = {}) => {
          console.log('start!!!!!!!!!!')
          return new Promise((resolve) => {
            const callback = {}
            wx.startPullDownRefresh({
              success: (res) => {
                console.log('success ', res)
                callback['success'] = res
              },
              fail: (res) => {
                console.log('fail ', res)
                callback['fail'] = res
              },
              complete: (res) => {
                console.log('complete ', res)
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'stopPullDownRefresh',
        func: (data = {}) => {
          console.log('stop!!!!!!!!!!')
          return new Promise((resolve) => {
            const callback = {}
            wx.stopPullDownRefresh({
              success: (res) => {
                console.log('success ', res)
                callback['success'] = res
              },
              fail: (res) => {
                console.log('fail ', res)
                callback['fail'] = res
              },
              complete: (res) => {
                console.log('complete ', res)
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
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

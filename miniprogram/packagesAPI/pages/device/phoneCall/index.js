// packagesAPI/pages/device/phoneCall/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'makePhoneCall',
        inputData: {
          phoneNumber: '13352354363',
        },
        func: (data = {}) => {
          const { phoneNumber } = data
          return new Promise((resolve) => {
            const callback = {}
            wx.makePhoneCall({
              phoneNumber,
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

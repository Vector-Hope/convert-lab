// packagesAPI/pages/device/keyboard/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'onKeyboardHeightChange',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onKeyboardHeightChange')
          Taro.onKeyboardHeightChange(this.onBoardHgiehtChange01)
          Taro.onKeyboardHeightChange(this.onBoardHgiehtChange02)
        },
      },
      {
        id: 'offKeyboardHeightChange',
        inputData: {
          closeAll: false,
          close01: true,
          close02: false,
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.offKeyboardHeightChange ')
          if (data.closeAll) {
            Taro.offKeyboardHeightChange()
          } else {
            if (data.close01) {
              Taro.offKeyboardHeightChange(this.onBoardHgiehtChange01)
            }
            if (data.close02) {
              Taro.offKeyboardHeightChange(this.onBoardHgiehtChange02)
            }
          }
        },
      },
      {
        id: 'hideKeyboard',
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.hideKeyboard({
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
        id: 'getSelectedTextRange',
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

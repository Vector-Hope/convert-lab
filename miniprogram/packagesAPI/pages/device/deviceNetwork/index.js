// packagesAPI/pages/device/deviceNetwork/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'onNetworkWeakChange',
        func: null,
      },
      {
        id: 'onNetworkStatusChange',
        func: (data = {}) => {
          TestConsole.consoleTest('onNetworkStatusChange')
          Taro.onNetworkStatusChange(this.onNetworkStatusChange01)
        },
      },
      {
        id: 'offNetworkWeakChange',
        func: null,
      },
      {
        id: 'offNetworkStatusChange',
        inputData: {
          closeAll: false,
          close01: true,
          close02: false,
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('offNetworkStatusChange')
          if (data.closeAll) {
            Taro.offNetworkStatusChange()
          } else {
            if (data.close01) {
              Taro.offNetworkStatusChange(this.onNetworkStatusChange01)
            }
            if (data.close02) {
              Taro.offNetworkStatusChange(this.onNetworkStatusChange02)
            }
          }
        },
      },
      {
        id: 'getNetworkType',
        func: (apiIndex) => {
          TestConsole.consoleTest('getNetworkType')
          Taro.getNetworkType({
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
              this.setState({
                networkType: res.networkType,
              })
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
              this.setState({
                networkType: '获取失败',
              })
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
          })
            .then((res) => {
              TestConsole.consoleReturn.call(this, res, apiIndex)
            })
            .catch((err) => {
              TestConsole.consoleReturn.call(this, err, apiIndex)
            })
        },
      },
      {
        id: 'getLocalIPAddress',
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

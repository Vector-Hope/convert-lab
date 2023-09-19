// packagesAPI/pages/basics/basics/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'env',
        func: (data = {}) => {
          const env = wx.env
          return {
            callback: env,
          }
        },
        isDone: true,
      },
      {
        id: 'canIUse',
        inputData: {
          apiName: 'openBluetoothAdapter',
        },
        func: (data = {}) => {
          const { apiName } = data
          const res = {}
          res[apiName] = wx.canIUse(apiName)
          return {
            callback: res,
          }
        },
        isDone: true,
      },
      {
        id: 'canIuseWebp',
        func: () => {},
      },
      {
        id: 'base64ToArrayBuffer',
        inputData: {
          base64: 'CxYh',
        },
        func: (data = {}) => {
          const { base64 } = data
          const arrayBuffer = wx.base64ToArrayBuffer(base64)
          console.log(arrayBuffer)
          return {
            callback: {
              base64,
              Int8Array: new Int8Array(arrayBuffer),
              Uint8Array: new Uint8Array(arrayBuffer),
              ArrayBufferByteLength: arrayBuffer.byteLength,
            },
          }
        },
        isDone: true,
      },
      {
        id: 'arrayBufferToBase64',
        func: (data = {}) => {
          const arrayBuffer = new Uint8Array([11, 22, 33])
          const res = wx.arrayBufferToBase64(arrayBuffer)
          return {
            callback: {
              arrayBuffer: arrayBuffer,
              base64: res,
            },
          }
        },
        isDone: true,
      },
      {
        id: 'perload',
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

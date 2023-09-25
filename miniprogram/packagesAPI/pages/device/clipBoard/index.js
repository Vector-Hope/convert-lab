// packagesAPI/pages/device/clipBoard/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'setClipboardData',
        inputData: {
          data: '我是复制的内容',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.setClipboardData({
              ...data,
              success: (res) => {
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({ callback });
              },
            })
          })
        },
        isDone: true
      },
      {
        id: 'getClipboardData',
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.getClipboardData({
              success: (res) => {
                that.setData({
                  pasted: res.data,
                })
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({ callback });
              },
            })
          })
        },
        isDone: true
      },
    ],
  pasted: '',
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
  },
})

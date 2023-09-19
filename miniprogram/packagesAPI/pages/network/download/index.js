// packagesAPI/pages/network/download/index.js
let that
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'downloadFile',
        inputData: {
          url: 'http://172.20.10.11:3000/static/test.rar',
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 60000,
        },
        func: (data = {}) => {
          const callback = {}
          return new Promise((resolve) => {
            const task = wx.downloadFile({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                that.setData({
                  task: null,
                })
                resolve({ callback })
              },
            })
            that.setData({
              task,
            })
          })
        },
        isDone: true,
      },
      {
        id: 'DownloadTask.abort',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            task.abort()
            return {
              callback: {},
            }
          } else {
            wx.showToast({
              title: '暂无下载任务',
            })
            return {
              callback: {},
              isShowToast: true,
            }
          }
        },
        isDone: true,
      },
      {
        id: 'DownloadTask.offHeadersReceived',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            task.offHeadersReceived()
            return {
              callback: {},
            }
          } else {
            wx.showToast({
              title: '暂无下载任务',
            })
            return {
              callback: {},
              isShowToast: true,
            }
          }
        },
        isDone: true,
      },
      {
        id: 'DownloadTask.offProgressUpdate',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            task.offProgressUpdate()
            return {
              callback: {},
            }
          } else {
            wx.showToast({
              title: '暂无下载任务',
            })
            return {
              callback: {},
              isShowToast: true,
            }
          }
        },
        isDone: true,
      },
      {
        id: 'DownloadTask.onHeadersReceived',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            return new Promise((resolve) => {
              task.onHeadersReceived((res) => {
                console.log('test API: DownloadTask.onHeadersReceived')
                console.log(res)
                resolve({
                  callback: res,
                })
              })
            })
          } else {
            wx.showToast({
              title: '暂无下载任务',
            })
            return {
              callback: {},
              isShowToast: true,
            }
          }
        },
        isDone: true,
      },
      {
        id: 'DownloadTask.onProgressUpdate',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            return new Promise((resolve) => {
              let timeoutIndex
              task.onProgressUpdate((res) => {
                if (!timeoutIndex) {
                  timeoutIndex = setTimeout(() => {
                    console.log('test API: DownloadTask.onProgressUpdate')
                    console.log(res)
                    clearTimeout(timeoutIndex)
                  }, 100)
                }
                resolve({
                  callback: res,
                })
              })
            })
          } else {
            wx.showToast({
              title: '暂无下载任务',
            })
            return {
              callback: {},
              isShowToast: true,
            }
          }
        },
        isDone: true,
      },
    ],
    task: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this
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

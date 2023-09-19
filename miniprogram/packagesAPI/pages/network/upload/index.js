// packagesAPI/pages/network/upload/index.js
let that
Page({
  /**
   * 页面的初始数据
   */
  data: {
    task: null,
    list: [
      {
        id: 'uploadFile',
        inputData: {
          url: 'http://172.20.10.11:3000/upload',
          headers: {
            'Content-Type': 'application/json',
          },
          name: 'file',
          timeout: 60000,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            wx.chooseMedia({
              count: 1,
              mediaType: ['image'],
              success(res) {
                console.log(res)
                const filePath = res.tempFiles[0].tempFilePath + '.jpg'
                const callback = {}
                const task = wx.uploadFile({
                  ...data,
                  filePath,
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
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'UploadTask.abort',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            task.abort()
            return {
              callback: {},
            }
          } else {
            wx.showToast({
              title: '暂无上传任务',
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
        id: 'UploadTask.offHeadersReceived',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            task.offHeadersReceived()
            return {
              callback: {},
            }
          } else {
            wx.showToast({
              title: '暂无上传任务',
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
        id: 'UploadTask.offProgressUpdate',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            task.offProgressUpdate()
            return {
              callback: {},
            }
          } else {
            wx.showToast({
              title: '暂无上传任务',
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
        id: 'UploadTask.onHeadersReceived',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            return new Promise((resolve) => {
              task.onHeadersReceived((res) => {
                resolve({
                  callback: res,
                })
              })
            })
          } else {
            wx.showToast({
              title: '暂无上传任务',
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
        id: 'UploadTask.onProgressUpdate',
        func: (data = {}) => {
          const { task } = that.data
          if (task) {
            console.log(task)
            task.onProgressUpdate((res) => {
              console.log('上传进度', res.progress)
              console.log('已经上传的数据长度', res.totalBytesSent)
              console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
            })
            return {}
          } else {
            wx.showToast({
              title: '暂无上传任务',
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

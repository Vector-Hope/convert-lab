// packagesAPI/pages/network/upload/index.js
const urls = [
  'http://www.baidu.com/img/bdlogo.png',
  'https://img1.baidu.com/it/u=698323844,3339950020&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1694278800&t=60a09ae53f4ed052e28032d918935164',
  'https://img1.baidu.com/it/u=698323844,3339950020&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1694278800&t=60a09ae53f4ed052e28032d918935164',
];
let that;
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
          url: 'http://26.26.26.1:3000/upload',
          headers: {
            'Content-Type': 'application/json',
          },
          name: 'file',
          timeout: 60000,
          downloadFilePath: urls[0],
        },
        func: (data = {}) => {
          const { url, headers, name, timeout, downloadFilePath } = data;
          return new Promise((resolve) => {
            wx.downloadFile({
              url: downloadFilePath,
              success: (res) => {
                const callback = {};
                const task = wx.uploadFile({
                  url,
                  headers,
                  name,
                  timeout,
                  filePath: res.tempFilePath,
                  success: (res) => {
                    callback['success'] = res;
                  },
                  fail: (res) => {
                    callback['fail'] = res;
                  },
                  complete: (res) => {
                    callback['complete'] = res;
                    that.setData({
                      task: null,
                    });
                    resolve({ callback });
                  },
                });
                that.setData({
                  task,
                });
              },
            });
          });
        },
        isDone: true,
      },
      {
        id: 'UploadTask.abort',
        func: (data = {}) => {
          const { task } = that.data;
          if (task) {
            task.abort();
            return {
              callback: {},
            };
          } else {
            wx.showToast({
              title: '暂无上传任务',
            });
            return {
              callback: {},
              isShowToast: true,
            };
          }
        },
        isDone: true,
      },
      {
        id: 'UploadTask.offHeadersReceived',
        func: (data = {}) => {
          const { task } = that.data;
          if (task) {
            task.offHeadersReceived();
            return {
              callback: {},
            };
          } else {
            wx.showToast({
              title: '暂无上传任务',
            });
            return {
              callback: {},
              isShowToast: true,
            };
          }
        },
        isDone: true,
      },
      {
        id: 'UploadTask.offProgressUpdate',
        func: (data = {}) => {
          const { task } = that.data;
          if (task) {
            task.offProgressUpdate();
            return {
              callback: {},
            };
          } else {
            wx.showToast({
              title: '暂无上传任务',
            });
            return {
              callback: {},
              isShowToast: true,
            };
          }
        },
        isDone: true,
      },
      {
        id: 'UploadTask.onHeadersReceived',
        func: (data = {}) => {
          const { task } = that.data;
          if (task) {
            return new Promise((resolve) => {
              task.onHeadersReceived((res) => {
                resolve({
                  callback: res,
                });
              });
            });
          } else {
            wx.showToast({
              title: '暂无上传任务',
            });
            return {
              callback: {},
              isShowToast: true,
            };
          }
        },
        isDone: true,
      },
      {
        id: 'UploadTask.onProgressUpdate',
        func: (data = {}) => {
          const { task } = that.data;
          if (task) {
            return new Promise((resolve) => {
              let timeoutIndex;
              task.onProgressUpdate((res) => {
                if (!timeoutIndex) {
                  timeoutIndex = setTimeout(() => {
                    console.log('test API: DownloadTask.onProgressUpdate');
                    console.log(res);
                    clearTimeout(timeoutIndex);
                  }, 100);
                }
                resolve({
                  callback: res,
                });
              });
            });
          } else {
            wx.showToast({
              title: '暂无下载任务',
            });
            return {
              callback: {},
              isShowToast: true,
            };
          }
        },
        isDone: true,
        isDone: true,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
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
});

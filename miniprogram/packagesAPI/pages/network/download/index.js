// packagesAPI/pages/network/download/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      downloadFile: {
        inputData: {
          url: 'http://172.20.10.11:3000/static/test.rar',
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 60000,
        },
        func: (data = {}, id) => {
          let callback = {};
          const task = wx.downloadFile({
            ...data,
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
          that.setData({
            task,
          });
        },
        isDone: true,
      },
      DownloadTask_abort: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.abort();
          } else {
            wx.showToast({
              title: '暂无下载任务',
            });
            return true;
          }
        },
        isDone: true,
      },
      DownloadTask_offHeadersReceived: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.offHeadersReceived();
          } else {
            wx.showToast({
              title: '暂无下载任务',
            });
            return true;
          }
        },
        isDone: true,
      },
      DownloadTask_offProgressUpdate: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.offProgressUpdate();
          } else {
            wx.showToast({
              title: '暂无下载任务',
            });
            return true;
          }
        },
        isDone: true,
      },
      DownloadTask_onHeadersReceived: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.onHeadersReceived((res) => {
              that.setCallback(id, res);
            });
          } else {
            wx.showToast({
              title: '暂无下载任务',
            });
            return true;
          }
        },
        isDone: true,
      },
      DownloadTask_onProgressUpdate: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.onProgressUpdate((res) => {
              that.setCallback(id, res);
            });
          } else {
            wx.showToast({
              title: '暂无下载任务',
            });
            return true;
          }
        },
        isDone: true,
      },
  },
    task: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
    const {list} = this.data;
    const listKey = Object.keys(list);
    listKey.forEach((key) => {
      list[key].callbackRes = {};
    })
    this.setData({
      list
    })
  },
  setCallback(id, callback) {
    const {list} = that.data;
    console.log(callback);
    list[id].callbackRes = callback;
    that.setData({
      list
    })
  },
});

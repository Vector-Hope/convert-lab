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
    list: {
      uploadFile: {
        inputData: {
          url: 'http://26.26.26.1:3000/upload',
          headers: {
            'Content-Type': 'application/json',
          },
          name: 'file',
          timeout: 60000,
          downloadFilePath: urls[0],
        },
        func: (data = {}, id) => {
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
                    that.setCallback(id, {...callback, complete: res});
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
      UploadTask_abort: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.abort();
          } else {
            wx.showToast({
              title: '暂无上传任务',
            });
            return true;
          }
        },
        isDone: true,
      },
      UploadTask_offHeadersReceived: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.offHeadersReceived();
          } else {
            wx.showToast({
              title: '暂无上传任务',
            });
            return true;
          }
        },
        isDone: true,
      },
      UploadTask_offProgressUpdate: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.offProgressUpdate();
          } else {
            wx.showToast({
              title: '暂无上传任务',
            });
            return true;
          }
        },
        isDone: true,
      },
      UploadTask_onHeadersReceived: {
        func: (data = {}, id) => {
          const { task } = that.data;
          if (task) {
            task.onHeadersReceived((res) => {
              that.setCallback(id, res);
            });
          } else {
            wx.showToast({
              title: '暂无上传任务',
            });
            return true;
          }
        },
        isDone: true,
      },
      UploadTask_onProgressUpdate: {
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
        isDone: true,
      },
  },
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

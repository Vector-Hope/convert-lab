// packagesAPI/pages/network/request/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    request: null,
    list: {
      request: {
        inputData: {
          url: 'http://26.26.26.1:3000/hello',
          dataType: 'json',
          method: 'POST',
          timeout: 10000,
          data: { name: 'Taro' },
          headers: {
            'Content-Type': 'application/json',
          },
        },
        func: (data = {}, id) => {
          const callback = {};
          const request = wx.request({
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
            request,
          });
        },
        isDone: true,
      },
      RequestTask_abort: {
        func: (data = {}, id) => {
          const { request } = that.data;
          if (request) {
            request.abort();
          } else {
            wx.showToast({
              title: '暂无请求',
            });
            return true;
          }
        },
        isDone: true,
      },
      RequestTask_onHeadersReceived: {
        func: (data = {}, id) => {
          const { request } = that.data;
          if (request) {
            request.onHeadersReceived((res) => {
              that.setCallback(id, res);
            });
          } else {
            wx.showToast({
              title: '暂无请求',
            });
            return true;
          }
        },
        isDone: true,
      },
      RequestTask_offHeadersReceived: {
        func: (data = {}, id) => {
          const { request } = that.data;
          if (request) {
            request.offHeadersReceived();
          } else {
            wx.showToast({
              title: '暂无请求',
            });
            return true;
          }
        },
        isDone: true,
      },
      addInterceptor: {
        func: null,
      },
      cleanInterceptors: {
        func: null,
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

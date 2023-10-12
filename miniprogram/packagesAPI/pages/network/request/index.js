// packagesAPI/pages/network/request/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    request: null,
    list: [
      {
        id: 'request',
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
        func: (data = {}) => {
          const callback = {};
          return new Promise((resolve) => {
            const request = wx.request({
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
            });
            that.setData({
              request,
            })
          });
        },
        isDone: true,
      },
      {
        id: 'RequestTask.abort',
        func: (data = {}) => {
          const { request } = that.data;
          if (request) {
            request.abort();
            return {
              callback: {},
            };
          } else {
            wx.showToast({
              title: '暂无请求',
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
        id: 'RequestTask.onHeadersReceived',
        func: (data = {}) => {
          const { request } = that.data;
          if (request) {
            return new Promise((resolve) => {
              request.onHeadersReceived((res) => {
                console.log('test API: RequestTask.onHeadersReceived');
                console.log(res);
                resolve({callback: res});
              })
            })
          } else {
            wx.showToast({
              title: '暂无请求',
            });
            return {
              callback: {},
              isShowToast: true,
            };
          }
        },
        isDone: true
      },
      {
        id: 'RequestTask.offHeadersReceived',
        func: (data = {}) => {
          const { request } = that.data;
          if (request) {
              request.offHeadersReceived();
            return {
              callback: {},
            }
          } else {
            wx.showToast({
              title: '暂无请求',
            });
            return {
              callback: {},
              isShowToast: true,
            };
          }
        },
        isDone: true
      },
      {
        id: 'addInterceptor',
        func: null,
      },
      {
        id: 'cleanInterceptors',
        func: null,
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

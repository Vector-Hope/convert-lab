// packagesAPI/pages/cache/periodicUpdate/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      getBackgroundFetchData: {
        inputData: {
          fetchType: '',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.getBackgroundFetchData({
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
          })
        },
        isDone: true
      },
      setBackgroundFetchToken: {
        inputData: {
          token: 'backgroundFetchToken',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setBackgroundFetchToken({
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
          })
        },
        isDone: true,
      },
      getBackgroundFetchToken: {
        func: (data = {}, id) => {
          let callback = {};
          wx.getBackgroundFetchToken({
             success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          })
        },
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

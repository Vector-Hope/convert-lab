// packagesAPI/pages/device/clipBoard/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      setClipboardData: {
        inputData: {
          data: '我是复制的内容',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setClipboardData({
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
          return true;
        },
        isDone: true,
      },
      getClipboardData: {
        func: (data = {}, id) => {
          let callback = {};
          wx.getClipboardData({
            success: (res) => {
              that.setData({
                pasted: res.data,
              });
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
  },
    pasted: '',
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

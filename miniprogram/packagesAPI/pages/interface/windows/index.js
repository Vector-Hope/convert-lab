// packagesAPI/pages/interface/windows/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      onWindowResize: {
        func: (data = {}, id) => {
          wx.onWindowResize((res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      offWindowResize: {
        func: (data = {}, id) => {
          wx.offWindowResize();
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

// packagesAPI/pages/interface/menu/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      getMenuButtonBoundingClientRect: {
        func: (data = {}, id) => {
          const rect = wx.getMenuButtonBoundingClientRect();
          that.setCallback(id, rect);
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

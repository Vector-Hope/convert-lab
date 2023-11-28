// packagesAPI/pages/analysis/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      reportMonitor: {
        func: null,
      },
      reportEvent: {
        func: null,
      },
      reportAnalytics: {
        inputData: {
          eventName: 'purchase',
          eventData: {
            price: 120,
            color: 'red'
          },
        },
        func: (data = {}, id) => {
          const {eventName, eventData} = data;
          wx.reportAnalytics(eventName, eventData);
        },
      },
      getExptInfoSync: {
        inputData: {
          key: [],
        },
        func: (data = {}, id) => {
          const {key} = data;
          wx.getExptInfoSync(key);
        },
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
  }
});

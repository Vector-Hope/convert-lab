// packagesAPI/pages/interface/navigationBar/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      showNavigationBarLoading: {
        func: null,
      },
      setNavigationBarTitle: {
        inputData: {
          title: '当前页面',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setNavigationBarTitle({
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
        },
        isDone: true,
      },
      setNavigationBarColor: {
        inputData: {
          frontColor: '#ffffff',
          backgroundColor: '#317af7',
          animation: {
            duration: 1000,
            timingFunc: 'easeIn',
          },
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setNavigationBarColor({
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
      hideNavigationBarLoading: {
        func: null,
      },
      hideHomeButton: {
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

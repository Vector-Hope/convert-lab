// packagesAPI/pages/interface/scroll/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      pageScrollTo: {
        inputData: {
          duration: 300,
          selector: '#blank-content',
          offsetTop: 0,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.pageScrollTo({
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
        callbackRes: {},
        isDone: true,
      },
  },
    scrollToTop: {
      scrollToTop: {
        func: (data = {}, id) => {
          let callback = {};
          wx.pageScrollTo({
            scrollTop: 0,
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setScrollToTopCallback(id, {...callback, complete: res});
            },
          });
        },
        callbackRes: {},
        isDone: true,
      },
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
  },
  setCallback(id, callback) {
    const {list} = that.data;
    console.log(callback);
    list[id].callbackRes = callback;
    that.setData({
      list
    })
  },
  setScrollToTopCallback(id, callback) {
    const {scrollToTop} = that.data;
    console.log(callback);
    scrollToTop[id].callbackRes = callback;
    that.setData({
      scrollToTop
    })
  },
});

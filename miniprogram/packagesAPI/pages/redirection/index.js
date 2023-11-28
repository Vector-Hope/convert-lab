// packagesAPI/pages/redirection/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      openBusinessView: {
        func: null,
      },
      openEmbeddedMiniProgram: {
        func: null,
      },
      navigateToMiniProgram: {
        inputData: {
          appId: 'com.example.myapplication',
          path: 'EntryAbility',
          extraData: {},
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.navigateToMiniProgram({
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
      navigateBackMiniProgram: {
        func: null,
      },
      exitMiniProgram: {
        func: null,
      },
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
    const {
      list
    } = this.data;
    const listKey = Object.keys(list);
    listKey.forEach((key) => {
      list[key].callbackRes = {};
    })
    this.setData({
      list
    })
  },
  setCallback(id, callback) {
    const {
      list
    } = that.data;
    console.log(callback);
    list[id].callbackRes = callback;
    that.setData({
      list
    })
  },
});
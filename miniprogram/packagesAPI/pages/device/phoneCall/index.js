// packagesAPI/pages/device/phoneCall/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      makePhoneCall: {
        inputData: {
          phoneNumber: '13352354363',
        },
        func: (data = {}, id) => {
          let callback = {};
          const { phoneNumber } = data;
          wx.makePhoneCall({
            phoneNumber,
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

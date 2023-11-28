// packagesAPI/pages/payment/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      requestPayment: {
        inputData: {
          nonceStr: '',
          packageName: 'prepay_id=testPayment',
          signType: 'MD5',
          paySign: '',
        },
        func: (data = {}, id) => {
          const timeStamp = new Date();
          const {
            nonceStr,
            packageName,
            signType,
            paySign
          } = data;
          let callback = {};
          wx.requestPayment({
            timeStamp: timeStamp.getTime().toString(),
            nonceStr,
            package: packageName,
            signType,
            paySign,
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
      requestOrderPayment: {
        func: null,
      },
      faceVerifyForPay: {
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
// packagesAPI/pages/payment/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'requestPayment',
        inputData: {
          nonceStr: '',
          packageName: 'prepay_id=testPayment',
          signType: 'MD5',
          paySign: '',
        },
        func: (data = {}) => {
          const timeStamp = new Date();
          const {nonceStr, packageName, signType, paySign} = data;
          return new Promise((resolve) => {
            const callback = {};
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
                callback['complete'] = res;
                resolve({ callback });
              },
            });
          });
        },
        isDone: true,
      },
      {
        id: 'requestOrderPayment',
        func: null,
      },
      {
        id: 'faceVerifyForPay',
        func: null,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});

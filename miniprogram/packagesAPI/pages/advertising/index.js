// packagesAPI/pages/advertising/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      createRewardedVideoAd: {
        func: null,
      },
      createInterstitialAd: {
        inputData: {
          adUnitId: '',
        },
        func: (data = {}, id) => {
          const interstitialAd = wx.createInterstitialAd(data);
          that.setData({
            interstitialAd,
          });
          that.setCallback(id, interstitialAd);
        },
        isDone: true,
      },
      InterstitialAd_show: {
        func: (data = {}, id) => {
          const { interstitialAd } = that.data;
          if (!interstitialAd) {
            wx.showToast({
              title: '请创建广告实例',
            });
            return true;
          }
          interstitialAd.show();
        },
        isDone: true,
      },
      RewardedVideoAd: {
        func: null,
      },
    },
    InterstitialAd: null,
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

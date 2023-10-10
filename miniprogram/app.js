// app.js
App({
  onLaunch() {
    wx.showToast({
      title: '小程序初始化完成',
    });
    console.log('App on Launch!');
  },
  onShow() {
    wx.showToast({
      title: '小程序显现',
    });
    console.log('App on show!');
  },
  onHide() {
    wx.showToast({
      title: '小程序隐藏',
    });
    console.log('App on hide!');
  },
  onError() {
    wx.showToast({
      title: 'appOnError出现错误',
    });
    console.log('App on error!');
  },
  onPageNotFound() {
    wx.showToast({
      title: '无法找到相应页面',
    });
    console.log('App on page not found!');
  },
  onUnhandledRejection() {
    wx.showToast({
      title: 'UnhandledRejection',
    });
    console.log('App on unhandled rejection!');
  },
  globalData: {},
});

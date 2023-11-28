// packagesAPI/pages/interface/setFont/index.js
let that;
const fontUrls = [
  'https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf',
  'https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.ttf',
  'https://mdn.alipayobjects.com/portal_mnwejl/afts/file/A*GG6cQ5B6iMsAAAAAAAAAAAAAAQAAAQ',
];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      loadFontFace: {
        inputData: {
          family: 'My Font',
          source: `url("${fontUrls[2]}")`,
          global: true,
          desc: {
            style: 'normal',
            weight: 'normal',
          },
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.loadFontFace({
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

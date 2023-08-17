// packagesFramework/pages/wxml/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    simple: '简单绑定',
    comId: 'combination',
    control: true,
    theme: 'light',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onUnload() {
    if (wx.offThemeChange) {
      wx.offThemeChange()
    }
  },
  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light',
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({ theme })
      })
    }
  },
  changeControl() {
    const { control } = this.data
    this.setData({
      control: !control,
    })
  },
  changeSimple(e) {
    this.setData({
      simple: e.detail.value,
    })
  },
})

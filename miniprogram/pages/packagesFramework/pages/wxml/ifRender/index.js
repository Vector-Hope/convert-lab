Page({
  /**
   * 页面的初始数据
   */
  data: {
    simpleIf: true,
    blockIf: true,
    theme: 'light',
    hidden: true,
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
  changeSimpleIf(e) {
    this.setData({
      simpleIf: e.detail.value,
    })
  },
  changeBlockIf(e) {
    this.setData({
      blockIf: e.detail.value,
    })
  },
  changeHidden(e) {
    this.setData({
      hidden: e.detail.value,
    })
  },
})

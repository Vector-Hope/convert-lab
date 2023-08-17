Page({
  /**
   * 页面的初始数据
   */
  data: {
    importSuccess: {
      name: 'import成功',
      content: '模板为quoteTemplate',
    },
    includeSuccess: {
      name: 'include成功',
      content: '文件为includeQuote',
    },
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

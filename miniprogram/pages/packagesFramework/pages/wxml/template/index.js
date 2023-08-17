Page({
  /**
   * 页面的初始数据
   */
  data: {
    creatTemplate: {
      title: '创建模板并使用',
      name: 'creatTemplate',
      content: '使用成功',
    },
    chooseTrue: true,
    chooseTemplate: {
      name: '选择Template',
      content: '选择如title所示',
    },
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
  changeChooseTrue(e) {
    this.setData({
      chooseTrue: e.detail.value,
    })
  },
})

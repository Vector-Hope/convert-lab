// packagesFramework/pages/wxml/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataBind: '数据绑定',
    simple: 'dataBind',
    control: true,
    theme: 'light',
    num1: 3,
    num2: 4,
    logicNum: 0,
    object: {
      name: '路径',
    },
    array: ['运算'],
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
  changeLogicNum(e) {
    this.setData({
      logicNum: e.detail.value,
    })
  },
  getObject(e) {
    console.log(e)
  },
})

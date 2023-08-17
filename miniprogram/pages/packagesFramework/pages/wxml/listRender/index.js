Page({
  /**
   * 页面的初始数据
   */
  data: {
    simpleRender: [
      {
        id: '001',
        name: 'simple1',
      },
      {
        id: '002',
        name: 'simple2',
      },
      {
        id: '003',
        name: 'simple3',
      },
    ],
    blockRender: [
      {
        id: '001',
        name: 'block1',
      },
      {
        id: '002',
        name: 'block2',
      },
      {
        id: '003',
        name: 'block3',
      },
    ],
    listRender: [
      {
        id: '001',
        name: 'listRender1',
        content: ['lr1-content1', 'lr1-content2', 'lr1-content3'],
      },
      {
        id: '002',
        name: 'listRender2',
        content: ['lr2-content1', 'lr2-content2', 'lr2-content3'],
      },
      {
        id: '003',
        name: 'listRender3',
        content: ['lr3-content1', 'lr3-content2', 'lr3-content3'],
      },
    ],
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
    const { simpleRender } = this.data
  },
})

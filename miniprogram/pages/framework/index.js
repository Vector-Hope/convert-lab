Page({
  data: {
    list: [
      {
        id: 'config',
        name: '小程序配置',
        open: false,
        pages: [],
      },
      {
        id: 'frameAPI',
        name: '框架接口',
        open: false,
        pages: [],
      },
      {
        id: 'wxml',
        name: 'WXML语法参考',
        open: false,
        pages: [
          {
            id: 'dataBind',
            name: '数据绑定',
          },
          {
            id: 'listRender',
            name: '列表渲染',
          },
          {
            id: 'ifRender',
            name: '条件渲染',
          },
          {
            id: 'template',
            name: '模板',
          },
          {
            id: 'quote',
            name: '引用',
          },
        ],
      },
      {
        id: 'wxs',
        name: 'WXS语法参考',
        open: false,
        pages: [],
      },
    ],
    theme: 'light',
  },

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
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          wx.navigateTo({
            url: `../../packageAPI/pages/${list[i].id}/${list[i].url}`,
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list,
    })
  },
})

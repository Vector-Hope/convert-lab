Page({
  data: {
    list: [
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
        pages: [
          {
            id: 'wxsModule',
            name: '模块',
          },
        ],
      },
    ],
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
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

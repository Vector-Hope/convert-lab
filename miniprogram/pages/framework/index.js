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
          {
            id: 'wxsOperator',
            name: '运算符',
          },
        ],
      },
    ],
    iconList: {
      'wxml': '../../image/framework/wxml.png',
      'wxs': '../../image/framework/wxs.png'
    },
  },
})

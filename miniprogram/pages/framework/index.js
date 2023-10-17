Page({
  data: {
    list: [
      {
        id: 'wxml',
        name: 'WXML转换参考',
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
        name: 'WXS转换参考',
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
          {
            id: 'regExp',
            name: '正则表达式',
          },
        ],
      },
      {
        id: 'styleConvert',
        name: '样式转换参考',
        open: false,
        pages: [
          {
            id: 'noteConvert',
            name: '注释转换',
          },
        ],
      },
      {
        id: 'jsSyntax',
        name: 'js转换参考',
        open: false,
        pages: [
          {
            id: 'requireJs',
            name: '文件引入',
          },
          {
            id: 'esSyntax',
            name: 'ES语法',
          },
        ],
      },
      {
        id: 'structure',
        name: '结构',
        open: false,
        pages: [
          {
            id: 'jsProjectStructure',
            name: 'JS工程结构',
          },
          {
            id: 'tsProjectStructure',
            name: 'TS工程结构',
          },
          {
            id: 'frameworkStructure',
            name: '框架结构',
          },
          {
            id: 'pageStructure',
            name: '页面结构',
          },
        ],
      },
    ],
  },
});

// packagesAPI/pages/interface/setFont/index.js
const fontUrls = [
  'https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf',
  'https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.ttf',
  'https://mdn.alipayobjects.com/portal_mnwejl/afts/file/A*GG6cQ5B6iMsAAAAAAAAAAAAAAQAAAQ',
]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'loadFontFace',
        inputData: {
          family: 'My Font',
          source: `url("${fontUrls[2]}")`,
          global: true,
          desc: {
            style: 'normal',
            weight: 'normal',
          },
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.loadFontFace({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
    ],
  },
})

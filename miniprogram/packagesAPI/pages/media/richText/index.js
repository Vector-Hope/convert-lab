// packagesAPI/pages/media/richText/index.js
let that
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'EditorContext',
        func: (data = {}) => {
          return new Promise((resolve) => {
            const query = wx.createSelectorQuery()
            query
              .select('#editor')
              .context((res) => {
                const editorContext = res.context
                that.setData({
                  editorContext,
                })
                resolve({ callback: editorContext })
              })
              .exec()
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.clear',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.clear({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.format',
        inputData: {
          name: 'header',
          value: 'H1',
        },
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          const { name, value } = data
          if (value) {
            editorContext.format(name, value)
          } else {
            editorContext.format(name)
          }
          return {}
        },
        isDone: true,
      },
      {
        id: 'EditorContext.getContents',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.getContents({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.insertText',
        inputData: {
          text: 'developer conference',
        },
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          const { text } = data
          return new Promise((resolve) => {
            const callback = {}
            editorContext.insertText({
              text,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.redo',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.redo({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.removeFormat',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.removeFormat({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.scrollIntoView',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          editorContext.scrollIntoView()
          return {}
        },
        isDone: true,
      },
      {
        id: 'EditorContext.setContents',
        inputData: {
          html: '<p>test_html</p>',
          delta: {},
        },
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          let props = { html: data.html }
          if (Object.keys(data.delta).length) {
            props.delta = data.delta
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.setContents({
              ...props,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.undo',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.undo({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.getSelectionText',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.getSelectionText({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.blur',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.blur({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.insertDivider',
        func: (data = {}) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.insertDivider({
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EditorContext.insertImage',
        inputData: {
          src: 'https://user-images.githubusercontent.com/3369400/133268513-5bfe2f93-4402-42c9-a403-81c9e86934b6.jpeg',
          nowrap: false,
          alt: 'hello,beautiful world',
          data: {},
          extClass: 'test_image',
          height: '100',
          width: '100',
        },
        func: (data) => {
          const { editorContext } = that.data
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            })
            return {
              isShowToast: true,
              callback: {},
            }
          }
          return new Promise((resolve) => {
            const callback = {}
            editorContext.insertImage({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
    ],
    editorContext: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
})

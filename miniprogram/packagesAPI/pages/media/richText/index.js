// packagesAPI/pages/media/richText/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      EditorContext: {
        func: (data = {}, id) => {
          const query = wx.createSelectorQuery();
          query
            .select('#editor')
            .context((res) => {
              const editorContext = res.context;
              that.setData({
                editorContext,
              });
              that.setCallback(id, editorContext);
            })
            .exec();
        },
        isDone: true,
      },
      EditorContext_clear: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.clear({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_format: {
        inputData: {
          name: 'header',
          value: 'H1',
        },
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          const {
            name,
            value
          } = data;
          if (value) {
            editorContext.format(name, value);
          } else {
            editorContext.format(name);
          }
        },
        isDone: true,
      },
      EditorContext_getContents: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.getContents({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_insertText: {
        inputData: {
          text: 'developer conference',
        },
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          const {
            text
          } = data;
          let callback = {};
          editorContext.insertText({
            text,
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_redo: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.redo({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_removeFormat: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.removeFormat({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_scrollIntoView: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          editorContext.scrollIntoView();
          return {};
        },
        isDone: true,
      },
      EditorContext_setContents: {
        inputData: {
          html: '<p>test_html</p>',
          delta: {},
        },
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let props = {
            html: data.html
          };
          if (Object.keys(data.delta).length) {
            props.delta = data.delta;
          }
          let callback = {};
          editorContext.setContents({
            ...props,
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_undo: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.undo({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_getSelectionText: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.getSelectionText({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_blur: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.blur({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_insertDivider: {
        func: (data = {}, id) => {
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.insertDivider({
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      EditorContext_insertImage: {
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
          const {
            editorContext
          } = that.data;
          if (!editorContext) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          let callback = {};
          editorContext.insertImage({
            ...data,
            success: (res) => {
              callback['success'] = res;
            },
            fail: (res) => {
              callback['fail'] = res;
            },
            complete: (res) => {
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
    },
    editorContext: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
    const {
      list
    } = this.data;
    const listKey = Object.keys(list);
    listKey.forEach((key) => {
      list[key].callbackRes = {};
    })
    this.setData({
      list
    })
  },
  setCallback(id, callback) {
    const {
      list
    } = that.data;
    console.log(callback);
    list[id].callbackRes = callback;
    that.setData({
      list
    })
  },
});
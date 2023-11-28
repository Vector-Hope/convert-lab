// packagesAPI/pages/network/webSocket/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      onSocketOpen: {
        func: (data = {}, id) => {
          wx.showToast({
            title: '监听开启，请连接websocket',
          })
          wx.onSocketOpen((res) => {
            that.setCallback(id, res);
          });
          return true;
        },
        isDone: true
      },
      onSocketMessage: {
        func: (data = {}, id) => {
          wx.showToast({
            title: '监听开启，请连接websocket',
          })
          wx.onSocketMessage((res) => {
            that.setCallback(id, res);
          });
          return true;
        },
        isDone: true
      },
      onSocketClose: {
        func: (data = {}, id) => {
          wx.showToast({
            title: '监听开启，请连接websocket',
          })
          wx.onSocketClose((res) => {
            that.setCallback(id, res);
          });
          return true;
        },
        isDone: true
      },
      onSocketError: {
        func: (data = {}, id) => {
          wx.showToast({
            title: '监听开启，请连接websocket',
          })
          wx.onSocketError((res) => {
            that.setCallback(id, res);
          });
          return true;
        },
        isDone: true
      },
      connectSocket: {
        inputData: {
          url: 'ws://26.26.26.1:3000',
          header: {
            'content-type': 'application/json',
          },
          protocols: [],
          tcpNoDelay: true,
          perMessageDeflate: false,
          timeout: 6000,
          forceCellularNetwork: false,
        },
        func: (data = {}, id) => {
          const callback = {};
          const socketTask = wx.connectSocket({
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
          that.setData({
            socketTask,
          });
        },
        isDone: true,
      },
      SocketTask_onOpen: {
        inputData: {
          url: 'ws://26.26.26.1:3000',
          header: {
            'content-type': 'application/json',
          },
          protocols: [],
          tcpNoDelay: true,
          perMessageDeflate: false,
          timeout: 6000,
          forceCellularNetwork: false,
        },
        func: async (data = {}, id) => {
          const {socketTask} = that.data;
          if (socketTask) {
            socketTask.close();
          }
          const newSocketTask = await wx.connectSocket({
            ...data,
            success: (res) => {
              wx.showToast({
                title: '连接成功',
              })
            },
            fail: (res) => {
              wx.showToast({
                title: '连接失败',
              })
            },
          });
          that.setData({
            socketTask: newSocketTask,
          });
          newSocketTask.onOpen((res) => {
            that.setCallback(id, res);
          });
          return true;
        },
        isDone: true,
      },
      sendSocketMessage: {
        inputData: {
          data: 'convert小程序',
        },
        func: (data = {}, id) => {
          const callback = {};
          wx.sendSocketMessage({
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
        isDone: true
      },
      closeSocket: {
        inputData: {
          code: 1000,
          reason: '主动关闭',
        },
        func: (data = {}, id) => {
          const callback = {};
          wx.closeSocket({
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
        isDone: true
      },
      SocketTask_onClose: {
        func: (data = {}, id) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return true;
          }
          socketTask.onClose((res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      SocketTask_onError: {
        func: (data = {}, id) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return true;
          }
          socketTask.onError((res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      SocketTask_onMessage: {
        func: (data = {}, id) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return true;
          }
          socketTask.onMessage((res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      SocketTask_send: {
        inputData: {
          data: 'convert!',
        },
        func: (data = {}, id) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return true;
          }
            const callback = {};
            socketTask.send({
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
      SocketTask_close: {
        inputData: {
          code: 1000,
          reason: '主动关闭',
        },
        func: (data = {}, id) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return true;
          }
            const callback = {};
            socketTask.close({
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
    socketTask: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
    const {list} = this.data;
    const listKey = Object.keys(list);
    listKey.forEach((key) => {
      list[key].callbackRes = {};
    })
    this.setData({
      list
    })
  },
  setCallback(id, callback) {
    const {list} = that.data;
    console.log(callback);
    list[id].callbackRes = callback;
    that.setData({
      list
    })
  },
});

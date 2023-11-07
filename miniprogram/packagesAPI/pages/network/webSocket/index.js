// packagesAPI/pages/network/webSocket/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'onSocketOpen',
        func: (data = {}) => {
          return new Promise ((resolve) => {
            wx.showToast({
              title: '监听开启，请连接websocket',
            })
            let isFirstListen = true;
            wx.onSocketOpen((res) => {
              if (!isFirstListen) {
                console.log('test API: onSocketOpen');
                console.log(res);
              }
              isFirstListen = false;
              resolve({
                callback: res,
                isShowToast: true,
              })
            });
          })
        },
        isDone: true
      },
      {
        id: 'onSocketMessage',
        func: (data = {}) => {
          return new Promise ((resolve) => {
            wx.showToast({
              title: '监听开启，请连接websocket',
            })
            let isFirstListen = true;
            wx.onSocketMessage((res) => {
              if (!isFirstListen) {
                console.log('test API: onSocketMessage');
                console.log(res);
              }
              isFirstListen = false;
              resolve({
                callback: res,
                isShowToast: true,
              })
            });
          })
        },
        isDone: true
      },
      {
        id: 'onSocketClose',
        func: (data = {}) => {
          return new Promise ((resolve) => {
            wx.showToast({
              title: '监听开启，请连接websocket',
            })
            let isFirstListen = true;
            wx.onSocketClose((res) => {
              if (!isFirstListen) {
                console.log('test API: onSocketClose');
                console.log(res);
              }
              isFirstListen = false;
              resolve({
                callback: res,
                isShowToast: true,
              })
            });
          })
        },
        isDone: true
      },
      {
        id: 'onSocketError',
        func: (data = {}) => {
          return new Promise ((resolve) => {
            wx.showToast({
              title: '监听开启，请连接websocket',
            })
            let isFirstListen = true;
            wx.onSocketError((res) => {
              if (!isFirstListen) {
                console.log('test API: onSocketError');
                console.log(res);
              }
              isFirstListen = false;
              resolve({
                callback: res,
                isShowToast: true,
              })
            });
          })
        },
        isDone: true
      },
      {
        id: 'connectSocket',
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
        func: (data = {}) => {
          return new Promise((resolve) => {
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
                callback['complete'] = res;
                resolve({callback});
              },
            });
            that.setData({
              socketTask,
            });
          })
        },
        isDone: true,
      },
      {
        id: 'connectSocket.onOpen',
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
        func: (data = {}) => {
          const {socketTask} = that.data;
          if (socketTask) {
            socketTask.close();
          }
          const newSocketTask = wx.connectSocket({
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
          return new Promise((resolve) => {
            newSocketTask.onOpen((res) => {
              resolve({
                callback: res,
                isShowToast: true
              })
            });
          })
        },
        isDone: true,
      },
      {
        id: 'sendSocketMessage',
        inputData: {
          data: 'convert小程序',
        },
        func: (data = {}) => {
          return new Promise ((resolve) => {
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
                callback['complete'] = res;
                resolve({callback});
              },
            });
          })
        },
        isDone: true
      },
      {
        id: 'closeSocket',
        inputData: {
          code: 1000,
          reason: '主动关闭',
        },
        func: (data = {}) => {
          return new Promise ((resolve) => {
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
                callback['complete'] = res;
                resolve({callback});
              },
            });
          })
        },
        isDone: true
      },
      {
        id: 'SocketTask.onClose',
        func: (data = {}) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          return new Promise((resolve) => {
            socketTask.onClose((res) => {
              console.log('test API: SocketTask.onClose');
              console.log(res);
              resolve({ callback: res });
            });
          });
        },
        isDone: true,
      },
      {
        id: 'SocketTask.onError',
        func: (data = {}) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          return new Promise((resolve) => {
            socketTask.onError((res) => {
              console.log('test API: SocketTask.onError');
              console.log(res);
              resolve({ callback: res });
            });
          });
        },
        isDone: true,
      },
      {
        id: 'SocketTask.onMessage',
        func: (data = {}) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          return new Promise((resolve) => {
            socketTask.onMessage((res) => {
              console.log('test API: SocketTask.onMessage');
              console.log(res);
              resolve({ callback: res });
            });
          });
        },
        isDone: true,
      },
      {
        id: 'SocketTask.send',
        inputData: {
          data: 'convert!',
        },
        func: (data = {}) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          return new Promise((resolve) => {
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
                callback['complete'] = res;
                resolve({ callback });
              },
            });
          });
        },
        isDone: true,
      },
      {
        id: 'SocketTask.close',
        inputData: {
          code: 1000,
          reason: '主动关闭',
        },
        func: (data = {}) => {
          const { socketTask } = that.data;
          if (!socketTask || socketTask.readyState !== socketTask.OPEN) {
            wx.showToast({
              title: '请先连接websocket',
              icon: 'error',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          return new Promise((resolve) => {
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
                callback['complete'] = res;
                resolve({ callback });
              },
            });
          });
        },
        isDone: true,
      },
    ],
    socketTask: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
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
});

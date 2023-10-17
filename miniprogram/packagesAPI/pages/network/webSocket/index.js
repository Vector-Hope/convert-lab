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
        func: () => {
          TestConsole.consoleTest('Taro.onSocketOpen');
          console.log('注册onSocketOpen, 需要websocket连接后才能触发回调');
          Taro.onSocketOpen((res) => {
            console.log('Taro.onSocketOpen:', res);
          });
        },
      },
      {
        id: 'onSocketMessage',
        func: () => {
          TestConsole.consoleTest('Taro.onSocketMessage');
          console.log('注册onSocketMessage, 需要websocket连接收到信息后才能触发回调');
          Taro.onSocketMessage((res) => {
            console.log('Taro.onSocketMessage:', res);
            Taro.showToast({
              title: res.data,
            });
          });
        },
      },
      {
        id: 'onSocketClose',
        func: () => {
          TestConsole.consoleTest('Taro.onSocketClose');
          console.log('注册onSocketClose, 需要websocket关闭才能触发回调');
          Taro.onSocketClose((res) => {
            console.log('Taro.onSocketClose:', res);
          });
        },
      },
      {
        id: 'onSocketError',
        func: () => {
          TestConsole.consoleTest('Taro.onSocketError');
          console.log('注册onSocketError, 需要websocket连接后发生错误才能触发回调');
          Taro.onSocketError((res) => {
            console.log('Taro.onSocketError:', res);
          });
        },
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
        func: async (data = {}) => {
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
        func: async (data = {}) => {
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
              console.log(res)
              resolve({
                callback: res,
                isShowToast: true
              })
            });
          })
          
          
          return {
            callback: {
              callback,
              socketTask,
            },
          };
        },
        isDone: true,
      },
      {
        id: 'sendSocketMessage',
        inputData: {
          data: 'Taro三方框架',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.sendSocketMessage');
          Taro.sendSocketMessage({
            ...data,
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex);
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex);
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex);
            },
          });
        },
      },
      {
        id: 'closeSocket',
        inputData: {
          code: 1000,
          reason: '主动关闭',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.closeSocket');
          Taro.closeSocket({
            ...data,
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex);
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex);
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex);
            },
          });
        },
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

// packagesAPI/pages/cache/cache/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'setStorageSync',
        inputData: {
          key: 'setStorageSyncKey',
          value: 'setStorageSyncValue',
        },
        func: (data = {}) => {
          wx.setStorageSync(data['key'], data['value']);
          return {
            callback: {
              value: wx.getStorageSync(data['key']),
            },
          };
        },
        isDone: true,
      },
      {
        id: 'setStorage',
        inputData: {
          key: 'setStorageKey',
          data: 'setStorageValue',
        },
        func: (data = {}) => {
          const callback = {};
          return new Promise((resolve) => {
            wx.setStorage({
              ...data,
              success: (res) => {
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({
                  callback,
                });
              },
            });
          });
        },
        isDone: true,
      },
      {
        id: 'removeStorageSync',
        inputData: {
          removeKey: 'setStorageSyncKey',
        },
        func: (data = {}) => {
          const { removeKey } = data;
          const value = wx.getStorageSync(removeKey);
          if (value) {
            wx.removeStorageSync(removeKey);
            const callback = {
              msg: 'removeStorageSync:ok',
            };
            if (wx.getStorageSync(removeKey)) {
              callback.msg = 'removeStorageSync:error';
            }
            return {
              callback,
            };
          } else {
            wx.showToast({
              title: '请先缓存对应数据',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
        },
        isDone: true,
      },
      {
        id: 'removeStorage',
        inputData: {
          removeKey: 'setStorageSyncKey',
        },
        func: (data = {}) => {
          const { removeKey } = data;
          const value = wx.getStorageSync(removeKey);
          if (value) {
            const callback = {};
            return new Promise((resolve) => {
              wx.removeStorage({
                key: removeKey,
                success: (res) => {
                  callback['success'] = res;
                },
                fail: (res) => {
                  callback['fail'] = res;
                },
                complete: (res) => {
                  callback['complete'] = res;
                  resolve({
                    callback,
                  });
                },
              });
            });
          } else {
            wx.showToast({
              title: '请先缓存对应数据',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
        },
        isDone: true,
      },
      {
        id: 'getStorageSync',
        inputData: {
          getKey: 'setStorageSyncKey',
        },
        func: (data = {}) => {
          const { getKey } = data;
          const value = wx.getStorageSync(getKey);
          if (value) {
            const callback = {
              value,
            };
            return {
              callback,
            };
          } else {
            wx.showToast({
              title: '请先缓存对应数据',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
        },
        isDone: true,
      },
      {
        id: 'getStorageInfoSync',
        func: (data = {}) => {
          const storageInfo = wx.getStorageInfoSync();
          return {
            callback: storageInfo
          }
        },
        isDone: true,
      },
      {
        id: 'getStorageInfo',
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback ={};
            wx.getStorageInfo({
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
            })
          })
        },
        isDone: true
      },
      {
        id: 'getStorage',
        inputData: {
          getKey: 'setStorageSyncKey',
        },
        func: (data = {}) => {
          const { getKey } = data;
          const value = wx.getStorageSync(getKey);
          if (value) {
            const callback = {};
            return new Promise((resolve) => {
              wx.getStorage({
                key: getKey,
                success: (res) => {
                  callback['success'] = res;
                },
                fail: (res) => {
                  callback['fail'] = res;
                },
                complete: (res) => {
                  callback['complete'] = res;
                  resolve({
                    callback,
                  });
                },
              });
            });
          } else {
            wx.showToast({
              title: '请先缓存对应数据',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
        },
        isDone: true,
      },
      {
        id: 'clearStorageSync',
        func: (data = {}) => {
          wx.clearStorageSync();
          return {
            callback: {
              msg: 'clearStorageSync:ok',
            },
          };
        },
        isDone: true,
      },
      {
        id: 'clearStorage',
        func: (data = {}) => {
          const callback = {};
          return new Promise((resolve) => {
            wx.clearStorage({
              success: (res) => {
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({
                  callback,
                });
              },
            });
          });
        },
        isDone: true,
      },
      {
        id: 'PeriodicUpdate_暂不支持',
        func: null,
      },
      {
        id: 'setBackgroundFetchToken',
        inputData: {
          token: '',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('setBackgroundFetchToken');
          Taro.setBackgroundFetchToken({
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
        id: 'getBackgroundFetchData',
        inputData: {
          fetchType: '',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('getBackgroundFetchData');
          Taro.getBackgroundFetchData({
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
        id: 'CacheManager_暂不支持',
        func: null,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

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

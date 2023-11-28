// packagesAPI/pages/cache/cache/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      setStorageSync: {
        inputData: {
          key: 'setStorageSyncKey',
          value: 'setStorageSyncValue',
        },
        func: (data = {}, id) => {
          wx.setStorageSync(data['key'], data['value']);
          that.setCallback(id, {
            value: wx.getStorageSync(data['key']),
          })
        },
        isDone: true,
      },
      setStorage: {
        inputData: {
          key: 'setStorageKey',
          data: 'setStorageValue',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setStorage({
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
      removeStorageSync: {
        inputData: {
          removeKey: 'setStorageSyncKey',
        },
        func: (data = {}, id) => {
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
            that.setCallback(id, callback);
          } else {
            wx.showToast({
              title: '请先缓存对应数据',
            });
            return true;
          }
        },
        isDone: true,
      },
      removeStorage: {
        inputData: {
          removeKey: 'setStorageSyncKey',
        },
        func: (data = {}, id) => {
          const { removeKey } = data;
          const value = wx.getStorageSync(removeKey);
          let callback = {};
          if (value) {
              wx.removeStorage({
                key: removeKey,
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
          } else {
            wx.showToast({
              title: '请先缓存对应数据',
            });
            return true;
          }
        },
        isDone: true,
      },
      getStorageSync: {
        inputData: {
          getKey: 'setStorageSyncKey',
        },
        func: (data = {}, id) => {
          const { getKey } = data;
          const value = wx.getStorageSync(getKey);
          if (value) {
            that.setCallback(id, {value});
          } else {
            wx.showToast({
              title: '请先缓存对应数据',
            });
            return true;
          }
        },
        isDone: true,
      },
      getStorageInfoSync: {
        func: (data = {}, id) => {
          const storageInfo = wx.getStorageInfoSync();
          that.setCallback(id, storageInfo);
        },
        isDone: true,
      },
      getStorageInfo: {
        func: (data = {}, id) => {
          let callback = {};
            wx.getStorageInfo({
              success: (res) => {
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                that.setCallback(id, {...callback, complete: res});
              },
            })
        },
        isDone: true
      },
      getStorage: {
        inputData: {
          getKey: 'setStorageSyncKey',
        },
        func: (data = {}, id) => {
          const { getKey } = data;
          const value = wx.getStorageSync(getKey);
          if (value) {
            let callback = {};
            wx.getStorage({
              key: getKey,
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
          } else {
            wx.showToast({
              title: '请先缓存对应数据',
            });
            return true;
          }
        },
        isDone: true,
      },
      clearStorageSync: {
        func: (data = {}, id) => {
          wx.clearStorageSync();
          that.setCallback(id, {
            msg: 'clearStorageSync:ok',
          });
        },
        isDone: true,
      },
      clearStorage: {
        func: (data = {}, id) => {
          let callback = {};
            wx.clearStorage({
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
      PeriodicUpdate: {
        func: null,
      },
      setBackgroundFetchToken: {
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
      getBackgroundFetchData: {
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
      CacheManager: {
        func: null,
      },
  },
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

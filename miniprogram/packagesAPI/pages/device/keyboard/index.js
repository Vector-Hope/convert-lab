// packagesAPI/pages/device/keyboard/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      onKeyboardHeightChange: {
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.onKeyboardHeightChange');
          Taro.onKeyboardHeightChange(this.onBoardHgiehtChange01);
          Taro.onKeyboardHeightChange(this.onBoardHgiehtChange02);
        },
      },
      offKeyboardHeightChange: {
        inputData: {
          closeAll: false,
          close01: true,
          close02: false,
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.offKeyboardHeightChange ');
          if (data.closeAll) {
            Taro.offKeyboardHeightChange();
          } else {
            if (data.close01) {
              Taro.offKeyboardHeightChange(this.onBoardHgiehtChange01);
            }
            if (data.close02) {
              Taro.offKeyboardHeightChange(this.onBoardHgiehtChange02);
            }
          }
        },
      },
      hideKeyboard: {
        func: (data = {}, id) => {
          let callback = {};
          wx.hideKeyboard({
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
          return true;
        },
        isDone: true,
      },
      getSelectedTextRange: {
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

// packagesAPI/pages/interface/interaction/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      showToast: {
        inputData: {
          title: 'showToast',
          duration: 10000,
          icon: 'success',
          mask: false,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.showToast({
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
          return true;
        },
        isDone: true,
      },
      hideToast: {
        inputData: {
          noConflict: false,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.hideToast({
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
          return true;
        },
        isDone: true,
      },
      showLoading: {
        inputData: {
          title: '加载中',
          mask: false,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.showLoading({
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
          return true;
        },
        isDone: true,
      },
      hideLoading: {
        inputData: {
          noConflict: false,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.hideLoading({
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
          return true;
        },
        isDone: true,
      },
      showModal: {
        inputData: {
          title: '提示',
          content: '这是一个模态弹窗',
          showCancel: true,
          cancelColor: '#f00',
          cancelText: '取消',
          confirmColor: '#0f0',
          confirmText: '确认',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.showModal({
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
          return true;
        },
        isDone: true,
      },
      showActionSheet: {
        inputData: {
          alertText: '警示文案',
          itemList: ['ActionA', 'ActionB', 'ActionC'],
          itemColor: '#0f0',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.showActionSheet({
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
          return true;
        },
        isDone: true,
      },
      enableAlertBeforeUnload: {
        func: null,
      },
      disableAlertBeforeUnload: {
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

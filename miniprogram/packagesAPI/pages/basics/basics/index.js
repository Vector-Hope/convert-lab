// packagesAPI/pages/basics/basics/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      env: {
        func: (data = {}, id) => {
          const env = wx.env;
          that.setCallback(id, {env});
        },
        isDone: true,
      },
      canIUse: {
        inputData: {
          apiName: 'openBluetoothAdapter',
        },
        func: (data = {}, id) => {
          const { apiName } = data;
          const res = {};
          res[apiName] = wx.canIUse(apiName);
          that.setCallback(id, res);
        },
        isDone: true,
      },
      canIuseWebp: {
        id: 'canIuseWebp',
        func: () => {},
      },
      base64ToArrayBuffer: {
        inputData: {
          base64: 'CxYh',
        },
        func: (data = {}, id) => {
          const { base64 } = data;
          const arrayBuffer = wx.base64ToArrayBuffer(base64);
          that.setCallback(id, {
            base64,
            Int8Array: new Int8Array(arrayBuffer),
            Uint8Array: new Uint8Array(arrayBuffer),
            ArrayBufferByteLength: arrayBuffer.byteLength,
          });
        },
        isDone: true,
      },
      arrayBufferToBase64: {
        func: (data = {}, id) => {
          const arrayBuffer = new Uint8Array([11, 22, 33]);
          const res = wx.arrayBufferToBase64(arrayBuffer);
          that.setCallback(id, {
              arrayBuffer: arrayBuffer,
              base64: res,
            })
        },
        isDone: true,
      },
      perload: {
        func: null,
      },
    }
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
  }
});

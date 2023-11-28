// packagesAPI/pages/basics/miniProgram/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lifeCycleList: {
      getLaunchOptionsSync: {
        func: (data = {}, id) => {
          const options = wx.getLaunchOptionsSync();
          that.setLifeCycleListCallback(id, {options});
        },
        isDone: true,
      },
      getEnterOptionsSync: {
        func: () => {
          TestConsole.consoleTest('Taro.getEnterOptionsSync');
          const options = Taro.getEnterOptionsSync();
          TestConsole.consoleNormal('getEnterOptionsSync', options);
        },
      },
    },
    appLevelEventsList: {
      onUnhandledRejection: {
        func: (data = {}, id) => {
          new Promise((resolve, reject) => {
            reject({ message: 'error' });
          });
        },
        isDone: true,
      },
      onThemeChange: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.onThemeChange');
          Taro.onThemeChange((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onThemeChange', apiIndex);
          });
        },
      },
      onPageNotFound: {
        id: 'onPageNotFound',
        inputData: {
          url: 'pages/api/index/11',
        },
        func: (data = {}, id) => {
          wx.onPageNotFound((result) => {
            wx.showToast({
              title: 'page not found',
            });
          });
          wx.navigateTo({
            url: '../../pages/api/index/11',
          });
        },
      },
      onError: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.onError');
          Taro.onError((err) => {
            TestConsole.consoleOnCallback.call(this, err, 'onError', apiIndex);
          });
        },
      },
      onAudioInterruptionEnd: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.onAudioInterruptionEnd');
          Taro.onAudioInterruptionEnd((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onAudioInterruptionEnd', apiIndex);
          });
        },
      },
      onAudioInterruptionBegin: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.onAudioInterruptionBegin');
          Taro.onAudioInterruptionBegin((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onAudioInterruptionBegin', apiIndex);
          });
        },
      },
      onAppShow: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.onAppShow');
          Taro.onAppShow((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onAppShow', apiIndex);
          });
        },
      },
      onAppHide: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.onAppHide');
          Taro.onAppHide((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'onAppHide', apiIndex);
          });
        },
      },
      offThemeChange: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.offThemeChange');
          Taro.offThemeChange((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offThemeChange', apiIndex);
          });
        },
      },
      offPageNotFound: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.offPageNotFound');
          Taro.offPageNotFound((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offPageNotFound', apiIndex);
          });
          Taro.navigateTo({
            url: 'pages/api/index/11',
          });
        },
      },
      offError: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.offError');
          Taro.offError((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offError', apiIndex);
          });
        },
      },
      offAudioInterruptionEnd: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.offAudioInterruptionEnd');
          Taro.offAudioInterruptionEnd((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offAudioInterruptionEnd', apiIndex);
          });
        },
      },
      offAudioInterruptionBegin: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.offAudioInterruptionBegin');
          Taro.offAudioInterruptionBegin((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offAudioInterruptionBegin', apiIndex);
          });
        },
      },
      offAppShow: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.offAppShow');
          Taro.offAppShow((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offAppShow', apiIndex);
          });
        },
      },
      offAppHide: {
        func: (data = {}, id) => {
          TestConsole.consoleTest('Taro.offAppHide');
          Taro.offAppHide((res) => {
            TestConsole.consoleOnCallback.call(this, res, 'offAppHide', apiIndex);
          });
        },
      },
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
    const {lifeCycleList, appLevelEventsList} = this.data;
    Object.keys(lifeCycleList).forEach((key) => {
      lifeCycleList[key].callbackRes = {};
    })
    Object.keys(appLevelEventsList).forEach((key) => {
      appLevelEventsList[key].callbackRes = {};
    })
    this.setData({
      lifeCycleList,
      appLevelEventsList
    })
  },
  setLifeCycleListCallback(id, callback) {
    const {lifeCycleList} = that.data;
    console.log(callback);
    lifeCycleList[id].callbackRes = callback;
    that.setData({
      lifeCycleList
    })
  },
  setAppLevelEventsListCallback(id, callback) {
    const {appLevelEventsList} = that.data;
    console.log(callback);
    appLevelEventsList[id].callbackRes = callback;
    that.setData({
      appLevelEventsList
    })
  }
});

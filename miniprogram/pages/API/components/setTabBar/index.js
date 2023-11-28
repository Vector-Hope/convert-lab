// pages/API/components/tabBar/index.js
let that;
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    list: {
      showTabBarRedDot: {
        inputData: {
          index: 0,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.showTabBarRedDot({
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
      hideTabBarRedDot: {
        inputData: {
          index: 0,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.hideTabBarRedDot({
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
      hideTabBar: {
        inputData: {
          animation: true,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.hideTabBar({
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
      showTabBar: {
        inputData: {
          animation: true,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.showTabBar({
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
      setTabBarStyle: {
        inputData: {
          color: '#1F69FF',
          selectedColor: '#F7F7F7',
          backgroundColor: '#7A7E83',
          borderStyle: 'white',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setTabBarStyle({
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
      setTabBarItem: {
        inputData: {
          index: 2,
          text: 'API',
          iconPath: '/image/tab/cloud.png',
          selectedIconPath: '/image/tab/cloud_select.png',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setTabBarItem({
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
      setTabBarBadge: {
        inputData: {
          index: 1,
          text: '3',
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.setTabBarBadge({
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
      removeTabBarBadge: {
        inputData: {
          index: 1,
        },
        func: (data = {}, id) => {
          let callback = {};
          wx.removeTabBarBadge({
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
  },

  lifetimes: {
    attached() {
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
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
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
  },
});
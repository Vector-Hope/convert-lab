// pages/API/components/tabBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        id: 'showTabBarRedDot',
        inputData: {
          index: 0,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.showTabBarRedDot({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'hideTabBarRedDot',
        inputData: {
          index: 0,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.hideTabBarRedDot({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'hideTabBar',
        inputData: {
          animation: true,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.hideTabBar({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'showTabBar',
        inputData: {
          animation: true,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.showTabBar({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'setTabBarStyle',
        inputData: {
          color: '#1F69FF',
          selectedColor: '#F7F7F7',
          backgroundColor: '#7A7E83',
          borderStyle: 'white',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.setTabBarStyle({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'setTabBarItem',
        inputData: {
          index: 2,
          text: 'API',
          iconPath: '/image/tab/cloud.png',
          selectedIconPath: '/image/tab/cloud_select.png',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.setTabBarItem({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'setTabBarBadge',
        inputData: {
          index: 1,
          text: '3',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.setTabBarBadge({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'removeTabBarBadge',
        inputData: {
          index: 1,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.removeTabBarBadge({
              ...data,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve(callback)
              },
            })
          })
        },
        isDone: true,
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {},
})

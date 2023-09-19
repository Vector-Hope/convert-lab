import { getType } from '../../../utils/util'
// packagesAPI/pages/routing/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'switchTab',
        inputData: {
          url: '../../../pages/API/index',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.switchTab({
              url: data.url,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({})
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'reLaunch',
        inputData: {
          url: '../../../pages/API/index',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.reLaunch({
              url: data.url,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'redirectTo',
        inputData: {
          url: '../../../pages/API/index',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.redirectTo({
              url: data.url,
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'navigateTo',
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {}
            wx.navigateTo({
              url: './routingPage/index',
              success: (res) => {
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({ callback })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'EventChannel',
        func: null,
      },
    ],
  },

  onReady() {},
})

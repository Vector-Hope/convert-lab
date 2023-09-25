// packagesAPI/pages/media/image/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'chooseImage',
        inputData: {
          count: 7,
          sizeType: ['original', 'compressed'],
          sourceType: ['album'],
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.chooseImage({
              ...data,
              success: (res) => {
                that.setData({
                  imgTempFilePaths: res.tempFilePaths,
                })
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({ callback });
              },
            })
          })
        },
        isDone: true
      },
      {
        id: 'previewImage',
        inputData: {
          urls: [
            'http://www.baidu.com/img/bdlogo.png',
            'https://img1.baidu.com/it/u=698323844,3339950020&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1694278800&t=60a09ae53f4ed052e28032d918935164',
            'https://img1.baidu.com/it/u=698323844,3339950020&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1694278800&t=60a09ae53f4ed052e28032d918935164',
          ],
          current: 'http://www.baidu.com/img/bdlogo.png',
          showmenu: true,
          referrerPolicy: 'no-referrer',
        },
        func: (data = {}) => {
          const {urls, current, showmenu, referrerPolicy} = data;
          return new Promise((resolve) => {
            const callback = {};
            wx.previewImage({
              urls,
              showmenu,
              current,
              referrerPolicy,
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
            })
          })
        },
        isDone: true
      },
      {
        id: 'getImageInfo',
        inputData: {
          imgIndex: 0,
        },
        func: (data = {}) => {
          const {imgTempFilePaths} = that.data;
          if (!imgTempFilePaths) {
            wx.showToast({
              title: '请先选择图片',
            })
            return {
              isShowToast: true,
              callback: {}
            }
          }
          const {imgIndex} = data;
          return new Promise((resolve) => {
            const callback = {};
            wx.getImageInfo({
              src: imgTempFilePaths[imgIndex],
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
            })
          })
        },
        isDone: true
      },
      {
        id: 'saveImageToPhotosAlbum',
        inputData: {
          imgIndex: 0
        },
        func: (data = {}) => {
          const {imgTempFilePaths} = that.data;
          if (!imgTempFilePaths) {
            wx.showToast({
              title: '请先选择图片',
            })
            return {
              isShowToast: true,
              callback: {}
            }
          }
          const {imgIndex} = data;
          return new Promise((resolve) => {
            const callback = {};
            wx.saveImageToPhotosAlbum({
              filePath: imgTempFilePaths[imgIndex],
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
            })
          })
        },
        isDone: true
      },
      {
        id: 'compressImage',
        func: (apiIndex) => {
          TestConsole.consoleTest('compressImage')
          Taro.chooseImage({
            success: (res) => {
              Taro.compressImage({
                quality: 1,
                src: res.tempFilePaths[0],
                compressedWidth: 300,
                compressHeight: 200,
                success: (res1) => {
                  TestConsole.consoleNormal('compressImage success ', res1)
                  Taro.saveImageToPhotosAlbum({
                    filePath: res1.tempFilePath,
                    success: (res2) => {
                      TestConsole.consoleNormal('saveImageToPhotosAlbum success ', res2)
                      Taro.getImageInfo({
                        src: res1.tempFilePath,
                        success: (res) => {
                          TestConsole.consoleNormal('compress later:getImageInfo success ', res)
                        },
                        fail: (res) => {
                          TestConsole.consoleNormal('compress later:getImageInfo fail ', res)
                        },
                        complete: (res) => {
                          TestConsole.consoleNormal('compress later:getImageInfo complete ', res)
                        },
                      })
                    },
                    fail: (res2) => {
                      TestConsole.consoleNormal('saveImageToPhotosAlbum fail ', res2)
                    },
                    complete: (res2) => {
                      TestConsole.consoleNormal('saveImageToPhotosAlbum complete ', res2)
                    },
                  })
                },
                fail: (res1) => {
                  TestConsole.consoleFail(res1)
                },
                complete: (res1) => {
                  TestConsole.consoleComplete(res1)
                },
              }).then((ret1) => {
                TestConsole.consoleReturn(ret1)
              })
            },
          }).then((res) => {
            TestConsole.consoleNormal('compress before :chooseImage ret ', res.tempFiles[0].size)
          })
        },
      },
      {
        id: 'previewMedia_image',
        func: (apiIndex) => {
          TestConsole.consoleTest('previewMedia_image')
          Taro.chooseImage({
            success: (res) => {
              TestConsole.consoleNormal('chooseImage success:', res)
              Taro.previewMedia({
                sources: [
                  {
                    url: res.tempFilePaths[0],
                    type: 'image',
                    poster: 'test',
                  },
                ],
                current: 0,
                showmenu: false,
                referrerPolicy: 'origin',
                success: (res) => {
                  TestConsole.consoleSuccess.call(this, res, apiIndex)
                },
                fail: (res) => {
                  TestConsole.consoleFail.call(this, res, apiIndex)
                },
                complete: (res) => {
                  TestConsole.consoleComplete.call(this, res, apiIndex)
                },
              }).then((res) => {
                TestConsole.consoleReturn.call(this, res, apiIndex)
              })
            },
            fail: (err) => {
              TestConsole.consoleNormal('chooseImage fail:', err)
            },
            complete: (com) => {
              TestConsole.consoleNormal('chooseImage complete', com)
            },
          }).then((ret) => {
            TestConsole.consoleNormal('chooseImage return', ret)
          })
        },
      },
      {
        id: 'previewMedia_video_album',
        func: (apiIndex) => {
          TestConsole.consoleTest('previewMedia_video_album')
          Taro.chooseVideo({
            sourceType: ['album'],
            maxDuration: 60,
            camera: 'back',
            success: (res) => {
              TestConsole.consoleNormal('chooseVideo success ', res)
              Taro.previewMedia({
                sources: [
                  {
                    url: res.tempFilePath,
                    type: 'video',
                    poster: 'test_video',
                  },
                ],
                success: (res) => {
                  TestConsole.consoleSuccess.call(this, res, apiIndex)
                },
                fail: (res) => {
                  TestConsole.consoleFail.call(this, res, apiIndex)
                },
                complete: (res) => {
                  TestConsole.consoleComplete.call(this, res, apiIndex)
                },
              }).then((res) => {
                TestConsole.consoleReturn.call(this, res, apiIndex)
              })
            },
            fail: (err) => {
              TestConsole.consoleNormal('chooseVideo fail:', err)
            },
            complete: (com) => {
              TestConsole.consoleNormal('chooseVideo complete', com)
            },
          }).then((ret) => {
            TestConsole.consoleNormal('chooseVideo return', ret)
          })
        },
      },
      {
        id: 'previewMedia_video_camera',
        func: (apiIndex) => {
          TestConsole.consoleTest('previewMedia_video_camera')
          Taro.chooseVideo({
            sourceType: ['camera'],
            maxDuration: 60,
            camera: 'back',
            success: (res) => {
              TestConsole.consoleNormal('chooseVideo success ', res)
              Taro.previewMedia({
                sources: [
                  {
                    url: res.tempFilePath,
                    type: 'video',
                    poster: 'test_video',
                  },
                ],
                success: (res) => {
                  TestConsole.consoleSuccess.call(this, res, apiIndex)
                },
                fail: (res) => {
                  TestConsole.consoleFail.call(this, res, apiIndex)
                },
                complete: (res) => {
                  TestConsole.consoleComplete.call(this, res, apiIndex)
                },
              }).then((res) => {
                TestConsole.consoleReturn.call(this, res, apiIndex)
              })
            },
            fail: (err) => {
              TestConsole.consoleNormal('chooseVideo fail:', err)
            },
            complete: (com) => {
              TestConsole.consoleNormal('chooseVideo complete', com)
            },
          }).then((ret) => {
            TestConsole.consoleNormal('chooseVideo return', ret)
          })
        },
      },
    ],
    imgTempFilePaths: null,
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
})

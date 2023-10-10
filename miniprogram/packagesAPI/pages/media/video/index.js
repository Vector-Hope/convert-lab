// packagesAPI/pages/media/video/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'saveVideoToPhotosAlbum',
        func: (data = {}) => {
          const { videoTempPath } = that.data;
          if (!videoTempPath) {
            wx.showToast({
              title: '请先选择视频',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          return new Promise((resolve) => {
            const callback = {};
            wx.saveVideoToPhotosAlbum({
              filePath: videoTempPath,
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
            });
          });
        },
        isDone: true,
      },
      {
        id: 'openVideoEditor_暂不支持',
        func: (data) => {
          TestConsole.consoleTest('openVideoEditor');
          Taro.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success: (res) => {
              Taro.openVideoEditor({
                filePath: res.tempFilePath,
                success: (res) => {
                  TestConsole.consoleSuccess.call(this, res, apiIndex);
                },
                fail: (res) => {
                  TestConsole.consoleFail.call(this, res, apiIndex);
                },
                complete: (res) => {
                  TestConsole.consoleComplete.call(this, res, apiIndex);
                },
              }).then((res) => {
                TestConsole.consoleReturn.call(this, res, apiIndex);
              });
            },
            fail: (err) => {
              TestConsole.consoleNormal('chooseVideo fail:', err);
            },
            complete: (com) => {
              TestConsole.consoleNormal('chooseVideo complete', com);
            },
          }).then((ret) => {
            TestConsole.consoleNormal('chooseVideo return', ret);
          });
        },
      },
      {
        id: 'getVideoInfo',
        func: (data = {}) => {
          const { videoTempPath } = that.data;
          if (!videoTempPath) {
            wx.showToast({
              title: '请先选择视频',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          return new Promise((resolve) => {
            const callback = {};
            wx.getVideoInfo({
              src: videoTempPath,
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
            });
          });
        },
      },
      {
        id: 'compressVideo_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('compressVideo');
          Taro.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            compressed: false,
            success: (res) => {
              Taro.compressVideo({
                src: res.tempFilePath,
                quality: 'high',
                bitrate: 1032,
                fps: 24,
                resolution: 0.5,
                success: (res) => {
                  TestConsole.consoleSuccess.call(this, res, apiIndex);
                },
                fail: (res) => {
                  TestConsole.consoleFail.call(this, res, apiIndex);
                },
                complete: (res) => {
                  TestConsole.consoleComplete.call(this, res, apiIndex);
                },
              }).then((res) => {
                TestConsole.consoleReturn.call(this, res, apiIndex);
              });
            },
            fail: (err) => {
              TestConsole.consoleNormal('chooseVideo fail:', err);
            },
            complete: (com) => {
              TestConsole.consoleNormal('chooseVideo complete', com);
            },
          }).then((ret) => {
            TestConsole.consoleNormal('chooseVideo return', ret);
          });
        },
      },
      {
        id: 'chooseVideo',
        inputData: {
          camera: 'back',
          compressed: false,
          sourceType: ['album', 'camera'],
          maxDuration: 30,
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.chooseVideo({
              ...data,
              success: (res) => {
                that.setData({
                  videoTempPath: res.tempFilePath,
                });
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({ callback });
              },
            });
          });
        },
      },
      {
        id: 'chooseMedia',
        inputData: {
          count: 1,
          mediaType: ['video'],
          sourceType: ['album', 'camera'],
          maxDuration: 30,
          sizeType: ['original', 'compressed'],
          camera: 'back',
          mediaId: '',
        },
        func: (data = {}) => {
          return new Promise((resolve) => {
            const callback = {};
            wx.chooseMedia({
              ...data,
              success: (res) => {
                that.setData({
                  videoTempPath: res.tempFiles[0].tempFilePath,
                });
                callback['success'] = res;
              },
              fail: (res) => {
                callback['fail'] = res;
              },
              complete: (res) => {
                callback['complete'] = res;
                resolve({ callback });
              },
            });
          });
        },
        isDone: true,
      },
      {
        id: 'createVideoContext',
        func: (data = {}) => {
          const { videoTempPath } = that.data;
          if (!videoTempPath) {
            wx.showToast({
              title: '请先选择视频',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          const videoContext = wx.createVideoContext('myVideo');
          console.log(videoContext);
          that.setData({
            videoContext,
          });
          return { callback: videoContext };
        },
        isDone: true,
      },
      {
        id: 'video_exitBackgroundPlayback_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_exitBackgroundPlayback');
          videoContext.exitBackgroundPlayback();
          TestConsole.consoleNormal('exitBackgroundPlayback');
        },
      },
      {
        id: 'video_exitFullScreen',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_exitFullScreen');
          videoContext.exitFullScreen();
          TestConsole.consoleNormal('exitFullScreen');
        },
      },
      {
        id: 'video_exitPictureInPicture_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_exitPictureInPicture');
          videoContext
            .exitPictureInPicture({
              success: (res) => {
                TestConsole.consoleSuccess.call(this, res, apiIndex);
              },
              fail: (res) => {
                TestConsole.consoleFail.call(this, res, apiIndex);
              },
              complete: (res) => {
                TestConsole.consoleComplete.call(this, res, apiIndex);
              },
            })
            .then((res) => {
              TestConsole.consoleReturn.call(this, res, apiIndex);
            });
        },
      },
      {
        id: 'video_hideStatusBar_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_hideStatusBar');
          videoContext.hideStatusBar();
          TestConsole.consoleNormal('hideStatusBar');
        },
      },
      {
        id: 'video.pause',
        func: (data = {}) => {
          const { videoContext } = that.data;
          videoContext.pause();
          return {};
        },
        isDone: true,
      },
      {
        id: 'video.play',
        func: (data = {}) => {
          const { videoContext } = that.data;
          videoContext.play();
          return {};
        },
        isDone: true,
      },
      {
        id: 'video_playbackRate_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_playbackRate');
          videoContext.playbackRate(1.5);
          TestConsole.consoleNormal('playbackRate');
        },
      },
      {
        id: 'video_requestBackgroundPlayback_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_requestBackgroundPlayback');
          videoContext.requestBackgroundPlayback();
          TestConsole.consoleNormal('requestBackgroundPlayback');
        },
      },
      {
        id: 'video.requestFullScreen',
        inputData: {
          direction: 0,
        },
        func: (data = {}) => {
          const { videoContext } = that.data;
          videoContext.requestFullScreen({
            ...data,
          });
          return {};
        },
        isDone: true,
      },
      {
        id: 'video_seek',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_seek');
          videoContext.seek(5);
          TestConsole.consoleNormal('seek');
        },
      },
      {
        id: 'video_sendDanmu_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_sendDanmu');
          videoContext.sendDanmu({
            text: '测试弹幕',
            color: '#FFF',
          });
          TestConsole.consoleNormal('sendDanmu');
        },
      },
      {
        id: 'video_showStatusBar_暂不支持',
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_showStatusBar');
          videoContext.showStatusBar();
          TestConsole.consoleNormal('showStatusBar');
        },
      },
      {
        id: 'video_stop',
        func: (data = {}) => {
          const { videoContext } = that.data;
          videoContext.stop();
          return {};
        },
        isDone: true,
      },
    ],
    videoTempPath: null,
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
});

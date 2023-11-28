// packagesAPI/pages/media/video/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      saveVideoToPhotosAlbum: {
        func: (data = {}, id) => {
          const { videoTempPath } = that.data;
          if (!videoTempPath) {
            wx.showToast({
              title: '请先选择视频',
            });
            return true;
          }
          let callback = {};
            wx.saveVideoToPhotosAlbum({
              filePath: videoTempPath,
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
      openVideoEditor: {
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
      getVideoInfo: {
        func: (data = {}, id) => {
          const { videoTempPath } = that.data;
          if (!videoTempPath) {
            wx.showToast({
              title: '请先选择视频',
            });
            return true;
          }
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
              that.setCallback(id, {...callback, complete: res});
            },
            });
        },
      },
      compressVideo: {
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
      chooseVideo: {
        inputData: {
          camera: 'back',
          compressed: false,
          sourceType: ['album', 'camera'],
          maxDuration: 30,
        },
        func: (data = {}, id) => {
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
      chooseMedia: {
        inputData: {
          count: 1,
          mediaType: ['video'],
          sourceType: ['album', 'camera'],
          maxDuration: 30,
          sizeType: ['original', 'compressed'],
          camera: 'back',
          mediaId: '',
        },
        func: (data = {}, id) => {
          let callback = {};
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
              that.setCallback(id, {...callback, complete: res});
            },
          });
        },
        isDone: true,
      },
      createVideoContext: {
        func: (data = {}, id) => {
          const { videoTempPath } = that.data;
          if (!videoTempPath) {
            wx.showToast({
              title: '请先选择视频',
            });
            return true;
          }
          const videoContext = wx.createVideoContext('myVideo');
          console.log(videoContext);
          that.setData({
            videoContext,
          });
          that.setCallback(id, videoContext);
        },
        isDone: true,
      },
      video_exitBackgroundPlayback: {
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_exitBackgroundPlayback');
          videoContext.exitBackgroundPlayback();
          TestConsole.consoleNormal('exitBackgroundPlayback');
        },
      },
      video_exitFullScreen: {
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_exitFullScreen');
          videoContext.exitFullScreen();
          TestConsole.consoleNormal('exitFullScreen');
        },
      },
      video_exitPictureInPicture: {
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
      video_hideStatusBar: {
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_hideStatusBar');
          videoContext.hideStatusBar();
          TestConsole.consoleNormal('hideStatusBar');
        },
      },
      video_pause: {
        func: (data = {}, id) => {
          const { videoContext } = that.data;
          videoContext.pause();
        },
        isDone: true,
      },
      video_play: {
        func: (data = {}, id) => {
          const { videoContext } = that.data;
          videoContext.play();
        },
        isDone: true,
      },
      video_playbackRate: {
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_playbackRate');
          videoContext.playbackRate(1.5);
          TestConsole.consoleNormal('playbackRate');
        },
      },
      video_requestBackgroundPlayback: {
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_requestBackgroundPlayback');
          videoContext.requestBackgroundPlayback();
          TestConsole.consoleNormal('requestBackgroundPlayback');
        },
      },
      video_requestFullScreen: {
        inputData: {
          direction: 0,
        },
        func: (data = {}, id) => {
          const { videoContext } = that.data;
          videoContext.requestFullScreen({
            ...data,
          });
        },
        isDone: true,
      },
      video_seek: {
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_seek');
          videoContext.seek(5);
          TestConsole.consoleNormal('seek');
        },
      },
      video_sendDanmu: {
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_sendDanmu');
          videoContext.sendDanmu({
            text: '测试弹幕',
            color: '#FFF',
          });
          TestConsole.consoleNormal('sendDanmu');
        },
      },
      video_showStatusBar: {
        func: (apiIndex) => {
          TestConsole.consoleTest('videoContext_showStatusBar');
          videoContext.showStatusBar();
          TestConsole.consoleNormal('showStatusBar');
        },
      },
      video_stop: {
        func: (data = {}, id) => {
          const { videoContext } = that.data;
          videoContext.stop();
        },
        isDone: true,
      },
  },
    videoTempPath: null,
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

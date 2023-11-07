// packagesAPI/pages/media/recording/index.js
import {formatTime} from '../../../../utils/util'
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'stopRecord',
        func: (data = {}) => {
          Taro.stopRecord()
        },
      },
      {
        id: 'startRecord',
        func: (data = {}) => {
          this.setState({
            recording: true,
          })
          const options = {
            duration: 50000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 192000,
            format: 'aac',
            frameSize: 50,
          }
          Taro.startRecord(options)
        },
      },
      {
        id: 'getRecoederManager',
        func: (data = {}) => {
          const recorderManager = wx.getRecorderManager();
          wx.showToast({
            title: '先添加所有监听',
          })
          that.setData({
            recorderManager,
          })
          return {
            callback: recorderManager,
            isShowToast: true
          }
        },
        isDone: true
      },
      {
        id: 'recorderManager.start',
        inputData: {
          duration: 50000,
          sampleRate: 44100,
          numberOfChannels: 1,
          encodeBitRate: 192000,
          format: 'aac',
          frameSize: 50,
        },
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          recorderManager.start();
          return {};
        },
        isDone: true,
      },
      {
        id: 'recorderManager.stop',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          recorderManager.stop();
          return {};
        },
        isDone: true,
      },

      {
        id: 'recorderManager.pause',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          recorderManager.pause();
          return {};
        },
        isDone: true,
      },
      {
        id: 'recorderManager.resume',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          recorderManager.resume();
          return {};
        },
        isDone: true,
      },
      {
        id: 'recorderManager.onError',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          return new Promise ((resolve) => {
            let isFirstListen = true;
            recorderManager.onError((res) => {
              if (!isFirstListen) {
                console.log('test API: recorderManager.onError');
                console.log(res);
              }
              isFirstListen = false;
              resolve({callback: res});
            })
          })
        },
        isDone: true,
      },
      {
        id: 'recorderManager.onFrameRecorded',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          return new Promise ((resolve) => {
            let isFirstListen = true;
            recorderManager.onFrameRecorded((res) => {
              if (!isFirstListen) {
                console.log('test API: recorderManager.onFrameRecorded');
                console.log(res);
              }
              isFirstListen = false;
              resolve({callback: res});
            })
          })
        },
        isDone: true,
      },
      {
        id: 'recorderManager.onInterruptionBegin',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          return new Promise ((resolve) => {
            let isFirstListen = true;
            recorderManager.onInterruptionBegin((res) => {
              if (!isFirstListen) {
                console.log('test API: recorderManager.onInterruptionBegin');
                console.log(res);
              }
              isFirstListen = false;
              resolve({callback: res});
            })
          })
        },
        isDone: true,
      },
      {
        id: 'recorderManager.onInterruptionEnd',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          return new Promise ((resolve) => {
            let isFirstListen = true;
            recorderManager.onInterruptionEnd((res) => {
              if (!isFirstListen) {
                console.log('test API: recorderManager.onInterruptionEnd');
                console.log(res);
              }
              isFirstListen = false;
              resolve({callback: res});
            })
          })
        },
        isDone: true,
      },
      {
        id: 'recorderManager.onPause',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          return new Promise ((resolve) => {
            let isFirstListen = true;
            recorderManager.onPause((res) => {
              that.stopTimer();
              if (!isFirstListen) {
                console.log('test API: recorderManager.onPause');
                console.log(res);
              }
              isFirstListen = false;
              resolve({callback: res});
            })
          })
        },
        isDone: true,
      },
      {
        id: 'recorderManager.onResume',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          return new Promise ((resolve) => {
            let isFirstListen = true;
            recorderManager.onResume((res) => {
              that.startTimer();
              if (!isFirstListen) {
                console.log('test API: recorderManager.onResume');
                console.log(res);
              }
              isFirstListen = false;
              resolve({callback: res});
            })
          })
        },
        isDone: true,
      },
      {
        id: 'recorderManager.onStart',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          return new Promise ((resolve) => {
            let isFirstListen = true;
            recorderManager.onStart((res) => {
              that.setData({
                recordTime: 0
              })
              that.startTimer();
              if (!isFirstListen) {
                console.log('test API: recorderManager.onStart');
                console.log(res);
              }
              isFirstListen = false;
              resolve({callback: res});
            })
          })
        },
        isDone: true,
      },
      {
        id: 'recorderManager.onStop',
        func: (data = {}) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return {
              isShowToast: true,
            }
          }
          return new Promise ((resolve) => {
            let isFirstListen = true;
            that.setData({
              formatedRecordTime: '00:00:00',
            })
            recorderManager.onStop((res) => {
              that.stopTimer();
              if (!isFirstListen) {
                console.log('test API: recorderManager.onStop');
                console.log(res);
              }
              isFirstListen = false;
              that.setData({
                recordFilePath: res.tempFilePath,
              })
              resolve({callback: res});
            })
          })
        },
        isDone: true,
      },
    ],
    recorderManager: null,
    recordTimeInterval: null,
    isRecording: false,
    recordTime: 0,
    formatedRecordTime: '00:00:00',
    recordFilePath: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
  },
  startTimer() {
    let {recordTimeInterval} = that.data;
    // 录音时长记录 每秒刷新
    if (recordTimeInterval) {
      clearInterval(recordTimeInterval);
    }
    recordTimeInterval = setInterval(() => {
      const {recordTime} = that.data;
      that.setData({
        formatedRecordTime: formatTime(recordTime + 1),
        recordTime: recordTime + 1,
      })
    }, 1000);
    that.setData({
      isRecording: true,
      recordTimeInterval,
    })
  },
  stopTimer() {
    const {recordTimeInterval} = that.data;
    // 清除录音计时器
    clearInterval(recordTimeInterval);
    console.log('stop');
    that.setData({
      isRecording: false,
      recordTimeInterval: null,
    })
  }
});

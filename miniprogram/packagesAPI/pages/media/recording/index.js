// packagesAPI/pages/media/recording/index.js
import {formatTime} from '../../../../utils/util';
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      stopRecord: {
        func: (data = {}, id) => {
          Taro.stopRecord()
        },
      },
      startRecord: {
        func: (data = {}, id) => {
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
      getRecoederManager: {
        func: (data = {}, id) => {
          const recorderManager = wx.getRecorderManager();
          wx.showToast({
            title: '先添加所有监听',
          })
          that.setData({
            recorderManager,
          })
          that.setCallback(id, recorderManager);
          return true;
        },
        isDone: true
      },
      recorderManager_start: {
        inputData: {
          duration: 50000,
          sampleRate: 44100,
          numberOfChannels: 1,
          encodeBitRate: 192000,
          format: 'aac',
          frameSize: 50,
        },
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.start();
        },
        isDone: true,
      },
      recorderManager_stop: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.stop();
        },
        isDone: true,
      },

      recorderManager_pause: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.pause();
        },
        isDone: true,
      },
      recorderManager_resume: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.resume();
        },
        isDone: true,
      },
      recorderManager_onError: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.onError((res) => {
            that.setCallback(id, res);
          })

        },
        isDone: true,
      },
      recorderManager_onFrameRecorded: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.onFrameRecorded((res) => {
            that.setCallback(id, res);
          })
        },
        isDone: true,
      },
      recorderManager_onInterruptionBegin: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.onInterruptionBegin((res) => {
            that.setCallback(id, res);
          })
        },
        isDone: true,
      },
      recorderManager_onInterruptionEnd: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.onInterruptionEnd((res) => {
            that.setCallback(id, res);
          })
        },
        isDone: true,
      },
      recorderManager_onPause: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.onPause((res) => {
            that.setCallback(id, res);
          })
        },
        isDone: true,
      },
      recorderManager_onResume: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.onResume((res) => {
            that.setCallback(id, res);
          })
        },
        isDone: true,
      },
      recorderManager_onStart: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.onStart((res) => {
            that.setCallback(id, res);
          })
        },
        isDone: true,
      },
      recorderManager_onStop: {
        func: (data = {}, id) => {
          const {recorderManager} = that.data;
          if (!recorderManager) {
            wx.showToast({
              title: '请创建录音',
            })
            return true;
          }
          recorderManager.onStop((res) => {
            that.setCallback(id, res);
          })
        },
        isDone: true,
      },
  },
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

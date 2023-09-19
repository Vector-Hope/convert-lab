// packagesAPI/pages/canvas/index.js
let that
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canvasImg: '../../../image/defaultImg.png',
    canvasId: 'myCanvas',
    canvas: null,
    obj: {},
    list: [
      {
        id: 'createCanvasContext',
        func: (data = {}) => {
          const { canvasId } = that.data
          const canvas = wx.createCanvasContext(canvasId)
          that.setData({
            canvas: canvas,
          })

          wx.showToast({
            title: '创建画布成功',
          })
          return {
            isShowToast: true,
            callback: canvas,
          }
        },
        isDone: true,
      },
      {
        id: 'canvasToTempFilePath',
        inputData: {
          x: 0,
          y: 0,
          width: 190,
          height: 150,
          destWidth: 100,
          destHeight: 100,
          quality: 1,
          fileType: 'png',
        },
        func: (data = {}) => {
          const { canvasId } = that.data
          const callback = {}
          return new Promise((resolve) => {
            wx.canvasToTempFilePath({
              canvasId: canvasId,
              ...data,
              success: (res) => {
                that.setData({
                  canvasImg: res.tempFilePath,
                })
                callback['success'] = res
              },
              fail: (res) => {
                callback['fail'] = res
              },
              complete: (res) => {
                callback['complete'] = res
                resolve({
                  callback,
                })
              },
            })
          })
        },
        isDone: true,
      },
      {
        id: 'CanvasContext.arc',
        inputData: {
          x: 100,
          y: 75,
          r: 50,
          sAngle: 0,
          eAngle: 2 * Math.PI,
          counterclockwise: false,
        },
        func: (data = {}) => {
          const { canvas } = that.data
          canvas.setStrokeStyle('#152611')
          canvas.setFontSize(24)

          canvas.setTextBaseline('top')
          canvas.setTextAlign('center')
          canvas.setGlobalAlpha(0.6)
          canvas.setLineCap('round')
          canvas.setLineDash([5, 5], 5)
          canvas.setLineJoin('miter')
          canvas.setMiterLimit(1)

          canvas.setLineWidth(6)
          const linearGrd = canvas.createLinearGradient(0, 0, 100, 0)
          linearGrd.addColorStop(0, '#751e9a')
          linearGrd.addColorStop(1, '#2e7911')
          canvas.setFillStyle(linearGrd)
          canvas.rect(20, 120, 20, 30)
          canvas.fill()
          canvas.save()
          canvas.beginPath()
          canvas.arc(140, 100, 25, 0, 2 * Math.PI)
          canvas.clip()
          canvas.drawImage('../../../image/defaultIcon.png', 0, 0, 100, 100, 115, 75, 50, 50)
          canvas.restore()
          canvas.beginPath()
          canvas.arc(90, 90, 20, 0, 2 * Math.PI, false)
          canvas.closePath()
          canvas.stroke()

          canvas.setLineDash([0, 0], 0)
          canvas.setLineWidth(10)
          canvas.moveTo(20, 20)
          const circGrd = canvas.createCircularGradient(75, 50, 50)
          circGrd.addColorStop(0, '#2e4d1a')
          circGrd.addColorStop(1, '#8b6c91')
          canvas.setFillStyle(circGrd)
          canvas.fillRect(10, 10, 150, 80)
          canvas.stroke()
          canvas.setLineWidth(2)

          canvas.setShadow(10, 10, 10, 'blue')
          canvas.strokeRect(10, 10, 150, 80)
          canvas.arcTo(150, 20, 150, 70, 50)
          canvas.bezierCurveTo(20, 50, 100, 50, 100, 20)
          canvas.clearRect(80, 10, 30, 50)
          canvas.fillText('text', 50, 30, 100)
          canvas.strokeText('stroke', 50, 100, 100)
          const pattern = canvas.createPattern('../../../image/defaultIcon.png', 'repeat')
          canvas.setFillStyle(pattern)
          canvas.fillRect(0, 0, 190, 80)
          canvas.stroke()
          canvas.setTransform(0.8, 0.1, 0.1, 0.8, 10, 10)
          canvas.quadraticCurveTo(100, 100, 100, 20)
          canvas.rotate((10 * Math.PI) / 180)
          canvas.scale(1.2, 1.2)
          canvas.transform(1.2, -0.1, -0.1, 1.2, 10, 10)
          canvas.translate(-10, -10)

          const measure = canvas.measureText('measureText')
          canvas.stroke()
          canvas.draw()
          return {
            callback: {
              measureText: measure,
            },
          }
        },
        isDone: true,
      },
      {
        id: 'createOffscreenCanvas',
        func: null,
      },
      {
        id: 'canvasPutImageData',
        func: null,
      },
      {
        id: 'canvasGetImageData',
        func: null,
      },
      {
        id: 'Canvas',
        func: null,
      },
      {
        id: 'CanvasGradient',
        func: null,
      },
      {
        id: 'Color',
        func: null,
      },
      {
        id: 'Image',
        func: null,
      },
      {
        id: 'ImageData',
        func: null,
      },
      {
        id: 'OffscreenCanvas',
        func: null,
      },
      {
        id: 'Path2D',
        func: null,
      },
      {
        id: 'RenderingContext',
        func: null,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this
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

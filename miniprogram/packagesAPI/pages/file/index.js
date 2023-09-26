// packagesAPI/pages/file/index.js
Page({
  data: {
    canvas: null,
  },
  drawSomething(e) {
    const canvas = wx.createCanvasContext('myCanvas')
    canvas.beginPath()
    canvas.moveTo(10, 10)
    canvas.lineTo(10, 60)
    canvas.lineTo(60, 35)
    canvas.lineTo(10, 10)
    canvas.stroke()
    canvas.draw(true)
    this.setData({
      canvas,
    })
  },
  transform(e) {
    const { canvas } = this.data
    canvas.beginPath()
    canvas.moveTo(10, 10)
    canvas.lineTo(10, 60)
    canvas.lineTo(60, 35)
    canvas.lineTo(10, 10)
    canvas.transform(0.8, 0.1, 0.2, 0.9, 10, 20)
    canvas.stroke()
    canvas.draw(true)
  },
  setTransform(e) {
    const { canvas } = this.data
    canvas.beginPath()
    canvas.moveTo(10, 10)
    canvas.lineTo(10, 60)
    canvas.lineTo(60, 35)
    canvas.lineTo(10, 10)
    canvas.setTransform(1.2, 0.2, 0.2, 0.9, 10, 20)
    canvas.stroke()
    canvas.draw(true)
  },
})

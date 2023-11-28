// packagesAPI/pages/canvas/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canvasImg: '',
    canvasId: 'myCanvas',
    canvas: null,
    imageTempPath: '',
    list: {
      createCanvasContext: {
        func: (data = {}, id) => {
          const { canvasId } = that.data;
          const canvas = wx.createCanvasContext(canvasId);
          wx.downloadFile({
            url: 'http://www.baidu.com/img/bdlogo.png',
            success: (res) => {
              that.setData({
                imageTempPath: res.tempFilePath,
                canvas: canvas,
              });
              wx.showToast({
                title: '创建画布成功',
              });
            },
            fail: (res) => {
              console.log(res);
              that.setData({
                canvas: canvas,
              });
            },
          });
          that.setCallback(id, canvas);
          return true;
        },
        isDone: true,
      },
      CanvasContext_set: {
        inputData: {
          fillStyle: '#751e9a',
          fontSize: 24,
          globalAlpha: 0.6,
          lineCap: 'round',
          lineJoin: 'miter',
          lineWidth: 10,
          miterLimit: 1,
          shadow: {
            offX: 10,
            offY: 10,
            blur: 10,
            color: '#152611',
          },
          strokeStyle: '#751e9a',
          textAlign: 'center',
          textBaseline: 'top',
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const {
            fillStyle,
            fontSize,
            globalAlpha,
            lineCap,
            lineJoin,
            lineWidth,
            miterLimit,
            shadow,
            strokeStyle,
            textAlign,
            textBaseline,
          } = data;
          canvas.setFillStyle(fillStyle);
          canvas.setFontSize(fontSize);
          canvas.setGlobalAlpha(globalAlpha);
          canvas.setLineCap(lineCap);
          canvas.setLineJoin(lineJoin);
          canvas.setLineWidth(lineWidth);
          canvas.setMiterLimit(miterLimit);
          canvas.setShadow(shadow.offX, shadow.offY, shadow.blur, shadow.color);
          canvas.setStrokeStyle(strokeStyle);
          canvas.setTextAlign(textAlign);
          canvas.setTextBaseline(textBaseline);
          wx.showToast({
            title: '请继续作画',
          });
          that.setCallback(id, canvas);
          return true;
        },
        isDone: true,
      },
      CanvasContext_setLineDash: {
        inputData: {
          pattern: [5, 5],
          offset: 4,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { pattern, offset } = data;
          canvas.setLineDash(pattern, offset);
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_setTransform: {
        inputData: {
          scaleX: 0.8,
          skewX: 0.1,
          scaleY: 0.8,
          skewY: 0.1,
          tranX: 10,
          tranY: 10,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { scaleX, skewX, scaleY, skewY, tranX, tranY } = data;
          canvas.setTransform(scaleX, skewX, scaleY, skewY, tranX, tranY);
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
      },
      CanvasContext_arc: {
        inputData: {
          x: 100,
          y: 75,
          r: 50,
          sAngle: 0,
          eAngle: 2 * Math.PI,
          counterclockwise: false,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x, y, r, sAngle, eAngle, counterclockwise } = data;
          canvas.beginPath();
          canvas.arc(x, y, r, sAngle, eAngle, counterclockwise);
          canvas.stroke();
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_arcTo: {
        inputData: {
          x1: 150,
          y1: 20,
          x2: 150,
          y2: 70,
          radius: 50,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x1, y1, x2, y2, radius } = data;
          canvas.beginPath();
          canvas.moveTo(20, 20);
          canvas.lineTo(100, 20);
          canvas.arcTo(x1, y1, x2, y2, radius);
          canvas.stroke();
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_bezierCurveTo: {
        inputData: {
          cp1x: 20,
          cp1y: 100,
          cp2x: 100,
          cp2y: 100,
          x: 100,
          y: 20,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { cp1x, cp1y, cp2x, cp2y, x, y } = data;
          canvas.beginPath();
          canvas.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
          canvas.closePath();
          canvas.stroke();
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_strokeRect: {
        inputData: {
          x: 20,
          y: 20,
          width: 100,
          height: 40,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x, y, width, height } = data;
          canvas.beginPath();
          canvas.strokeRect(x, y, width, height);
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_fillRect: {
        inputData: {
          x: 20,
          y: 20,
          width: 100,
          height: 40,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x, y, width, height } = data;
          canvas.beginPath();
          canvas.fillRect(x, y, width, height);
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_clearRect: {
        inputData: {
          x: 20,
          y: 20,
          width: 100,
          height: 40,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x, y, width, height } = data;
          canvas.beginPath();
          canvas.clearRect(x, y, width, height);
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_save: {
        func: (data = {}, id) => {
          const { canvas } = that.data;
          canvas.save();
          wx.showToast({
            title: '保存绘画上下文',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_clip: {
        func: (data = {}, id) => {
          const { canvas } = that.data;
          canvas.beginPath();
          canvas.arc(100, 100, 50, 0, 2 * Math.PI);
          canvas.clip();
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_restore: {
        func: (data = {}, id) => {
          const { canvas } = that.data;
          canvas.restore();
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_createCircularGradient: {
        inputData: {
          x: 75,
          y: 50,
          r: 50,
          colorStop: [
            {
              stop: 0,
              color: '#129a7e',
            },
            {
              stop: 0.5,
              color: '#e2a77e',
            },
            {
              stop: 1,
              color: '#9ba118',
            },
          ],
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x, y, r, colorStop } = data;
          const circGrd = canvas.createCircularGradient(x, y, r);
          colorStop.forEach((item) => {
            circGrd.addColorStop(item.stop, item.color);
          });
          canvas.setFillStyle(circGrd);
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_createLinearGradient: {
        inputData: {
          x0: 0,
          y0: 0,
          x1: 200,
          y1: 0,
          colorStop: [
            {
              stop: 0,
              color: '#129a7e',
            },
            {
              stop: 0.5,
              color: '#e2a77e',
            },
            {
              stop: 1,
              color: '#9ba118',
            },
          ],
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x0, y0, x1, y1, colorStop } = data;
          const lineGrd = canvas.createLinearGradient(x0, y0, x1, y1);
          colorStop.forEach((item) => {
            lineGrd.addColorStop(item.stop, item.color);
          });
          canvas.setFillStyle(lineGrd);
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_createPattern: {
        inputData: {
          repetition: 'repeat',
        },
        func: async (data = {}, id) => {
          const { canvas, imageTempPath } = that.data;
          if (!imageTempPath) {
            wx.showToast({
              title: '无image进行作画',
            });
            return {
              isShowToast: true,
            };
          }
          const { repetition } = data;
          const pattern = await canvas.createPattern(imageTempPath, repetition);
          canvas.fillStyle = pattern;
          wx.showToast({
            title: '请继续作画',
          });
          that.setCallback(id, canvas);
          return true;
        },
        isDone: true,
      },
      CanvasContext_drawImage: {
        inputData: {
          sx: 0,
          sy: 0,
          sWidth: 540,
          sHeight: 258,
          dx: 0,
          dy: 0,
          dWidth: 150,
          dHeight: 100,
        },
        func: (data = {}, id) => {
          const { canvas, imageTempPath } = that.data;
          if (!imageTempPath) {
            wx.showToast({
              title: '无image进行作画',
            });
            return {
              isShowToast: true,
            };
          }
          const { sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight } = data;
          canvas.drawImage(imageTempPath, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_fill: {
        inputData: {
          points: [
            {
              x: 100,
              y: 10,
            },
            {
              x: 50,
              y: 100,
            },
            {
              x: 60,
              y: 90,
            },
          ],
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { points } = data;
          canvas.moveTo(10, 10);
          points.forEach((point) => {
            canvas.lineTo(point.x, point.y);
          });
          canvas.fill();
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_fillText: {
        inputData: {
          text: 'Hello word',
          x: 10,
          y: 50,
          maxWidth: 500,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { text, x, y, maxWidth } = data;
          canvas.fillText(text, x, y, maxWidth);
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_measureText: {
        inputData: {
          text: 'hello word',
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { text } = data;
          const textWidth = canvas.measureText(text);
          that.setCallback(id, {
            actualBoundingBoxAscent: textWidth.actualBoundingBoxAscent,
            actualBoundingBoxDescent: textWidth.actualBoundingBoxDescent,
            actualBoundingBoxLeft: textWidth.actualBoundingBoxLeft,
            actualBoundingBoxRight: textWidth.actualBoundingBoxRight,
            fontBoundingBoxAscent: textWidth.fontBoundingBoxAscent,
            fontBoundingBoxDescent: textWidth.fontBoundingBoxDescent,
            width: textWidth.width,
          });
        },
        isDone: true,
      },
      CanvasContext_moveTo: {
        inputData: {
          x: 20,
          y: 20,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x, y } = data;
          canvas.moveTo(x, y);
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_lineTo: {
        inputData: {
          beginPosition: {
            x: 10,
            y: 10,
          },
          points: [
            {
              x: 10,
              y: 50,
            },
            {
              x: 60,
              y: 70,
            },
          ],
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { beginPosition, points } = data;
          canvas.moveTo(beginPosition.x, beginPosition.y);
          points.forEach((point) => {
            canvas.lineTo(point.x, point.y);
          });
          canvas.stroke();
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_quadraticCurveTo: {
        inputData: {
          cpx: 20,
          cpy: 100,
          x: 150,
          y: 20,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { cpx, cpy, x, y } = data;
          canvas.quadraticCurveTo(cpx, cpy, x, y);
          canvas.stroke();
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_rect: {
        inputData: {
          x: 20,
          y: 20,
          width: 100,
          height: 40,
          fill: false,
          stroke: true,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x, y, width, height, fill, stroke } = data;
          if (fill) {
            canvas.rect(x, y, width, height);
            canvas.fill();
          } else if (stroke) {
            canvas.rect(x, y, width, height);
            canvas.stroke();
          } else {
            wx.showToast({
              title: '请选择填充或描边',
            });
            return true;
          }
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_rotate: {
        inputData: {
          rotate: (20 * Math.PI) / 180,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { rotate } = data;
          canvas.rotate(rotate);
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_scale: {
        inputData: {
          scaleWidth: 2,
          scaleHeight: 2,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { scaleWidth, scaleHeight } = data;
          canvas.scale(scaleWidth, scaleHeight);
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },
      CanvasContext_strokeText: {
        inputData: {
          text: 'hello word',
          x: 10,
          y: 50,
          maxWidth: 500,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { text, x, y, maxWidth } = data;
          canvas.strokeText(text, x, y, maxWidth);
          canvas.draw(true, (res) => {
            that.setCallback(id, res);
          });
        },
        isDone: true,
      },
      CanvasContext_transform: {
        inputData: {
          scaleX: 1,
          scaleY: 0.5,
          skewX: -0.5,
          skewY: 1,
          translateX: 20,
          translateY: 10,
        },
        func: (data = {}, id) => {},
      },
      CanvasContext_translate: {
        inputData: {
          x: 20,
          y: 20,
        },
        func: (data = {}, id) => {
          const { canvas } = that.data;
          const { x, y } = data;
          canvas.translate(x, y);
          wx.showToast({
            title: '请继续作画',
          });
          return true;
        },
        isDone: true,
      },

      canvasToTempFilePath: {
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
        func: (data = {}, id) => {
          const { canvasId } = that.data;
          let callback = {};
            wx.canvasToTempFilePath({
              canvasId: canvasId,
              ...data,
              success: (res) => {
                that.setData({
                  canvasImg: res.tempFilePath,
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
      createOffscreenCanvas: {
        func: null,
      },
      canvasPutImageData: {
        func: null,
      },
      canvasGetImageData: {
        func: null,
      },
      Canvas: {
        func: null,
      },
      CanvasGradient: {
        func: null,
      },
      Color: {
        func: null,
      },
      Image: {
        func: null,
      },
      ImageData: {
        func: null,
      },
      OffscreenCanvas: {
        func: null,
      },
      Path2D: {
        func: null,
      },
      RenderingContext: {
        func: null,
      },
    },
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

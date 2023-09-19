// packagesAPI/pages/interface/animation/index.js
let that = null
let animation
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'createAnimation',
        inputData: {
          transformOrigin: '50% 50%',
          duration: 1000,
          timingFunction: 'ease',
          delay: 0,
        },
        func: (data = {}) => {
          const animation = wx.createAnimation(data)
          that.setData({
            animation,
          })
          return {
            callback: animation,
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.opacity',
        inputData: {
          opacity: 0.5,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { opacity } = data
          animation.opacity(opacity).step()
          that.exportAnimationData(`opacity(${opacity})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.backgroundColor',
        inputData: {
          color: '#64bb5c',
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { color } = data
          animation.backgroundColor(color).step()
          that.exportAnimationData(`backgroundColor("${color}")`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.skew',
        inputData: {
          x: 20,
          y: 40,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { x, y } = data
          animation.skew(x, y).step()
          that.exportAnimationData(`skew(${x}, ${y})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.skewX',
        inputData: {
          x: 20,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { x } = data
          animation.skewX(x).step()
          that.exportAnimationData(`skewX(${x})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.skewY',
        inputData: {
          y: 20,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { y } = data
          animation.skewY(y).step()
          that.exportAnimationData(`skewX(${y})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.scale',
        inputData: {
          scaleX: 1.2,
          scaleY: 1.2,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { scaleX, scaleY } = data
          animation.scale(scaleX, scaleY).step()
          that.exportAnimationData(`scale(${scaleX}, ${scaleY})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.scale3d',
        inputData: {
          scaleX: 1.2,
          scaleY: 1.2,
          scaleZ: 1.2,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { scaleX, scaleY, scaleZ } = data
          animation.scale3d(scaleX, scaleY, scaleZ).step()
          that.exportAnimationData(`scale3d(${scaleX}, ${scaleY}, ${scaleZ})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.scaleX',
        inputData: {
          scaleX: 1.2,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { scaleX } = data
          animation.scaleX(scaleX).step()
          that.exportAnimationData(`scaleX(${scaleX})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.scaleY',
        inputData: {
          scaleY: 1.2,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { scaleY } = data
          animation.scaleY(scaleY).step()
          that.exportAnimationData(`scaleY(${scaleY})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.scaleZ',
        inputData: {
          scaleZ: 1.2,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { scaleZ } = data
          animation.scaleZ(scaleZ).step()
          that.exportAnimationData(`scaleZ(${scaleZ})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.rotate',
        inputData: {
          angle: 45,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { angle } = data
          animation.rotate(angle).step()
          that.exportAnimationData(`rotate(${angle})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.rotate3d',
        inputData: {
          x: 0,
          y: 0,
          z: 0,
          angle: 45,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { x, y, z, angle } = data
          animation.rotate3d(x, y, z, angle).step()
          that.exportAnimationData(`rotate3d(${x}, ${y}, ${z}, ${angle})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.rotateX',
        inputData: {
          angle: 45,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { angle } = data
          animation.rotateX(angle).step()
          that.exportAnimationData(`rotateX(${angle})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.rotateY',
        inputData: {
          angle: 45,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { angle } = data
          animation.rotateY(angle).step()
          that.exportAnimationData(`rotateY(${angle})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.rotateZ',
        inputData: {
          angle: 45,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { angle } = data
          animation.rotateZ(angle).step()
          that.exportAnimationData(`rotateZ(${angle})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.translate',
        inputData: {
          x: 20,
          y: 20,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { x, y } = data
          animation.translate(x, y).step()
          that.exportAnimationData(`translate(${x}, ${y})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.translate3d',
        inputData: {
          x: 20,
          y: 20,
          z: 20,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { x, y, z } = data
          animation.translate3d(x, y, z).step()
          that.exportAnimationData(`translate3d(${x}, ${y}, ${z})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.translateX',
        inputData: {
          x: 40,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { x } = data
          animation.translateX(x).step()
          that.exportAnimationData(`translateX(${x}).step()`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.translateY',
        inputData: {
          y: 40,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { y } = data
          animation.translateY(y).step()
          that.exportAnimationData(`translateY(${y}).step()`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.translateZ',
        inputData: {
          z: 40,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { z } = data
          animation.translateZ(z).step()
          that.exportAnimationData(`translateZ(${z}).step()`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.width',
        inputData: {
          width: 200,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { width } = data
          animation.width(width).step()
          that.exportAnimationData(`width(${width})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.height',
        inputData: {
          height: 200,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { height } = data
          animation.height(height).step()
          that.exportAnimationData(`height(${height})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.left',
        inputData: {
          left: 200,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { left } = data
          animation.left(left).step()
          that.exportAnimationData(`width(${left})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.right',
        inputData: {
          right: 200,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { right } = data
          animation.right(right).step()
          that.exportAnimationData(`right(${right})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.top',
        inputData: {
          top: 200,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { top } = data
          animation.top(top).step()
          that.exportAnimationData(`top(${top})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.bottom',
        inputData: {
          bottom: 200,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { bottom } = data
          animation.bottom(bottom).step()
          that.exportAnimationData(`bottom(${bottom})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.matrix',
        inputData: {
          scaleX: 1.2,
          skewY: 0.2,
          skewX: -1,
          scaleY: 0.9,
          translateX: 0,
          translateY: 20,
        },
        func: (data = {}) => {
          const { animation } = that.data
          const { scaleX, skewY, skewX, scaleY, translateX, translateY } = data
          animation.matrix(scaleX, skewY, skewX, scaleY, translateX, translateY).step()
          that.exportAnimationData(`matrix(${scaleX}, ${skewY}, ${skewX}, ${scaleY}, ${translateX}, ${translateY})`)
          return {
            callback: {},
          }
        },
        isDone: true,
      },
      {
        id: 'Animation.matrix3d',
        func: (data = {}) => {
          const { animation } = that.data
          animation.matrix3d(-0.6, 1.3, 0, 0, -2.3, -0.6, 0, 0, 0, 0, 1, 0, 0, 0, 10, 1).step()
          that.exportAnimationData('matrix3d(-0.6, 1.3, 0, 0, -2.3, -0.6, 0, 0, 0, 0, 1, 0, 0, 0, 10, 1).step()')
          return {
            callback: {},
          }
        },
        isDone: true,
      },
    ],
    animation: null,
    animationData: null,
    description: '动画说明',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this
  },
  exportAnimationData(description) {
    this.setData({
      animationData: this.data.animation.export(),
      description: description,
    })
  },
})

// packagesAPI/pages/interface/animation/index.js
let that;
let animation;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {
      createAnimation: {
        inputData: {
          transformOrigin: '50% 50%',
          duration: 1000,
          timingFunction: 'ease',
          delay: 0,
        },
        func: (data = {}, id) => {
          const animation = wx.createAnimation(data);
          that.setData({
            animation,
            animationData: animation.export(),
          });
          that.setCallback(id, animation);
        },
        isDone: true,
      },
      Animation_opacity: {
        inputData: {
          opacity: 0.5,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { opacity } = data;
          animation.opacity(opacity).step();
          that.exportAnimationData(`opacity(${opacity})`);
        },
        isDone: true,
      },
      Animation_step: {
        inputData: {
          step1Opacity: 0.5,
          step2Opacity: 0.3,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { step1Opacity, step2Opacity } = data;
          animation.opacity(step1Opacity).step().opacity(step2Opacity).step();
          that.exportAnimationData(`opacity(${step1Opacity}).step().opacity(${step2Opacity}).step()`);
        },
        isDone: true,
      },
      Animation_backgroundColor: {
        inputData: {
          color: '#64bb5c',
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { color } = data;
          animation.backgroundColor(color).step();
          that.exportAnimationData(`backgroundColor("${color}")`);
        },
        isDone: true,
      },
      Animation_skew: {
        inputData: {
          x: 20,
          y: 40,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { x, y } = data;
          animation.skew(x, y).step();
          that.exportAnimationData(`skew(${x}, ${y})`);
        },
        isDone: true,
      },
      Animation_skewX: {
        inputData: {
          x: 20,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { x } = data;
          animation.skewX(x).step();
          that.exportAnimationData(`skewX(${x})`);
        },
        isDone: true,
      },
      Animation_skewY: {
        inputData: {
          y: 20,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { y } = data;
          animation.skewY(y).step();
          that.exportAnimationData(`skewX(${y})`);
        },
        isDone: true,
      },
      Animation_scale: {
        inputData: {
          scaleX: 1.2,
          scaleY: 1.2,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const value = Object.values(data);
            animation.scale(...value).step();
            that.exportAnimationData(`scale(${value.join(', ')})`);
          
        },
        isDone: true,
      },
      Animation_scale3d: {
        inputData: {
          scaleX: 1.2,
          scaleY: 1.2,
          scaleZ: 1.2,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { scaleX, scaleY, scaleZ } = data;
          animation.scale3d(scaleX, scaleY, scaleZ).step();
          that.exportAnimationData(`scale3d(${scaleX}, ${scaleY}, ${scaleZ})`);
          
        },
        isDone: true,
      },
      Animation_scaleX: {
        inputData: {
          scaleX: 1.2,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { scaleX } = data;
          animation.scaleX(scaleX).step();
          that.exportAnimationData(`scaleX(${scaleX})`);
          
        },
        isDone: true,
      },
      Animation_scaleY: {
        inputData: {
          scaleY: 1.2,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { scaleY } = data;
          animation.scaleY(scaleY).step();
          that.exportAnimationData(`scaleY(${scaleY})`);
          
        },
        isDone: true,
      },
      Animation_scaleZ: {
        inputData: {
          scaleZ: 1.2,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { scaleZ } = data;
          animation.scaleZ(scaleZ).step();
          that.exportAnimationData(`scaleZ(${scaleZ})`);
          
        },
        isDone: true,
      },
      Animation_rotate: {
        inputData: {
          angle: 45,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { angle } = data;
          animation.rotate(angle).step();
          that.exportAnimationData(`rotate(${angle})`);
          
        },
        isDone: true,
      },
      Animation_rotate3d: {
        inputData: {
          x: 0,
          y: 0,
          z: 0,
          angle: 45,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { x, y, z, angle } = data;
          animation.rotate3d(x, y, z, angle).step();
          that.exportAnimationData(`rotate3d(${x}, ${y}, ${z}, ${angle})`);
          
        },
        isDone: true,
      },
      Animation_rotateX: {
        inputData: {
          angle: 45,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { angle } = data;
          animation.rotateX(angle).step();
          that.exportAnimationData(`rotateX(${angle})`);
          
        },
        isDone: true,
      },
      Animation_rotateY: {
        inputData: {
          angle: 45,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { angle } = data;
          animation.rotateY(angle).step();
          that.exportAnimationData(`rotateY(${angle})`);
          
        },
        isDone: true,
      },
      Animation_rotateZ: {
        inputData: {
          angle: 45,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { angle } = data;
          animation.rotateZ(angle).step();
          that.exportAnimationData(`rotateZ(${angle})`);
          
        },
        isDone: true,
      },
      Animation_translate: {
        inputData: {
          x: 20,
          y: 20,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { x, y } = data;
          animation.translate(x, y).step();
          that.exportAnimationData(`translate(${x}, ${y})`);
          
        },
        isDone: true,
      },
      Animation_translate3d: {
        inputData: {
          x: 20,
          y: 20,
          z: 20,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { x, y, z } = data;
          animation.translate3d(x, y, z).step();
          that.exportAnimationData(`translate3d(${x}, ${y}, ${z})`);
          
        },
        isDone: true,
      },
      Animation_translateX: {
        inputData: {
          x: 40,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { x } = data;
          animation.translateX(x).step();
          that.exportAnimationData(`translateX(${x}).step()`);
          
        },
        isDone: true,
      },
      Animation_translateY: {
        inputData: {
          y: 40,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { y } = data;
          animation.translateY(y).step();
          that.exportAnimationData(`translateY(${y}).step()`);
          
        },
        isDone: true,
      },
      Animation_translateZ: {
        inputData: {
          z: 40,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { z } = data;
          animation.translateZ(z).step();
          that.exportAnimationData(`translateZ(${z}).step()`);
          
        },
        isDone: true,
      },
      Animation_width: {
        inputData: {
          width: 200,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { width } = data;
          animation.width(width).step();
          that.exportAnimationData(`width(${width})`);
          
        },
        isDone: true,
      },
      Animation_height: {
        inputData: {
          height: 200,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { height } = data;
          animation.height(height).step();
          that.exportAnimationData(`height(${height})`);
          
        },
        isDone: true,
      },
      Animation_left: {
        inputData: {
          left: 200,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { left } = data;
          animation.left(left).step();
          that.exportAnimationData(`width(${left})`);
          
        },
        isDone: true,
      },
      Animation_right: {
        inputData: {
          right: 200,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { right } = data;
          animation.right(right).step();
          that.exportAnimationData(`right(${right})`);
          
        },
        isDone: true,
      },
      Animation_top: {
        inputData: {
          top: 200,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { top } = data;
          animation.top(top).step();
          that.exportAnimationData(`top(${top})`);
          
        },
        isDone: true,
      },
      Animation_bottom: {
        inputData: {
          bottom: 200,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { bottom } = data;
          animation.bottom(bottom).step();
          that.exportAnimationData(`bottom(${bottom})`);
          
        },
        isDone: true,
      },
      Animation_matrix: {
        inputData: {
          scaleX: 1.2,
          skewY: 0.2,
          skewX: -1,
          scaleY: 0.9,
          translateX: 0,
          translateY: 20,
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { scaleX, skewY, skewX, scaleY, translateX, translateY } = data;
          animation.matrix(scaleX, skewY, skewX, scaleY, translateX, translateY).step();
          that.exportAnimationData(`matrix(${scaleX}, ${skewY}, ${skewX}, ${scaleY}, ${translateX}, ${translateY})`);
          
        },
        isDone: true,
      },
      Animation_matrix3d: {
        inputData: {
          matrixLine1: [-0.6, 1.3, 0, 0],
          matrixLine2: [-2.3, -0.6, 0, 0],
          matrixLine3: [0, 0, 1, 0],
          matrixLine4: [0, 0, 10, 1],
        },
        func: (data = {}, id) => {
          const { animation } = that.data;
          const { matrixLine1, matrixLine2, matrixLine3, matrixLine4 } = data;
          animation.matrix3d(...matrixLine1, ...matrixLine2, ...matrixLine3, ...matrixLine4).step();
          that.exportAnimationData(
            `matrix3d(${[...matrixLine1, ...matrixLine2, ...matrixLine3, ...matrixLine4].toString()}).step()`
          );
          
        },
        isDone: true,
      },
    },
    animation: null,
    animationData: null,
    description: '动画说明',
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
  exportAnimationData(description) {
    this.setData({
      animationData: this.data.animation.export(),
      description: description,
    });
  },
});

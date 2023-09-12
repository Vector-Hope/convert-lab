// packagesAPI/pages/interface/animation/index.js
let that = null
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
          return animation
        },
        isDone: true,
      },
      {
        id: 'Animation.opacity',
        func: (data = {}) => {
          const { animation } = that.data
          console.log(that.data, animation)
          that.data.animation.opacity(0).step().opacity(0.5).step()
          that.exportAnimationData('opacity(0).step().opacity(0.5).step()')
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
      description,
    })
  },
})

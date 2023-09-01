// components/callbackContent/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    callbackRes: Object,
    testAPI: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    callbackResString: '',
  },
  observers: {
    'callbackRes': function (callbackRes) {
      this.setData({
        callbackResString: this.stringify(callbackRes),
      })
    }
  },
  lifetimes: {
    attached() {
      const {callbackRes} = this.properties;
      this.setData({
        callbackResString: this.stringify(callbackRes),
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    stringify(object) {
      const cache = new Map()
      const JSONStr = JSON.stringify(object, (key, value) => {
        if (typeof value === 'object' && value !== null) {
          if (cache.has(value)) {
            return
          }
          cache.set(value, value)
        }
        return value
      })
      cache.clear()
      return JSONStr
    }
  },
})

// components/jsonTree/index.js
import { getType } from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    jsonData: {
      type: Object || Array,
      observer: function (newVal) {
        console.log(newVal)
      },
    },
    isShowRes: {
      type: Boolean,
      observer: function (newVal) {
        this.setData({
          showJsonData: newVal,
        })
      },
    },
    apiId: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    showJsonData: false,
  },
  /**
   * 组件的方法列表
   */
  lifetimes: {
    attached() {},
  },
  methods: {
    closeJsonData() {
      this.triggerEvent('closeRes')
    },
  },
})

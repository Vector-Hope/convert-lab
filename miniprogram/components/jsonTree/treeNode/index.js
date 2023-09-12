// components/jsonTree/treeNode/index.js
import { getType } from '../../../utils/util'
Component({
  /**
   * 组件的属性列表
   * showData: 需要展示的对象数据
   * dataKey: 需要展示的对象对应的key值
   */
  properties: {
    showData: {
      type: Object || Array,
      observer: function (newVal) {
        const type = getType(newVal)
        const resetData = this.resetData(newVal)
        let needMore = false
        if ((type == 'Object' && Object.keys(newVal).length != 0) || (type == 'Array' && newVal.length != 0)) {
          needMore = true
        }
        this.setData({
          jsonData: resetData,
          dataType: type,
          needMore,
        })
      },
    },
    dataKey: {
      type: String,
      value: '',
    },
  },

  /**
   * 组件的初始数据
   * jsonData: 对传入的showData进行类型分析，重新构造的data
   * startExp: 展示对象或数组的开头字符
   * endExp: 展示对象或数组的结尾字符
   * needMore: 用于判断该对象是否还可以展开
   * dataType: 传入showData的数据类型
   * isShowDetail: 用于控制是否展示对象包含内容
   */
  data: {
    jsonData: {},
    startExp: {
      Object: '{',
      Array: '[',
    },
    endExp: {
      Object: '}',
      Array: ']',
    },
    needMore: false,
    dataType: 'null',
    isShowDetail: false,
  },
  /**
   * 组件的方法列表
   */
  lifetimes: {
    attached() {
      this.initData()
    },
  },
  methods: {
    // 对传入的showData进行类型分析，并初始化data
    initData() {
      const { showData } = this.properties
      const type = getType(showData)
      const resetData = this.resetData(showData)
      let needMore = false
      if ((type == 'Object' && Object.keys(showData).length != 0) || (type == 'Array' && showData.length != 0)) {
        needMore = true
      }
      this.setData({
        jsonData: resetData,
        dataType: type,
        needMore,
      })
    },
    // 获得obj的数据类型
    getType(data) {
      const type = getType(data)
      return type
    },
    // 初始化jsonData的具体实现
    resetData(data) {
      const jsonData = []
      for (let index in data) {
        let dataDetail = {}
        dataDetail.type = this.getType(data[index])
        dataDetail.key = index
        dataDetail.value = data[index]
        if (dataDetail.type == 'Boolean') {
          dataDetail.value = data[index].toString()
        }
        jsonData.push(dataDetail)
      }
      return jsonData
    },
    // 控制展示对象内容
    showDetail() {
      const { isShowDetail } = this.data
      this.setData({
        isShowDetail: !isShowDetail,
      })
    },
  },
})

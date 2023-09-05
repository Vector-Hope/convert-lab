// components/jsonTree/treeNode/index.js
import {getType} from '../../../utils/util';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showData: {
      type: Object || Array,
      observer: function (newVal) {
        const type = getType(newVal);
        const resetData = this.resetData(newVal);
        let needMore = false;
        if ((type == 'Object' && Object.keys(newVal).length != 0) || (type == 'Array' && newVal.length != 0)) {
          needMore = true;
        }
        this.setData({
          jsonData: resetData,
          dataType: type,
          needMore,
        })
      }
    },
    dataKey: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    jsonData: {},
    startExp: {
      'Object': '{',
      'Array': '[',
    },
    endExp: {
      'Object': '}',
      'Array': ']',
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
      this.initData();
    }
  },
  methods: {
    initData() {
      const {showData} = this.properties;
      const type = getType(showData);
      const resetData = this.resetData(showData);
      let needMore = false;
      if ((type == 'Object' && Object.keys(showData).length != 0) || (type == 'Array' && showData.length != 0)) {
        needMore = true;
      }
      this.setData({
        jsonData: resetData,
        dataType: type,
        needMore,
      })
    },
    getType(obj) {
      const type = getType(obj);
      return type;
    },
    resetData(data) {
      const jsonData = []
      for (let index in data) {
        let dataDetail = {}
        dataDetail.type = this.getType(data[index]);
        dataDetail.key = index;
        dataDetail.value = data[index];
        if (dataDetail.type == 'Boolean' || dataDetail.type == 'Null') {
          dataDetail.value = data[index].toString();
        }
        jsonData.push(dataDetail)
      }
      return jsonData;
    },
    showDetail() {
      const {isShowDetail} = this.data;
      this.setData({
        isShowDetail: !isShowDetail
      })
    }
  },
})

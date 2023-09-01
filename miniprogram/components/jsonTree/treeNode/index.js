// components/jsonTree/treeNode/index.js
import {getType} from '../../../utils/util';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object || Array,
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
  observers: {
    'data': function (data) {
      this.initData();
    }
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
      const {data} = this.properties;
      const type = getType(data);
      const resetData = this.resetData(data);
      let needMore = false;
      if ((type == 'Object' && Object.keys(data).length != 0) || (type == 'Array' && data.length != 0)) {
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

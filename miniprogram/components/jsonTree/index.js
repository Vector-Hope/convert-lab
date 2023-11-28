// components/jsonTree/index.js
import { myJSONStringify } from '../../utils/util';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    jsonData: {
      type: Object,
      observer: function (newVal) {
        this.setData({
          formatJsonData: JSON.parse(myJSONStringify(newVal)),
        })
      },
    },
    isShowRes: {
      type: Boolean,
      observer: function (newVal) {
        this.setData({
          showJsonData: newVal,
        });
      },
    },
    apiId: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    formatJsonData: null,
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
      this.triggerEvent('closeRes');
    },
  },
});

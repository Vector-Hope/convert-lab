// components/callbackContent/index.js
import { getType, myJSONStringify } from '../../utils/util';
Component({
  /**
   * 组件的属性列表
   * callbackRes: api的回调内容
   * testApi: 回调对应的api名称
   */
  properties: {
    callbackRes: {
      type: Object,
      observer: function (newVal) {
        this.setData({
          callbackResString: myJSONStringify(newVal),
        });
      },
    },
    testApi: String,
  },

  /**
   * 组件的初始数据
   * callbackResString: 回调内容转为字符串的产物
   */
  data: {
    callbackResString: '',
  },
  lifetimes: {
    attached() {},
  },
  /**
   * 组件的方法列表
   */
  methods: {},
});

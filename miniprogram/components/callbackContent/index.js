// components/callbackContent/index.js
Component({
  /**
   * 组件的属性列表
   * callbackRes: api的回调内容
   * testAPI: 回调对应的api名称
   */
  properties: {
    callbackRes: {
      type: Object,
      observer: function (newVal) {
        this.setData({
          callbackResString: this.stringify(newVal),
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
    attached() {
      const { callbackRes } = this.properties;
      this.setData({
        callbackResString: this.stringify(callbackRes),
      });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 对JSON.stringify进行封装，防止对象构造器循环引用
    stringify(object) {
      let JSONStr = '';
      try {
        JSONStr = JSON.stringify(object);
      } catch (err) {
        console.log('errrrrrrrrrrrr');
        const cache = new Map();
        JSONStr = JSON.stringify(object, (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (cache.has(value)) {
              return;
            }
            cache.set(value, value);
          }
          return value;
        });
        cache.clear();
      }
      return JSONStr;
    },
  },
});

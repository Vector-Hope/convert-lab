// packagesAPI/pages/interface/customizedComponents/nextTick/index.js
let that;
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    list: {
      nextTick: {
        func: (data = {}, id) => {
          console.log('before nextTick');
          wx.nextTick(() => {
            console.log('nextTick is ok!');
            that.setCallback(id, {
              nextTick: 'nextTick is ok!',
            })
          });
          console.log('after nextTick');
        },
        isDone: true,
      },
  },
  },
  /**
   * 组件的方法列表
   */
  lifetimes: {
    attached() {
      that = this;
      const {list} = this.data;
      const listKey = Object.keys(list);
      listKey.forEach((key) => {
        list[key].callbackRes = {};
      })
      this.setData({
        list
      })
    }
  },
  methods: {
    setCallback(id, callback) {
      const {list} = that.data;
      console.log(callback);
      list[id].callbackRes = callback;
      that.setData({
        list
      })
    },
  },
});

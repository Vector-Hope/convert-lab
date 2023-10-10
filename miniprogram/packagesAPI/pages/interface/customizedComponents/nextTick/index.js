// packagesAPI/pages/interface/customizedComponents/nextTick/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        id: 'nextTick',
        func: (data = {}) => {
          return new Promise((resolve) => {
            console.log('before nextTick');
            wx.nextTick(() => {
              console.log('nextTick is ok!');
              resolve({
                callback: {
                  nextTick: 'nextTick is ok!',
                },
              });
            });
            console.log('after nextTick');
          });
        },
        isDone: true,
      },
    ],
  },
  /**
   * 组件的方法列表
   */
  methods: {},
});

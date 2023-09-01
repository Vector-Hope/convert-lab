// components/buttonList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    buttonList: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: {},
    showResId: ''
  },

  lifetimes: {
    attached() {
      const {buttonList} = this.properties;
      const list = {};
      buttonList.forEach((button) => {
        let inputData = undefined;
        if (button.inputData) {
          inputData =  typeof button.inputData == 'string' ? button.inputData : JSON.stringify(button.inputData, null, 2);
        }
        const buttonItem = {
          inputData,
          callbackRes: {},
          func: button.func,
          hideTextarea: false,
        }
        list[button.id] = buttonItem;
        this.setData({
          list,
        })
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideTextarea(e) {
      const {id} = e.currentTarget.dataset;
      const { list } = this.data;
      list[id].hideTextarea = !list[id].hideTextarea
      this.setData({
        list
      })
      console.log(list)
    },
    showRes(e) {
      const {id} = e.currentTarget.dataset;
      const {list} = this.data;
      if (list[id].callbackRes && Object.keys(list[id].callbackRes).length > 0) { 
        this.setData({
          showResId: id,
        })
        let jsonTree = this.selectComponent('#json-tree');
        jsonTree.showJsonData();
      } else {
        wx.showToast({
          icon: 'error',
          title: '无回调内容',
        })
      }
    },
    APITrigger(e) {
      const {id} = e.currentTarget.dataset;
      const {list} = this.data;
      try {
        let inputData = {};
        if (list[id].inputData) {
          inputData = JSON.parse(list[id].inputData);
        }
        list[id].callbackRes = list[id].func(inputData);
        this.setData({
          list
        })
        wx.showToast({
          icon: 'success',
          title: `触发${id}成功`,
        })
      } catch (err) {
        wx.showToast({
          icon: 'error',
          title: '请检查参数格式',
        })
      }
    },
    changeData(e){
      const { list } = this.data;
      const {id} = e.currentTarget.dataset;
      list[id].inputData = e.detail.value;
      this.setData({
        list,
      })
    }
  },
})

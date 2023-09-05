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
    listKey: [],
    showResId: '',
    isShowRes: false,
  },

  lifetimes: {
    attached() {
      const {buttonList} = this.properties;
      const list = {};
      const listKey = [];
      buttonList.forEach((button) => {
        let {id} = button;
        let inputData = undefined;
        if (button.inputData) {
          inputData =  typeof button.inputData == 'string' ? button.inputData : JSON.stringify(button.inputData, null, 2);
        }
        const buttonItem = {
          inputData,
          callbackRes: {},
          func: button.func,
          hideTextarea: false,
          isDone: button.isDone
        }
        list[id] = buttonItem;
        listKey.push(id);
      })
      this.setData({
        list,
        listKey,
      })
    }
    // attached() {
    //   const {buttonList} = this.properties;
    //   const list = {};
    //   const listKey = Object.keys(buttonList);
    //   listKey.forEach((apiId) => {
    //     let inputData = undefined;
    //     if (buttonList[apiId].inputData) {
    //       inputData =  typeof buttonList[apiId].inputData == 'string' ? buttonList[apiId].inputData : JSON.stringify(buttonList[apiId].inputData, null, 2);
    //     }
    //     const buttonItem = {
    //       inputData,
    //       callbackRes: buttonList[apiId].callbackRes,
    //       func: buttonList[apiId].func,
    //       hideTextarea: false,
    //     }
    //     list[apiId] = buttonItem;
    //   })
    //   this.setData({
    //     list,
    //     listKey,
    //   })
    // }
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
    },
    showRes(e) {
      const {id} = e.currentTarget.dataset;
      const {list} = this.data;
      if (list[id].callbackRes && Object.keys(list[id].callbackRes).length != 0) { 
        // if (Object.keys(list[id].callbackRes).length == 0) {
        //   wx.showToast({
        //     icon: 'error',
        //     title: '内容可能为内置属性',
        //   })
        // }
        this.setData({
          showResId: id,
          isShowRes: true
        })
      } else {
        wx.showToast({
          icon: 'error',
          title: '无回调内容',
        })
      }
    },
    closeRes() {
      this.setData({
        isShowRes: false
      })
    },
    APITrigger(e) {
      const {id} = e.currentTarget.dataset;
      const {list} = this.data;
      let inputData = {};
      if (list[id].inputData) {
        try {
          inputData = JSON.parse(list[id].inputData);
        } catch (err) {
          wx.showToast({
            icon: 'error',
            title: '请检查参数格式',
          })
        }
      }
      this.getResult(id, inputData);
    },
    async getResult(id, inputData = {}) {
      const {list} = this.data;
      try {
        let callbackRes = await list[id].func(inputData);
        list[id].callbackRes = callbackRes;
        console.log(callbackRes)
        this.setData({
          list
        })
        wx.showToast({
          icon: 'success',
          title: `触发${id}成功`,
        })
      } catch (err) {
        console.log(err)
        wx.showToast({
          icon: 'error',
          title: '请检查执行函数',
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

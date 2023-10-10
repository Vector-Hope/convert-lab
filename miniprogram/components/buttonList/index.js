// components/buttonList/index.js
import { getType, formatJson } from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   * buttonList: api对应的按钮列表信息
   */
  properties: {
    buttonList: Array,
  },

  /**
   * 组件的初始数据
   * list: reset之后的api列表信息
   * listKey: reset后的api列表信息的key值，用于列表渲染
   * showResId: 对应显示结果的api Id
   * isShowRes: 是否显示回调内容
   */
  data: {
    list: {},
    listKey: [],
    showResId: '',
    isShowRes: false,
  },

  lifetimes: {
    attached() {
      const { buttonList } = this.properties
      const list = {}
      const listKey = []
      buttonList.forEach((button) => {
        let { id } = button
        let inputData = undefined
        if (button.inputData) {
          inputData = typeof button.inputData == 'string' ? button.inputData : JSON.stringify(button.inputData, null, 2)
        }
        const buttonItem = {
          inputData,
          callbackRes: {},
          func: button.func,
          hideTextarea: false,
          isDone: button.isDone,
        }
        list[id] = buttonItem
        listKey.push(id)
      })
      this.setData({
        list,
        listKey,
      })
    },
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
    // 隐藏textarea函数
    hideTextarea(e) {
      const { id } = e.currentTarget.dataset
      const { list } = this.data
      list[id].hideTextarea = !list[id].hideTextarea
      this.setData({
        list,
      })
    },
    // 展示回调结果，获得对应的apiId
    showRes(e) {
      const { id } = e.currentTarget.dataset
      const { list } = this.data
      if (list[id].callbackRes && Object.keys(list[id].callbackRes).length != 0) {
        // if (Object.keys(list[id].callbackRes).length == 0) {
        //   wx.showToast({
        //     icon: 'error',
        //     title: '内容可能为内置属性',
        //   })
        // }
        this.setData({
          showResId: id,
          isShowRes: true,
        })
      } else {
        wx.showToast({
          icon: 'error',
          title: '无回调内容',
        })
      }
    },
    // 关闭回调展示，由jsonTree子组件触发
    closeRes() {
      this.setData({
        isShowRes: false,
      })
    },
    // api事件触发器
    APITrigger(e) {
      const { id } = e.currentTarget.dataset
      const { list } = this.data
      let inputData = {}
      if (list[id].inputData) {
        try {
          inputData = JSON.parse(list[id].inputData)
        } catch (err) {
          wx.showToast({
            icon: 'error',
            title: '请检查参数格式',
          })
        }
      }
      this.getResult(id, inputData)
    },
    // 获得api回调的内容
    async getResult(id, inputData = {}) {
      const { list } = this.data
      try {
        let { isShowToast, callback } = await list[id].func(inputData)
        let callbackRes = this.formatCallback(formatJson(callback))
        list[id].callbackRes = callbackRes
        console.log(`test API: ${id}`)
        console.log(callbackRes)
        this.setData({
          list,
        })
        if (!isShowToast) {
          wx.showToast({
            icon: 'success',
            title: `触发${id}成功`,
          })
        }
      } catch (err) {
        console.log(err)
        if (err.name == 'TypeError') {
          wx.showToast({
            icon: 'error',
            title: '未创建实例对象',
          })
        } else {
          wx.showToast({
            icon: 'error',
            title: '请检查执行函数',
          })
        }
      }
    },
    formatCallback(callback) {
      const callbackRes = {}
      if (getType(callback) == 'Object') {
        const callbackKeys = Object.keys(callback)
        callbackKeys.forEach((key) => {
          if (getType(callback[key]) == 'Function') {
            callbackRes[key] = 'f ( )'
          } else if (getType(callback[key]) == 'Object') {
            callbackRes[key] = this.formatCallback(callback[key])
          } else {
            callbackRes[key] = callback[key]
          }
        })
      }
      return callbackRes
    },
    // 修改textarea中的内容，改变对应api入参
    changeData(e) {
      const { list } = this.data
      const { id } = e.currentTarget.dataset
      list[id].inputData = e.detail.value
      this.setData({
        list,
      })
    },
    // 判断是否为交互内容
    isInteraction(apiId) {
      return (
        apiId == 'showToast' ||
        apiId == 'hideToast' ||
        apiId == 'showLoading' ||
        apiId == 'hideLoading' ||
        apiId == 'showModal' ||
        apiId == 'showActionSheet'
      )
    },
  },
})

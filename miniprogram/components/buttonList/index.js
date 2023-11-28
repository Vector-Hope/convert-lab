// components/buttonList/index.js
import { getType, formatJson } from '../../utils/util';
Component({
  /**
   * 组件的属性列表
   * buttonList: api对应的按钮列表信息
   */
  properties: {
    buttonList: Object
  },

  /**
   * 组件的初始数据
   * listKey: api列表信息的key值，用于列表渲染
   * hideTextareaList: api对应的是否隐藏输入框列表
   * inputDataList: api对应的输入data列表
   * showResId: 对应显示结果的api Id
   * isShowRes: 是否显示回调内容
   */
  data: {
    listKey: [],
    hideTextareaList: {},
    inputDataList: {},
    showResId: '',
    isShowRes: false,
  },

  lifetimes: {
    attached() {
      const { buttonList } = this.properties;
      const {hideTextareaList, inputDataList} = this.data;
      const listKey = Object.keys(buttonList);
      listKey.forEach((key) => {
        hideTextareaList[key] = false;
        inputDataList[key] = buttonList[key].inputData ? JSON.stringify(buttonList[key].inputData, null, 2) : null;
      })
      this.setData({
        hideTextareaList,
        inputDataList,
        listKey,
      })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 隐藏textarea函数
    hideTextarea(e) {
      const { id } = e.currentTarget.dataset;
      const { hideTextareaList } = this.data;
      hideTextareaList[id] = !hideTextareaList[id];
      this.setData({
        hideTextareaList,
      });
    },
    // 展示回调结果，获得对应的apiId
    showRes(e) {
      const { id } = e.currentTarget.dataset;
      const { buttonList } = this.properties;
      if (buttonList[id].callbackRes && Object.keys(buttonList[id].callbackRes).length != 0) {
        this.setData({
          showResId: id,
          isShowRes: true,
        });
      } else {
        wx.showToast({
          icon: 'error',
          title: '无回调内容',
        });
      }
    },
    // 关闭回调展示，由jsonTree子组件触发
    closeRes() {
      this.setData({
        isShowRes: false,
      });
    },
    // api事件触发器
    APITrigger(e) {
      const { id } = e.currentTarget.dataset;
      const {inputDataList} = this.data;
      if (inputDataList[id]) {
        try {
          let inputData = JSON.parse(inputDataList[id]);
          console.log(`test API: ${id}`);
          this.getResult(id, inputData);
        } catch (err) {
          wx.showToast({
            icon: 'error',
            title: '请检查参数格式',
          });
        }
      } else {
        console.log(`test API: ${id}`);
        this.getResult(id);
      }
    },
    // 获得api回调的内容
    getResult(id, inputData = {}) {
      const { buttonList } = this.properties;
      try {
        const isShowToast = buttonList[id].func(inputData, id);
        if (!isShowToast) {
          wx.showToast({
            icon: 'success',
            title: `触发${id}成功`,
          });
        }
      } catch (err) {
        console.log(err);
        if (err.name == 'TypeError') {
          wx.showToast({
            icon: 'error',
            title: '未创建实例对象',
          });
        } else {
          wx.showToast({
            icon: 'error',
            title: '请检查执行函数',
          });
        }
      }
    },
    // 修改textarea中的内容，改变对应api入参
    changeData(e) {
      const { inputDataList } = this.data;
      const { id } = e.currentTarget.dataset;
      inputDataList[id] = e.detail.value;
      this.setData({
        inputDataList,
      });
    },
  },
});

Page({
  data: {
    dataBind: '数据绑定',
    simple: 'dataBind',
    control: true,
    num1: 3,
    num2: 4,
    logicNum: 0,
    object: {
      name: '路径',
    },
    array: ['运算'],
  },

  changeControl(e) {
    this.setData({
      control: e.detail.value,
    })
  },
  changeSimple(e) {
    this.setData({
      simple: e.detail.value,
    })
  },
  changeLogicNum(e) {
    this.setData({
      logicNum: e.detail.value,
    })
  },
})

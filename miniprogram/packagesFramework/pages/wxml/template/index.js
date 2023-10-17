Page({
  data: {
    creatTemplate: {
      title: '创建模板并使用',
      name: 'creatTemplate',
      content: '使用成功',
    },
    chooseTrue: true,
    chooseTemplate: {
      name: '选择Template',
      content: '选择如title所示',
    },
    mixObject1: {
      mixData11: 'mixObject1.data1',
      mixData12: 'mixObject1.data2',
    },
    mixObject2: {
      mixData21: 'mixObject2.data1',
      mixData22: 'mixObject2.data2',
    },
    mixVar1: '混用的变量mixVar1',
    mixVar2: '混用的变量mixVar2',
  },

  changeChooseTrue(e) {
    this.setData({
      chooseTrue: e.detail.value,
    });
  },
});

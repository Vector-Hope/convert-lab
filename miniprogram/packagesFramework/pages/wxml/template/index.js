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
  },

  changeChooseTrue(e) {
    this.setData({
      chooseTrue: e.detail.value,
    });
  },
});

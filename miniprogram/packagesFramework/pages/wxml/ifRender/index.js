Page({
  data: {
    simpleIf: true,
    blockIf: true,
    hidden: true,
  },

  changeSimpleIf(e) {
    this.setData({
      simpleIf: e.detail.value,
    });
  },
  changeBlockIf(e) {
    this.setData({
      blockIf: e.detail.value,
    });
  },
  changeHidden(e) {
    this.setData({
      hidden: e.detail.value,
    });
  },
});

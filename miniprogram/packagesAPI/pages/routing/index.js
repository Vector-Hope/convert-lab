import {getType} from '../../../utils/util'
// packagesAPI/pages/routing/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    jsonData: {},
    isShowJsonData: false,
  },

  onReady() {
    const date = new Date();
    const jsonData = {
      id: 'first',
      name: ['lxh', 'clf'],
      class: {
        class1: 123,
        class3: {
          lalal: [1, 2, 3],
          name: 'wdf'
        }
      },
      ses: '12312312',
      look: [1, 2, 3],
      watch: {
        padding: [true, undefined, null]
      },
      date: date,
    }
    this.setData({
      jsonData: jsonData
    })
  },

  showJsonData() {
    let jsonTree = this.selectComponent('#json-tree');
    jsonTree.showJsonData();
  },
  closeJsonData() {
    this.setData({
      isShowJsonData: false
    })
  }
})

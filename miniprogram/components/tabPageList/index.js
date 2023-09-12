// components/tabPageList/index.js
Component({
  /**
   * 组件的属性列表
   * pageList: 用于列表渲染的页面列表
   * packageName: 页面对应的分包名称
   * category: 页面对应的分类(不必要，由于测试icon引用，故添加该属性)
   * iconList: 页面列表中对应的icon列表
   */
  properties: {
    pageList: Array,
    packageName: String,
    category: String,
    iconList: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {},
  lifetimes: {},
  /**
   * 组件的方法列表
   */
  methods: {
    // 点击页面跳转或列表展开事件
    kindToggle(e) {
      const id = e.currentTarget.id
      const { pageList, packageName, iconList } = this.properties
      for (let i = 0, len = pageList.length; i < len; ++i) {
        if (pageList[i].id === id) {
          if (pageList[i].pages.length == 0) {
            wx.navigateTo({
              url: `../../${packageName}/pages/${pageList[i].id}/index`,
            })
            return
          }
          pageList[i].open = !pageList[i].open
        } else {
          pageList[i].open = false
        }
      }
      this.setData({
        pageList,
      })
    },
    enterSetTabBarPage(e) {
      this.triggerEvent('enterSetTabBarPage')
    },
  },
})

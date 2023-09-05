// components/tabPageList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageList: Array,
    packageName: String,
    category: String,
    iconList: Object
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
    kindToggle(e) {
      const id = e.currentTarget.id
      const { pageList, packageName, iconList } = this.properties
      console.log(iconList)
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
  },
})

// packagesAPI/pages/wxml/index.js
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectorQuery: null,
    observer: null,
    selectorQueryList: [
      {
        id: 'createSelectorQuery',
        func: (data = {}) => {
          const selectorQuery = wx.createSelectorQuery();
          that.setData({
            selectorQuery,
          });
          return {
            callback: selectorQuery,
          };
        },
        isDone: true,
      },
      {
        id: 'SelectorQuery.select',
        inputData: {
          select: '.select-node',
        },
        func: (data = {}) => {
          const { selectorQuery } = that.data;
          if (!selectorQuery) {
            wx.showToast({
              title: '请先创建实例',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          const { select } = data;
          const nodesRef = selectorQuery.select(select);
          that.setData({
            nodesRef,
          });
          return {
            callback: nodesRef,
          };
        },
        isDone: true,
      },
      {
        id: 'SelectorQuery.selectAll',
        inputData: {
          select: '.select-node',
        },
        func: (data = {}) => {
          const { selectorQuery } = that.data;
          if (!selectorQuery) {
            wx.showToast({
              title: '请先创建实例',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          const { select } = data;
          const nodesRef = selectorQuery.selectAll(select);
          return {
            callback: nodesRef,
          };
        },
        isDone: true,
      },
      {
        id: 'SelectorQuery.selectViewport',
        func: (data = {}) => {
          const { selectorQuery } = that.data;
          if (!selectorQuery) {
            wx.showToast({
              title: '请先创建实例',
            });
            return {
              isShowToast: true,
              callback: {},
            };
          }
          const viewport = selectorQuery.selectViewport();
          return {
            callback: viewport,
          };
        },
        isDone: true,
      },
      {
        id: 'SelectorQuery.exec',
        inputData: {
          select: '#nodeRef',
        },
        func: (data = {}) => {
          const { select } = data;
          return new Promise((resolve) => {
            wx.createSelectorQuery()
              .select(select)
              .boundingClientRect()
              .exec((res) => {
                console.log(res);
                resolve({ callback: { exec: res } });
              });
          });
        },
        isDone: true,
      },
      {
        id: 'SelectorQuery.in',
        inputData: {
          select: '#nodeRef',
        },
        func: (data = {}) => {
          const { select } = data;
          const nodesRef = wx.createSelectorQuery().in(that).select(select);
          console.log(nodesRef);
          return {
            callback: nodesRef,
          };
        },
        isDone: true,
      },
      {
        id: 'NodesRef.boundingClientRect',
        inputData: {
          select: '#nodeRef',
        },
        func: (data = {}) => {
          const { select } = data;
          return new Promise((resolve) => {
            wx.createSelectorQuery()
              .select(select)
              .boundingClientRect((res) => {
                resolve({
                  callback: res,
                });
              })
              .exec();
          });
        },
        isDone: true,
      },
      {
        id: 'NodesRef.context',
        inputData: {
          select: '.canvas-node',
        },
        func: (data = {}) => {
          const { select } = data;
          return new Promise((resolve) => {
            wx.createSelectorQuery()
              .select(select)
              .context((res) => {
                console.log(res);
                resolve({
                  callback: res,
                });
              })
              .exec();
          });
        },
      },
      {
        id: 'NodesRef.fields',
        inputData: {
          select: '#nodeRef',
          fields: {
            id: true,
            dataset: true,
            mask: true,
            rect: true,
            size: true,
            scrollOffset: true,
            computedStyle: ['margin'],
            context: true,
            node: true,
          },
        },
        func: (data = {}) => {
          const { select, fields } = data;
          return new Promise((resolve) => {
            wx.createSelectorQuery()
              .select(select)
              .fields(fields, (res) => {
                resolve({ callback: res });
              })
              .exec();
          });
        },
        isDone: true,
      },
      {
        id: 'NodesRef.scrollOffset',
        inputData: {
          selectViewport: true,
          select: '.scroll-view-node',
        },
        func: (data = {}) => {
          const { selectViewport } = data;
          if (selectViewport) {
            return new Promise((resolve) => {
              wx.createSelectorQuery()
                .selectViewport()
                .scrollOffset((res) => {
                  resolve({ callback: res });
                })
                .exec();
            });
          }

          const { select } = data;
          return new Promise((resolve) => {
            wx.createSelectorQuery()
              .select(select)
              .scrollOffset((res) => {
                resolve({ callback: res });
              })
              .exec();
          });
        },
        isDone: true,
      },
      {
        id: 'NodesRef.node',
        inputData: {
          select: '.scroll-view-node',
        },
        func: (data = {}) => {
          const { select } = data;
          return new Promise((resolve) => {
            wx.createSelectorQuery()
              .select(select)
              .node((res) => {
                resolve({ callback: res });
              })
              .exec();
          });
        },
        isDone: true,
      },
    ],
    intersectionObserverList: [
      {
        id: 'createIntersectionObserver',
        inputData: {
          initialRatio: 0,
          observeAll: true,
          thresholds: [],
        },
        func: (data = {}) => {
          let { observer } = that.data;
          if (observer) {
            observer.disconnect();
          }
          observer = wx.createIntersectionObserver(that, data);
          that.setData({
            observer,
          });
          return {
            callback: observer,
          };
        },
        isDone: true,
      },
      {
        id: 'relativeTo',
        inputData: {
          left: 0,
        },
        func: (data) => {
          TestConsole.consoleTest('IntersectionObserver.relativeTo');
          if (this.observer) {
            this.observer.disconnect();
          }
          this.observer = this.createIntersectionObserver();
          this.observer.relativeTo('.scroll-view', data).observe('.ball', (res) => {
            console.log('IntersectionObserver.observe:', res);
            this.setState({
              appear: res.intersectionRatio > 0,
            });
          });
        },
      },
      {
        id: 'relativeToViewport',
        inputData: {
          left: 0,
        },
        func: (_, data) => {
          TestConsole.consoleTest('IntersectionObserver.relativeTo');
          if (this.observer) {
            this.observer.disconnect();
          }
          this.observer = this.createIntersectionObserver();
          this.observer.relativeToViewport(data).observe('.ball', (res) => {
            console.log('IntersectionObserver.observe:', res);
            this.setState({
              appear: res.intersectionRatio > 0,
            });
          });
        },
      },
      {
        id: 'disconnect',
        func: () => {
          TestConsole.consoleTest('IntersectionObserver.disconnect');
          if (this.observer) {
            this.observer.disconnect();
            this.observer = undefined;
          }
          console.log('IntersectionObserver已断开');
        },
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});

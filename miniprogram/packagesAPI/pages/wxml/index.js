// packagesAPI/pages/wxml/index.js
import {myJSONStringify} from '../../../utils/util'
let that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectorQuery: null,
    observer: null,
    selectorQueryList: {
      createSelectorQuery: {
        func: (data = {}, id) => {
          const selectorQuery = wx.createSelectorQuery();
          that.setData({
            selectorQuery,
          });
          that.setSelectorQueryListCallback(id, selectorQuery);
        },
        isDone: true,
      },
      SelectorQuery_select: {
        inputData: {
          select: '.select-node',
        },
        func: (data = {}, id) => {
          const { selectorQuery } = that.data;
          if (!selectorQuery) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          const { select } = data;
          const nodesRef = selectorQuery.select(select);
          that.setData({
            nodesRef,
          });
          that.setSelectorQueryListCallback(id, nodesRef);
        },
        isDone: true,
      },
      SelectorQuery_selectAll: {
        inputData: {
          select: '.select-node',
        },
        func: (data = {}, id) => {
          const { selectorQuery } = that.data;
          if (!selectorQuery) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          const { select } = data;
          const nodesRef = selectorQuery.selectAll(select);
          that.setSelectorQueryListCallback(id, nodesRef);
        },
        isDone: true,
      },
      SelectorQuery_selectViewport: {
        func: (data = {}, id) => {
          const { selectorQuery } = that.data;
          if (!selectorQuery) {
            wx.showToast({
              title: '请先创建实例',
            });
            return true;
          }
          const viewport = selectorQuery.selectViewport();
          that.setSelectorQueryListCallback(id, viewport);
        },
        isDone: true,
      },
      SelectorQuery_exec: {
        inputData: {
          select: '#nodeRef',
        },
        func: (data = {}, id) => {
          const { select } = data;
          wx.createSelectorQuery()
            .select(select)
            .boundingClientRect()
            .exec((res) => {
              console.log(res);
              that.setSelectorQueryListCallback(id, {exec: res});
            });
        },
        isDone: true,
      },
      SelectorQuery_in: {
        inputData: {
          select: '#nodeRef',
        },
        func: (data = {}, id) => {
          const { select } = data;
          const nodesRef = wx.createSelectorQuery().in(that).select(select);
          that.setSelectorQueryListCallback(id, JSON.parse(myJSONStringify(nodesRef)));
        },
        isDone: true,
      },
      NodesRef_boundingClientRect: {
        inputData: {
          select: '#nodeRef',
        },
        func: (data = {}, id) => {
          const { select } = data;
          wx.createSelectorQuery()
            .select(select)
            .boundingClientRect((res) => {
              that.setSelectorQueryListCallback(id, res);
            })
            .exec();
        },
        isDone: true,
      },
      NodesRef_context: {
        inputData: {
          select: '.canvas-node',
        },
        func: (data = {}, id) => {
          const { select } = data;
          wx.createSelectorQuery()
            .select(select)
            .context((res) => {
              that.setSelectorQueryListCallback(id, res);
            })
            .exec();
        },
      },
      NodesRef_fields: {
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
        func: (data = {}, id) => {
          const { select, fields } = data;
          wx.createSelectorQuery()
            .select(select)
            .fields(fields, (res) => {
              that.setSelectorQueryListCallback(id, res);
            })
            .exec();
        },
        isDone: true,
      },
      NodesRef_scrollOffset: {
        inputData: {
          selectViewport: true,
          select: '.scroll-view-node',
        },
        func: (data = {}, id) => {
          const { selectViewport } = data;
          if (selectViewport) {
              wx.createSelectorQuery()
                .selectViewport()
                .scrollOffset((res) => {
                  that.setSelectorQueryListCallback(id, res);
                })
                .exec();
          } else {
            const { select } = data;
            wx.createSelectorQuery()
              .select(select)
              .scrollOffset((res) => {
                that.setSelectorQueryListCallback(id, res);
              })
              .exec();
          }
        },
        isDone: true,
      },
      NodesRef_node: {
        inputData: {
          select: '.scroll-view-node',
        },
        func: (data = {}, id) => {
          const { select } = data;
          wx.createSelectorQuery()
            .select(select)
            .node((res) => {
              that.setSelectorQueryListCallback(id, res);
            })
            .exec();
        },
        isDone: true,
      },
  },
    intersectionObserverList: {
      createIntersectionObserver: {
        inputData: {
          initialRatio: 0,
          observeAll: true,
          thresholds: [],
        },
        func: (data = {}, id) => {
          let { observer } = that.data;
          if (observer) {
            observer.disconnect();
          }
          observer = wx.createIntersectionObserver(that, data);
          that.setData({
            observer,
          });
          that.setIntersectionObserverListCallback(id, observer);
        },
        isDone: true,
      },
      relativeTo: {
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
      relativeToViewport: {
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
      disconnect: {
        func: () => {
          TestConsole.consoleTest('IntersectionObserver.disconnect');
          if (this.observer) {
            this.observer.disconnect();
            this.observer = undefined;
          }
          console.log('IntersectionObserver已断开');
        },
      },
  },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
    const {selectorQueryList, intersectionObserverList} = this.data;
    Object.keys(selectorQueryList).forEach((key) => {
      selectorQueryList[key].callbackRes = {};
    })
    Object.keys(intersectionObserverList).forEach((key) => {
      intersectionObserverList[key].callbackRes = {};
    })
    this.setData({
      selectorQueryList,
      intersectionObserverList
    })
  },
  setSelectorQueryListCallback(id, callback) {
    const {selectorQueryList} = that.data;
    console.log(callback);
    selectorQueryList[id].callbackRes = callback;
    that.setData({
      selectorQueryList
    })
  },

  setIntersectionObserverListCallback(id, callback) {
    const {intersectionObserverList} = that.data;
    console.log(callback);
    intersectionObserverList[id].callbackRes = callback;
    that.setData({
      intersectionObserverList
    })
  }
});

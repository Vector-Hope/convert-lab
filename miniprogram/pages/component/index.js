Page({
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: [
          {
            id: 'coverImage',
            name: 'cover-image'
          },
          {
            id: 'coverView',
            name: 'cover-view',
          },
          {
            id: 'matchMedia',
            name: 'match-media',
          },
          {
            id: 'movableArea',
            name: 'movable-area',
          },
          {
            id: 'movableView',
            name: 'movable-view',
          },
          {
            id: 'pageContainer',
            name: 'page-container',
          },
          {
            id: 'rootPortal',
            name: 'root-portal',
          },
          {
            id: 'scrollView',
            name: 'scroll-view',
          },
          {
            id: 'swiper',
            name: 'swiper',
          },
          {
            id: 'swiperItem',
            name: 'swiper-item',
          },
          {
            id: 'view',
            name: 'view',
          },
        ],
      },
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: [
        {
          id: 'icon',
          name: 'icon'
        },
        {
          id: 'progress',
          name: 'progress'
        },
        {
          id: 'richText',
          name: 'rich-text'
        },
        {
          id: 'text',
          name: 'text'
        },
      ],
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: [
          {
            id: 'button',
            name: 'button',
          },
          {
            id: 'checkbox',
            name: 'checkbox',
          },
          {
            id: 'checkboxGroup',
            name: 'checkbox-group',
          },
          {
            id: 'editor',
            name: 'editor',
          },
          {
            id: 'form',
            name: 'form',
          },
          {
            id: 'input',
            name: 'input',
          },
          {
            id: 'keyboardAccessory',
            name: 'keyboard-accessory',
          },
          {
            id: 'label',
            name: 'label',
          },
          {
            id: 'picker',
            name: 'picker',
          },
          {
            id: 'pickerView',
            name: 'picker-view',
          },
          {
            id: 'pickerViewColumn',
            name: 'picker-view-column',
          },
          {
            id: 'radio',
            name: 'radio',
          },
          {
            id: 'radioGroup',
            name: 'radio-group',
          },
          {
            id: 'slider',
            name: 'slider',
          },
          {
            id: 'switch',
            name: 'switch',
          },
          {
            id: 'textarea',
            name: 'textarea',
          },
        ],
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: [
        {
          id: 'gridView',
          name: 'grid-view'
        },
        {
          id: 'listView',
          name: 'list-view'
        },
        {
          id: 'shareElement',
          name: 'share-element'
        },
        {
          id: 'snapshot',
          name: 'snapshot'
        },
        {
          id: 'stickyHeader',
          name: 'sticky-header'
        },
        {
          id: 'stickySection',
          name: 'sticky-section'
        }
      ],
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: [
        {
          id: 'functionalPageNavigator',
          name: 'functional-page-navigator'
        },
        {
          id: 'navigator',
          name: 'navigator'
        },
      ],
      },
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: [
          {
            id: 'audio', 
            name: 'audio',
          },
        {
          id: 'camera', 
          name: 'camera',
        },
        {
          id: 'channelLive', 
          name: 'channel-live',
        },
        {
          id: 'channelVideo',
          name: 'channel-video',
        },
          {
            id: 'image', 
            name: 'image',
          },
        {
          id: 'livePusher', 
          name: 'live-pusher',
        },
        {
          id: 'livePlayer', 
          name: 'live-player',
        },
        {
          id: 'video', 
          name: 'video',
        },
        {
          id: 'voipRoom', 
          name: 'voip-room',
        },
      ],
      },
      {
        id: 'map',
        name: '地图',
        open: false,
        pages: [{
          id:'map',
          name: 'map'
        }],
      },
      {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: [
          {
            id: 'canvas',
            name: 'canvas',
          }
        ],
      },
      {
        id: 'open',
        name: '开放能力',
        open: false,
        pages: [
          {
            id: 'ad', 
            name: 'ad',
          },
          {
            id: 'adCustom', 
            name: 'ad-custom',
          },
          {
            id: 'afficialAccount', 
            name: 'afficial-account',
          },
        {
          id: 'openData', 
          name: 'open-data',
        },
        {
          id: 'webView',
          name: 'web-view',
        },
      ],
      },
      {
        id: 'obstacleFree',
        name: '无障碍访问',
        open: false,
        pages: [{
          id: 'ariaComponent',
          name: 'aria-component',
        }],
      },
      {
        id: 'navigationBar',
        name: '导航栏',
        open: false,
        pages: [{
          id: 'navigationBar',
          name: 'navigation-bar',
        }],
      },
    ],
  },
  kindToggle(e) {
    const id = e.currentTarget.id;
    const list = this.data.list;
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list,
    });
  },
});

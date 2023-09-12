Page({
  data: {
    list: [
      {
        id: 'basics',
        name: '基础',
        open: false,
        pages: [
          {
            id: 'basics',
            name: '基础',
          },
          {
            id: 'system',
            name: '系统',
          },
          {
            id: 'update',
            name: '更新',
          },
          {
            id: 'miniProgram',
            name: '小程序',
          },
          {
            id: 'debug',
            name: '调试',
          },
          {
            id: 'performance',
            name: '性能',
          },
          {
            id: 'packageLoading',
            name: '分包加载',
          },
          {
            id: 'encryption',
            name: '加密',
          },
        ],
      },
      {
        id: 'routing',
        name: '路由',
        open: false,
        pages: [],
      },
      {
        id: 'redirection',
        name: '跳转',
        open: false,
        pages: [],
      },
      {
        id: 'forward',
        name: '转发',
        open: false,
        pages: [],
      },
      {
        id: 'interface',
        name: '界面',
        open: false,
        pages: [
          {
            id: 'interaction',
            name: '交互',
          },
          {
            id: 'navigationBar',
            name: '导航栏',
          },
          {
            id: 'background',
            name: '背景',
          },
          {
            id: 'tabBar',
            name: 'Tab Bar',
          },
          {
            id: 'setFont',
            name: '字体',
          },
          {
            id: 'pullDownRefresh',
            name: '下拉刷新',
          },
          {
            id: 'scroll',
            name: '滚动',
          },
          {
            id: 'animation',
            name: '动画',
          },
          {
            id: 'setTop',
            name: '置顶',
          },
          {
            id: 'customizedComponents',
            name: '自定义组件',
          },
          {
            id: 'menu',
            name: '菜单',
          },
          {
            id: 'windows',
            name: '窗口',
          },
          {
            id: 'worklet',
            name: 'worklet 动画',
          },
        ],
      },
      {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            id: 'request',
            name: '发起请求',
          },
          {
            id: 'download',
            name: '下载',
          },
          {
            id: 'upload',
            name: '上传',
          },
          {
            id: 'webSocket',
            name: 'WebSocket',
          },
          {
            id: 'mDNS',
            name: 'mDNS',
          },
          {
            id: 'TCPCommunications',
            name: 'TCP 通信',
          },
          {
            id: 'UDPCommunications',
            name: 'UDP 通信',
          },
        ],
      },
      {
        id: 'payment',
        name: '支付',
        open: false,
        pages: [],
      },
      {
        id: 'cache',
        name: '数据缓存',
        open: false,
        pages: [],
      },
      {
        id: 'analysis',
        name: '数据分析',
        open: false,
        pages: [],
      },
      {
        id: 'xr-frame',
        name: 'XR-FRAME',
        open: false,
        pages: [],
      },
      {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: [],
      },
      {
        id: 'media',
        name: '媒体',
        open: false,
        pages: [
          {
            id: 'map',
            name: '地图',
          },
          {
            id: 'image',
            name: '图片',
          },
          {
            id: 'video',
            name: '视频',
          },
          {
            id: 'audio',
            name: '音频',
          },
          {
            id: 'backgroundAudio',
            name: '背景音频',
          },
          {
            id: 'realtimeAudioAndVideo',
            name: '实时音视频',
          },
          {
            id: 'recording',
            name: '录音',
          },
          {
            id: 'camera',
            name: '相机',
          },
          {
            id: 'richText',
            name: '富文本',
          },
          {
            id: 'audioOrVideoCompose',
            name: '音视频合成',
          },
          {
            id: 'realtimeVoice',
            name: '实时语音',
          },
          {
            id: 'screenRecorder',
            name: '画面录制器',
          },
          {
            id: 'videoDecoder',
            name: '视频解码器',
          },
        ],
      },
      {
        id: 'location',
        name: '位置',
        open: false,
        pages: [],
      },
      {
        id: 'file',
        name: '文件',
        open: false,
        pages: [],
      },
      {
        id: 'openAPIS',
        name: '开放接口',
        open: false,
        pages: [
          {
            id: 'login',
            name: '登录',
          },
          {
            id: 'accountInfomation',
            name: '账户信息',
          },
          {
            id: 'userInfomation',
            name: '用户信息',
          },
          {
            id: 'authorization',
            name: '授权',
          },
          {
            id: 'setting',
            name: '设置',
          },
          {
            id: 'recipientAddress',
            name: '收货地址',
          },
          {
            id: 'cardsAndOffers',
            name: '卡券',
          },
          {
            id: 'invoice',
            name: '发票',
          },
          {
            id: 'biometricAuthorization',
            name: '生物认证',
          },
          {
            id: 'weRun',
            name: '微信运动',
          },
          {
            id: 'subscribeNews',
            name: '订阅消息',
          },
          {
            id: 'wechatRedRacket',
            name: '微信红包',
          },
          {
            id: 'collection',
            name: '收藏',
          },
          {
            id: 'mineMiniProgram',
            name: '我的小程序',
          },
          {
            id: 'licensePlate',
            name: '车牌',
          },
          {
            id: 'wechatVideoChannel',
            name: '视频号',
          },
          {
            id: 'deviceVoip',
            name: '音视频通话设备',
          },
          {
            id: 'wechatGroup',
            name: '微信群',
          },
          {
            id: 'privacyInformation',
            name: '隐私信息授权',
          },
          {
            id: 'wechatCustomerService',
            name: '微信客服',
          },
        ],
      },
      {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          {
            id: 'bluetoothGeneral',
            name: '蓝牙-通用',
          },
          {
            id: 'bluetoothLowCenter',
            name: '蓝牙-低功耗中心设备',
          },
          {
            id: 'bluetoothLowPerpherals',
            name: '蓝牙-低功耗外围设备',
          },
          {
            id: 'bluetoothBeacon',
            name: '蓝牙-信标(Beacon)',
          },
          {
            id: 'nfc',
            name: 'NFC',
          },
          {
            id: 'wifi',
            name: 'Wi-Fi',
          },
          {
            id: 'calendar',
            name: '日历',
          },
          {
            id: 'contact',
            name: '联系人',
          },
          {
            id: 'accessibility',
            name: '无障碍',
          },
          {
            id: 'bettery',
            name: '电量',
          },
          {
            id: 'nfcHCE',
            name: 'NFC 主机卡模拟',
          },
          {
            id: 'clipBoard',
            name: '剪切板',
          },
          {
            id: 'deviceNetwork',
            name: '网络',
          },
          {
            id: 'deviceEncryption',
            name: '加密',
          },
          {
            id: 'screen',
            name: '屏幕',
          },
          {
            id: 'keyboard',
            name: '键盘',
          },
          {
            id: 'phoneCall',
            name: '电话',
          },
          {
            id: 'accelerometer',
            name: '加速计',
          },
          {
            id: 'compass',
            name: '罗盘',
          },
          {
            id: 'deviceOrientation',
            name: '设备方向',
          },
          {
            id: 'gyroscope',
            name: '陀螺仪',
          },
          {
            id: 'memory',
            name: '内存',
          },
          {
            id: 'scan',
            name: '扫码',
          },
          {
            id: 'sms',
            name: '短信',
          },
          {
            id: 'vibration',
            name: '振动',
          },
        ],
      },
      {
        id: 'ai',
        name: 'AI',
        open: false,
        pages: [
          {
            id: 'inference',
            name: 'AI推理',
          },
          {
            id: 'visionAlgorithms',
            name: '视觉算法',
          },
          {
            id: 'faceRecognition',
            name: '人脸识别',
          },
        ],
      },
      {
        id: 'worker',
        name: 'Worker',
        open: false,
        pages: [],
      },
      {
        id: 'wxml',
        name: 'WXML',
        open: false,
        pages: [],
      },
      {
        id: 'thirdParty',
        name: '第三方平台',
        open: false,
        pages: [],
      },
      {
        id: 'advertising',
        name: '广告',
        open: false,
        pages: [],
      },
      {
        id: 'skyline',
        name: 'Skyline',
        open: false,
        pages: [],
      },
    ],
    iconList: {
      basics: '../../image/API/basics.png',
      routing: '../../image/API/routing.png',
      redirection: '../../image/API/redirection.png',
      forward: '../../image/API/forward.png',
      interface: '../../image/API/interface.png',
      network: '../../image/API/network.png',
      payment: '../../image/API/payment.png',
      cache: '../../image/API/cache.png',
      analysis: '../../image/API/analysis.png',
      'xr-frame': '../../image/API/xr-frame.png',
      canvas: '../../image/API/canvas.png',
      media: '../../image/API/media.png',
      location: '../../image/API/location.png',
      file: '../../image/API/file.png',
      openAPIS: '../../image/API/openAPIS.png',
      device: '../../image/API/device.png',
      ai: '../../image/API/ai.png',
      worker: '../../image/API/worker.png',
      wxml: '../../image/API/wxml.png',
      thirdParty: '../../image/API/thirdParty.png',
      advertising: '../../image/API/advertising.png',
      skyline: '../../image/API/skyline.png',
    },
    isSetTabBarPage: false,
  },
  showSetTabBar() {
    this.setData({
      isSetTabBarPage: true,
    })
  },
  hideSetTabBar() {
    this.setData({
      isSetTabBarPage: false,
    })
  },
})

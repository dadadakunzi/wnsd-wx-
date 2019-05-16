//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    indicatorDots: true, //小点
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 1000, //滑动时间
    height: 2000,
    customerNum: 0,
    powerTotal: 0,
    userInfo: {}, // 登录用户的信息
    // tabs: tabs, //展示的数据
    slideOffset: 0, //指示器每次移动的距离
    activeIndex: 0, //当前展示的Tab项索引
    sliderWidth: 96, //指示器的宽度,计算得到
    contentHeight: 0, //页面除去头部Tabbar后，内容区的总高度，计算得到
    currentTime: 61, 
    currentTab: 0,
    currentTab2: 0,
    navScrollLeft: 0,
    imgUrls: [{
      link: '/pages/index/index',
      url: 'http://zadai.net:8000/uploads/image001.jpg'
    }, {
      link: '/pages/logs/logs',
      url: 'http://zadai.net:8000/uploads/image002.jpg'
    }, {
      link: '/pages/index/index',
      url: 'http://zadai.net:8000/uploads/image003.png'
    }],
    navData: [{
      text: '朗诵周榜'
    },
    {
      text: '猜你喜欢'
    },
    {
      text: '已点伴奏'
    },

    {
      text: '飙升榜单'
    },
    ],
    sgData: [{
      imgs: '',
      poemName: '我爱祖国',
      peopleName: '张建坤',
      numPeople: '100万'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

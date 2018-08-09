// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ListInfo: [{
      icon: '../../dist/images/iconfont-dingdan.png',
      text: '干货推荐',
      url: '',
      isunread: false,
      unreadNum: 2
    }, {
      icon: '../../dist/images/iconfont-card.png',
      text: '感谢编辑们',
      url: 'http://gank.io/backbone',
      isunread: false,
      unreadNum: 2
    }, {
      icon: '../../dist/images/iconfont-icontuan.png',
      text: '关于',
      url: '',
      isunread: false,
      unreadNum: 1
    }, {
      icon: '../../dist/images/iconfont-shouhuodizhi.png',
      text: '版本更新',
      url: ''
    }, {
      icon: '../../dist/images/iconfont-kefu.png',
      text: 'Gank 的IOS版',
      url: 'https://github.com/ZQ330093887/GankIOSProgect'
    }, {
      icon: '../../dist/images/iconfont-help.png',
      text: 'Gank 的Android版',
      url: 'https://github.com/ZQ330093887/ConurbationsAndroid'
    }],
    winHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let winHeight = res.windowHeight;
        that.setData({
          winHeight: winHeight
        })
      },
    })
  },

  onClick: function (event) {
    var $title = event.currentTarget.dataset.title;
    var $newsUrl = event.currentTarget.dataset.url;
    console.log($newsUrl);
    if ($title == "干货推荐") {
      wx.navigateTo({
        url: '../push/push?newsUrl=' + $title,
      })
    } else if ($title == "感谢编辑们") {
      wx.navigateTo({
        url: '../webdetail/webdetail?newsUrl=' + $newsUrl,
      })
    } else if ($title == "Gank 的IOS版") {
      wx.navigateTo({
        url: '../webdetail/webdetail?newsUrl=' + $newsUrl,
      })
    } else if ($title == "Gank 的Android版") {
      wx.navigateTo({
        url: '../webdetail/webdetail?newsUrl=' + $newsUrl,
      })
    } else if ($title == "关于") {
      wx.navigateTo({
        url: '../about/about?newsUrl=' + $title,
      })
    } else if ($title == "版本更新") {
      wx.navigateTo({
        url: '../update/update?newsUrl=' + $title,
      })
    }
  },
  login: function (event){
    wx.navigateTo({
      url: '../login/login?newsUrl',
    })

  },
  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function (ops) {
  //   if (ops.id === 'shareBtn') {
  //     // 来自页面内转发按钮
  //     console.log(ops.target)
  //   }
  //   return {
  //     title: 'xx小程序',
  //     path: 'pages/index/index',
  //     success: function (res) {
  //       // 转发成功
  //       console.log("转发成功:" + JSON.stringify(res));
  //     },
  //     fail: function (res) {
  //       // 转发失败
  //       console.log("转发失败:" + JSON.stringify(res));
  //     }
  //   }
  // }
})
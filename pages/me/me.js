// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [{
        "name": "all",
        "url": '../../images/menu/all.png'
      },
      {
        "name": "iOS",
        "url": '../../images/menu/ios.png'
      },
      {
        "name": "App",
        "url": '../../images/menu/app.png'
      },
      {
        "name": "Android",
        "url": '../../images/menu/android.png'
      },
      {
        "name": "前端",
        "url": '../../images/menu/frontend.png'
      },
      {
        "name": "瞎推荐",
        "url": '../../images/menu/recomm.png'
      },
      {
        "name": "拓展资源",
        "url": '../../images/menu/resource.png'
      },
      {
        "name": "休息视频",
        "url": '../../images/menu/video.png'
      },
      {
        "name": "福利",
        "url": '../../images/menu/meizi.png'
      }
    ],

    menus01: [{
        "name": "干货推荐",
        "url": '../../images/menu/tuijian.png'
      },
      {
        "name": "感谢编辑",
        "url": '../../images/menu/bianji.png'
      },
      {
        "name": "版本更新",
        "url": '../../images/menu/genxin.png'
      },
      {
        "name": "关于作者",
        "url": '../../images/menu/zuozhe.png'
      }
    ],
    winHeight: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        let winHeight = res.windowHeight;
        that.setData({
          winHeight: winHeight
        })
      },
    })
  },
  
  login: function(event) {
    wx.navigateTo({
      url: '../login/login?newsUrl',
    })

  },
  wxClick: function(event) {
    console.log(event.currentTarget.dataset.name)

    var nUrl = "https://github.com/ZQ330093887/GankWX";
    wx.navigateTo({
      url: '../webdetail/webdetail?newsUrl=' + nUrl,
    })
  },
  wxflutter: function(event) {
    console.log(event.currentTarget.dataset.name)

    var nUrl = "https://github.com/ZQ330093887/GankFlutter";
    wx.navigateTo({
      url: '../webdetail/webdetail?newsUrl=' + nUrl,
    })
  },
  wxAndroid: function(event) {
    console.log(event.currentTarget.dataset.name)

    var nUrl = "https://github.com/ZQ330093887/ConurbationsAndroid";
    wx.navigateTo({
      url: '../webdetail/webdetail?newsUrl=' + nUrl,
    })
  },
  wxIOS: function(event) {
    console.log(event.currentTarget.dataset.name)

    var nUrl = "https://github.com/ZQ330093887/GankIOSProgect";
    wx.navigateTo({
      url: '../webdetail/webdetail?newsUrl=' + nUrl,
    })
  },
  //item的点击事件
  handleTapMiddle: function(event) {
    var $title = event.currentTarget.dataset.title;
    console.log($title);
    if ($title == '福利') {
      wx.navigateTo({
        url: '../wetify/wetify?title=' + $title,
      })
    } else if ($title == '干货推荐') {
      wx.navigateTo({
        url: '../push/push?newsUrl=' + $title,
      })
    } else if ($title == '感谢编辑') {
      wx.navigateTo({
        url: '../webdetail/webdetail?newsUrl=http://gank.io/backbone',
      })
    } else if ($title == '版本更新') {
      wx.navigateTo({
        url: '../update/update?newsUrl=' + $title,
      })
    } else if ($title == '关于作者') {
      wx.navigateTo({
        url: '../about/about?newsUrl=' + $title,
      })
    }else {
      wx.navigateTo({
        url: '../detail/detail?title=' + $title,
      })
    }
  },
})
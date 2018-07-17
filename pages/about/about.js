// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    AboutList: [{
      icon: '../../dist/images/iconfont-dingdan.png',
      text: '关于作者',
      url: 'https://www.jianshu.com/u/9681f3bbb8c2'
    }, {
      icon: '../../dist/images/iconfont-card.png',
      text: '作者 Github',
      url: 'https://github.com/ZQ330093887'
    }, {
      icon: '../../dist/images/iconfont-icontuan.png',
      text: '致谢干货集中营',
      url: 'http://gank.io'
    }, {
      icon: '../../dist/images/iconfont-shouhuodizhi.png',
      text: 'Gank 的 github仓库',
      url: 'https://github.com/ZQ330093887/GankIOSProgect'
    }],
    winHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.newsUrl,
    });

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

  onClick: function(event) {
    var $title = event.currentTarget.dataset.title;
    var $newsUrl = event.currentTarget.dataset.url;
    console.log($newsUrl);
    if ($title == "关于作者") {
      wx.navigateTo({
        //跳转到详情
        url: '../webview/webview?newsUrl=' + $newsUrl,
      })
    } else if ($title == "作者 Github") {
      wx.navigateTo({
        url: '../webview/webview?newsUrl=' + $newsUrl,
      })
    } else if ($title == "致谢干货集中营") {
      wx.navigateTo({
        url: '../webview/webview?newsUrl=' + $newsUrl,
      })
    } else if ($title == "Gank 的 github仓库") {
      wx.navigateTo({
        url: '../webview/webview?newsUrl=' + $newsUrl,
      })
    }
  },
})
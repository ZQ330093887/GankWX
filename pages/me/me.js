// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

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

  //item的点击事件
  handleTapMiddle: function(event) {
    var $title = event.currentTarget.dataset.title;
    console.log($title);
    if ($title == '干货推荐') {
      wx.navigateTo({
        url: '../push/push?newsUrl=' + $title,
      })
    } else if ($title == '仓库地址') {
      wx.setClipboardData({
        data: event.currentTarget.dataset.url,
        success: function(res) {
          wx.showToast({
            title: '复制成功',
            duration: 1000
          })
        }
      });
    } else if ($title == '版本更新') {
      wx.navigateTo({
        url: '../update/update?newsUrl=' + $title,
      })
    } else if ($title == '感谢说明') {
      wx.navigateTo({
        url: '../about/about?newsUrl=' + $title,
      })
    } else {
      wx.setClipboardData({
        data: event.currentTarget.dataset.url,
        success: function (res) {
          wx.showToast({
            title: '复制成功',
            duration: 1000
          })
        }
      });
    }
  },
})
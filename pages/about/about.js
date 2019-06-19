// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.newsUrl,
    });
  },

  onClick :function(event){
    wx.setClipboardData({
      data: event.currentTarget.dataset.url,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          duration:1000
        })
      }
    });
  }
})
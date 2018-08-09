// pages/webdetail/webdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsUrl: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      newsUrl: options.newsUrl
    })
  },

  copyTBL: function(e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.newsUrl,
      success: function(res) {
        // self.setData({copyTip:true}),
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function(res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        })
      }
    });
  }
})
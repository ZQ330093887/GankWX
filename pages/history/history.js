// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://gank.io/api/day/history',
      success: function (res) {
        // console.log(res.data.results)
        wx.hideLoading()
        that.setData({
          selected: res.data.results
        })
      }
    })
  },

})
// pages/wetify/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    updateList: [{
      time: '2018-7-16',
      vCode: 'v1.0.0',
      vTitle: '发布初步测试版'
    }, {
      time: '2018-8-10',
      vCode: 'v1.1.0',
      vTitle: '完善代码'
    }, {
      time: '2018-8-15',
      vCode: 'v1.1.1',
      vTitle: '微信小程序不支持打开非业务域名，暂时复制链接到浏览器中打开方式处理'
    }, {
      time: '2019-6-19',
      vCode: 'v2.0.0',
      vTitle: '重构，样式改版，v2.0一个里程碑项目'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.newsUrl,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
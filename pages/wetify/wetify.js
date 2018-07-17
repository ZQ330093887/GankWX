// pages/wetify/wetify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 1, // 当前页数  默认是1
    result: [] // 列表显示的数据源
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.loadingData();
  },

  /**
   * 下拉刷新回调
   */
  onPullDownRefresh: function() {
    console.log('--------下拉刷新-------');　
    var that = this;
    wx.showNavigationBarLoading();
    that.setData({
      currentPage: 1,
    })
    that.loadingData();
  },

  /**
   * 上拉加载更多
   */
  onReachBottom: function() {
    console.log('circle 下一页');
    var that = this;

    var tempCurrentPage = that.data.currentPage;
    tempCurrentPage = tempCurrentPage + 1
    that.setData({
      currentPage: tempCurrentPage
    })

    that.loadingData();
  },

  /**
   * 数据加载
   */
  loadingData: function() {
    var that = this;
    var pageIndex = that.data.currentPage;
    var url = 'http://gank.io/api/data/福利/10/' + pageIndex;
    console.log(url);
    wx.showLoading({
      title: '',
    })
    wx.request({
      url: url,
      success: function(res) {
        wx.hideLoading()
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
        if (pageIndex == 1) { //刷新
          that.setData({
            result: res.data.results
          })
        } else { //加载更多
          var tempArray = that.data.result
          tempArray = tempArray.concat(res.data.results)
          that.setData({
            result: tempArray
          })
        }
      }
    })
  },


  /**
   * 点击事件
   */
  onClick: function(event) {
    var $imgPath = event.currentTarget.dataset.url;
    var arrayObj = new Array();
    arrayObj.push($imgPath);
    wx.previewImage({
      current: $imgPath, // 当前显示图片的http链接
      urls: arrayObj // 需要预览的图片http链接列表
    })
  }
})
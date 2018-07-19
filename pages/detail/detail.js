// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoadingMore: false,
    currentPage: 1, // 当前页数  默认是1
    contentlist: [], // 列表显示的数据源
    titleInfo: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.title,
    });

    var that = this;
    that.data.titleInfo = that.options.title
    that.loadingData();

  },

  /**
   * 刷新
   */
  onPullDownRefresh: function() {
    // Do something when pull down.
    console.log('--------下拉刷新-------');　
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this;
    that.setData({
      currentPage: 1,
      isLoadingMore: false
    })
    that.loadingData();
  },

  /**
   * 加载更多
   */
  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log('circle 下一页');
    var self = this;

    var tempCurrentPage = self.data.currentPage;
    tempCurrentPage = tempCurrentPage + 1;
    self.setData({
      currentPage: tempCurrentPage,
      isLoadingMore: false
    })
    self.loadingData();
  },

  /**
   * 获取数据  pageIndex：页码参数
   */
  loadingData: function() {
    wx.showLoading({
      title: '',
    })
    var self = this;
    var pageIndex = self.data.currentPage;
    var url = 'https://gank.io/api/data/' + self.data.titleInfo + '/10/' + pageIndex;
    console.log(url)
    wx.request({
      url: url,
      success: function(res) {
        console.log(res.data)
        wx.hideLoading()
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
        if (pageIndex == 1) { //下拉刷新
          self.setData({
            contentlist: res.data.results,
          })
        } else { //加载更多
          var tempArray = self.data.contentlist;
          tempArray = tempArray.concat(res.data.results);
          self.setData({
            contentlist: tempArray,
          })
        }
      }
    })
  },

  /**
   * 点击事件
   */
  itemClick: function(event) {
    var $newsUrl = event.currentTarget.dataset.url;
    console.log($newsUrl);
    wx.navigateTo({
      //跳转到详情
      url: '../webview/webview?newsUrl=' + $newsUrl,
    })
  }
})
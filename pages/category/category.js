// pages/category/category.js
var app = getApp();
var tabs = [{
    name: "all"
  },
  {
    name: "福利"
  },
  {
    name: "前端"
  },
  {
    name: "Android"
  },
  {
    name: "iOS"
  }, {
    name: "瞎推荐"
  },
  {
    name: "拓展资源"
  },
  {
    name: "休息视频"
  },
  {
    name: "App"
  }
];
Page({

  /**
   * 页面的初始数据
   */

  data: {
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    isLoadingMore: false,
    currentPage: 1, // 当前页数  默认是1
    titleInfo: 'all',
    contentlist: [], // 列表显示的数据源
    tabs: tabs, //展示的数据
  },

  // 滚动切换标签样式
  switchTab: function(e) {
    var cur = e.detail.current;
    this.setData({
      currentTab: cur,
      titleInfo: tabs[cur].name
    });
    this.checkCor();
    var that = this;
    that.loadingData();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur,
        titleInfo: tabs[cur].name
      })
    }
    var that = this;
    that.loadingData();
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },

  onLoad: function() {
    var that = this;
    that.loadingData();
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 90;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },

  /**
   * 刷新
   */
  onPullRefresh: function() {
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
  loadMore: function() {
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
      url: '../webdetail/webdetail?newsUrl=' + $newsUrl,
    })
  },
    /**
   * 点击事件
   */
  onClick: function (event) {
    var $imgPath = event.currentTarget.dataset.url;
    var arrayObj = new Array();
    arrayObj.push($imgPath);
    wx.previewImage({
      current: $imgPath, // 当前显示图片的http链接
      urls: arrayObj // 需要预览的图片http链接列表
    })
  }
})
// pages/home/home.js
var util = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newWeek: '',
    homeUrl: 'http://gank.io/api/today'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var day = util.getStringSplitIndex(new Date(), 2);
    var month = util.getStringSplitIndex(new Date(), 1);
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      day: day,
      month: month,
    });
    //请求网络数据
    var that = this;
    wx.showLoading({
      title: '',
    })
    that.loadingData();
  },

  /**
   * 刷新
   */
  onPullDownRefresh: function() {
    console.log('--------下拉刷新-------');
    var that = this;
    that.setData({
      homeUrl: "http://gank.io/api/today",
      newWeek:""
    })
    wx.showNavigationBarLoading();
    wx.showLoading({
      title: '加载中…',
    })

    that.loadingData();
  },

  /**
   * 初始化网络数据
   */
  loadingData: function() {
    var self = this;
    var day = self.data.newWeek;
    console.log("#####" + day);
    if ("" != day) {
      self.setData({
        homeUrl: "http://gank.io/api/day/" + day
      })
    }

    var url = self.data.homeUrl;
    console.log(+"<-url")

    wx.request({
      url: url,
      success: function(res) {
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
        wx.hideLoading()
        console.log(res.data.results)
        //清除全局变量selectWeek
        app.getSelectWeek.selectWeek=""
        self.setData({
          contentlist: res.data,
        })
      }
    })

  },

  /***************点击事件*************/

  /**
   * item的点击事件
   */
  onClick: function(event) {
    var $url = event.currentTarget.dataset.url;
    // console.log($url+":url")
    wx.navigateTo({
      url: '../webview/webview?newsUrl=' + $url,
    })
  },

  /**
   * 图片的点击事件
   */
  clickImage: function(event) {
    var $url = event.currentTarget.dataset.url;
    var imageList = new Array();
    imageList.push($url);
    wx.previewImage({
      current: $url,
      urls: imageList,
    })
  },
  /**
   * 日历点击事件
   */

  clickHistory: function() {
    wx.navigateTo({
      url: '../history/history',
    })
  },

  onShow:function(){
    var that = this;
    var selectWeek = app.getSelectWeek.selectWeek;
    if('' == selectWeek) return;
    that.data.newWeek = selectWeek;
    that.loadingData();
  }
})
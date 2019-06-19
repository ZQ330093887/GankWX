// pages/home/home.js
//获取应用实例
const app = getApp()
const apiService = require('../../utils/apiService')
Page({
  data: {
    category: [],
    images: [],
    results: {},
    isLoad: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.selectDay == null) {
      this.initData()
      return
    }
    console.log(app.globalData.selectDay)
    this.getHistoryData(app.globalData.selectDay)
    app.globalData.selectDay = null
  },

  setLoadState: function (state) {
    if (!state) {
      wx.stopPullDownRefresh()
    }
    this.setData({
      isLoad: state
    })
  },
  initData: function () {
    const that = this;
    wx.showLoading({
      title: '加载中',
    })
    //今日资源api
    this.setLoadState(true)
    apiService.todayData().then(function (res) {
      console.log(res)
      wx.hideLoading();
      that.setLoadState(false)
      if (!res.error) {
        that.setData({
          category: res.category.sort(),
          results: res.results,
          images: res.results.福利
        })
      } else {
        console.log('请求错误')
      }
    }).catch(function (e) {
      that.setLoadState(false)
    })
  },
  //获取指定日期的数据
  getHistoryData: function (day) {
    const that = this;
    this.setLoadState(true)
    apiService.oneDayData(day).then(function (res) {
      console.log(res)
      that.setLoadState(false)
      if (!res.error) {
        that.setData({
          category: res.category.sort(),
          results: res.results

        })
      } else {
        console.log('请求错误')
      }

    }).catch(function (e) {
      that.setLoadState(false)
    })
    //首页选择日期后随机的banner图
    var page = Math.floor(Math.random() * 134 + 1)
    apiService.banner(page).then(function (res) {
      console.log(res)
      that.setLoadState(false)
      if (!res.error) {
        that.setData({
          images: res.results

        })
      } else {
        console.log('请求错误')
      }

    }).catch(function (e) {
      that.setLoadState(false)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //item 图片
  onTabsItemTap: function (event) {
    wx.previewImage({
      current: event.currentTarget.dataset.gid[0], // 当前显示图片的http链接
      urls: event.currentTarget.dataset.gid // 需要预览的图片http链接列表
    })
  },
  //banner大图 
  onBannerItemTap: function (event) {
    let index = event.currentTarget.id;
    let urls = this.data.images.map(function (item) {
      return item.url;
    });
    wx.previewImage({
      current: urls[index], // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  //跳转详情页
  onItemClick: function (event) {
    let data = event.currentTarget.dataset.gid;
    let url = '../webdetail/webdetail?newsUrl=' + data
    wx.navigateTo({
      url: url
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.initData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: app.globalData.shareTitle
    }
  },
})
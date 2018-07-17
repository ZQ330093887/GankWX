// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [{
        "name": "all",
        "url": '../../images/menu/all.png'
      },
      {
        "name": "iOS",
        "url": '../../images/menu/ios.png'
      },
      {
        "name": "Android",
        "url": '../../images/menu/android.png'
      },
      {
        "name": "前端",
        "url": '../../images/menu/frontend.png'
      },
      {
        "name": "瞎推荐",
        "url": '../../images/menu/recomm.png'
      },
      {
        "name": "拓展资源",
        "url": '../../images/menu/resource.png'
      },
      {
        "name": "App",
        "url": '../../images/menu/app.png'
      },
      {
        "name": "休息视频",
        "url": '../../images/menu/video.png'
      },
      {
        "name": "福利",
        "url": '../../images/menu/meizi.png'
      }
    ]
  },

  //item的点击事件
  handleTapMiddle: function(event) {
    var $title = event.currentTarget.dataset.title;
    console.log($title);
    if ($title == '福利') {
      wx.navigateTo({
        url: '../wetify/wetify?title=' + $title,
      })
    } else {
      wx.navigateTo({
        url: '../detail/detail?title=' + $title,
      })
    }
  },
})
// pages/login/login.js
var util = require('../../utils/util.js');
/**
 * toast提示框
 */
var toast = require('../../utils/toast/toast.js');
/**
 * dialog对话框
 */
var dialog = require('../../utils/dialog/dialog.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    errorMsg: ""
  },

  formSubmit:function(event){
    var account = event.detail.value.account;
    var password = event.detail.value.password;
    var that = this;
    if ("" == util.trim(account)) {
      util.isError("账号不能为空", that);
      // console.log("444444")
      toast.showToastDefault(that, "账号不能为空")
      return;
    } 
    if(""== util.trim(password)){
      util.isError("密码不能为空", that);
      toast.showToastDefault(that, "密码不能为空")
      return;
    }

    dialog.dialog({
      page: that,
      currentStatu: "open",
      message: "模拟登录成功",
      confirmText: '确定',
      confirmColor: "#00a7e5",
      confirm: function () {
        console.log("用户名：" + account+"密码："+password);
        wx.switchTab({
          url: '../me/me',
        })
      }
    })

  }
})
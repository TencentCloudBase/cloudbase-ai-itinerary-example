const { envList } = require('../../envList');

// pages/me/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openId: '',
    showUploadTip: false,
    itinerary: [
        // 这里可以是从服务器获取的行程列表数据
        // 示例数据结构：
        {
          destination: '深圳',
          start_date: '2023-12-01'
        },
        // ...
      ]
  },

  onLoad: function() {
    // 这里可以加载行程列表数据
    // 例如，从服务器请求数据或从本地JSON文件读取
  },
  goToDetail: function(e) {
    // 点击行程列表项跳转到详细行程页面
    const _id = e.currentTarget.dataset.id;

    wx.navigateTo({
      url: `/pages/itinerary/index?_id=${_id}`
    });
  },

  getOpenId() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
      .callFunction({
        name: 'quickstartFunctions',
        data: {
          type: 'getOpenId',
        },
      })
      .then((resp) => {
        this.setData({
          haveGetOpenId: true,
          openId: resp.result.openid,
        });
        wx.hideLoading();
      })
      .catch((e) => {
        this.setData({
          showUploadTip: true,
        });
        wx.hideLoading();
      });
  },

  gotoWxCodePage() {
    wx.navigateTo({
      url: `/pages/exampleDetail/index?envId=${envList?.[0]?.envId}&type=getMiniProgramCode`,
    });
  },
});

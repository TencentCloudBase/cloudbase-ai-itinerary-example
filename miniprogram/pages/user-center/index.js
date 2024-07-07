const { envList } = require('../../envList');

// pages/me/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openId: '',
    showUploadTip: false,
    itineraries: [
      ]
  },

  onLoad: async function() {
    // 这里可以加载行程列表数据
    const { data } = await wx.cloud.models.itinerary.list({
        filter: {
            where: {}
        },
        pageSize: 10,
        getCount: true, // 开启用来获取总数
    });
    
      // 返回查询到的数据列表 records 和 总数 total
      console.log(data);
      this.setData({
        itineraries: data.records
      })
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

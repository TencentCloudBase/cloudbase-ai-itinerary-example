// pages/cloudbaseModuleGuide/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    level:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: options?.level === 'main'?options?.subtitle:`${options?.title}-${options?.subtitle}`
    })
    this.setData({ title: options?.level === 'main'?options?.subtitle:options?.title});
  }
})
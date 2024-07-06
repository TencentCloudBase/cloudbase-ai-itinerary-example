Page({
  data: {
    moduleName: '',
    title:'',
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: options?.title
    })
    this.setData({ moduleName: options?.moduleName, title: options?.title.split('-')[0] });
  },
});

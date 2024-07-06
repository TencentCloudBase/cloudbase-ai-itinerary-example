// miniprogram/components/cloudTipModal/index.js
const { isMac } = require('../../envList.js');

Component({

  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: false,
    tipText: isMac ? 'sh ./uploadCloudFunction.sh' : './uploadCloudFunction.bat'
  },
  properties: {
    showUploadTipProps: Boolean
  },
  observers: {
    showUploadTipProps: function(showUploadTipProps) {
      this.setData({
        showUploadTip: showUploadTipProps
      });
    }
  },
  methods: {
    onCheckEnv(){
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
        .then(() => {
          wx.hideLoading();
          this.setData({
            showUploadTip: !this.data.showUploadTip
          });
        })
        .catch((e) => {
          // 报错信息提示环境不存在
          wx.hideLoading();
          if(e.message.includes('env not exists') || e.message.includes('Environment not found') || e.message.includes('env check invalid be filterd')){
            wx.showToast({
              title: '环境未找到',
              icon: 'error',
              duration: 2000
            })
          }
        });
    },

    onCheckEnvCancel(){
      this.setData({
        showUploadTip: !this.data.showUploadTip
      });
    },
  }
});

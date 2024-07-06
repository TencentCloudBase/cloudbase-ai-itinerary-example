// pages/exampleDetail/index.js
Page({
  data: {
    type: '',
    envId: '',
    showUploadTip: false,

    haveGetOpenId: false,
    openId: '',

    haveGetCodeSrc: false,
    codeSrc: '',

    haveGetRecord: false,
    record: '',

    haveGetImgSrc: false,
    imgSrc: '',
  },

  onLoad(options) {
    this.setData({ type: options?.type, envId: options?.envId });
  },

  getOpenId() {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid
      });
      wx.hideLoading();
    }).catch((e) => {
      this.setData({
        showUploadTip: true
      });
      wx.hideLoading();
    });
  },

  clearOpenId() {
    this.setData({
      haveGetOpenId: false,
      openId: ''
    });
  },

  getCodeSrc() {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getMiniProgramCode'
      }
    }).then((resp) => {
      this.setData({
        haveGetCodeSrc: true,
        codeSrc: resp.result
      });
      wx.hideLoading();
    }).catch((e) => {
      console.log(e);
      this.setData({
        showUploadTip: true
      });
      wx.hideLoading();
    });
  },

  clearCodeSrc() {
    this.setData({
      haveGetCodeSrc: false,
      codeSrc: ''
    });
  },

  getRecord() {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'selectRecord'
      }
    }).then((resp) => {
      this.setData({
        haveGetRecord: true,
        record: resp.result.data
      });
      wx.hideLoading();
    }).catch((e) => {
      console.log(e);
      this.setData({
        showUploadTip: true
      });
      wx.hideLoading();
    });
  },

  clearRecord() {
    this.setData({
      haveGetRecord: false,
      record: ''
    });
  },

  uploadImg() {
    wx.showLoading({
      title: '',
    });
    // 让用户选择一张图片
    wx.chooseImage({
      count: 1,
      success: chooseResult => {
        // 将图片上传至云存储空间
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: 'my-photo.png',
          // 指定要上传的文件的小程序临时文件路径
          filePath: chooseResult.tempFilePaths[0],
          config: {
            env: this.data.envId
          }
        }).then(res => {
          console.log('上传成功', res);
          this.setData({
            haveGetImgSrc: true,
            imgSrc: res.fileID
          });
          wx.hideLoading();
        }).catch((e) => {
          console.log(e);
          wx.hideLoading();
        });
      },
    });
  },

  clearImgSrc() {
    this.setData({
      haveGetImgSrc: false,
      imgSrc: ''
    });
  },

  goOfficialWebsite() {
    const url = 'https://docs.cloudbase.net/toolbox/quick-start';
    wx.navigateTo({
      url: `../web/index?url=${url}`,
    });
  },

})
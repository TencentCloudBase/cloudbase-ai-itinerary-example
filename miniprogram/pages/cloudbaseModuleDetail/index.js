// pages/exampleDetail/index.js
// 云模板未安装错误码
const CLOUD_MODULE_NOT_INSTALLED = 'InnerError.ResourceNotFound';

Page({
  data: {
    type: '',
    envId: '',
    showUploadTip: false,
    installModalVisible: false,
    installModalTipText: '',
    installModuleName: '',
    installModulePageTitle: '',
    userOpenId: 'ouSoxxxxxxxxxxxxxJp3zM',
    currentOpenId:'',
    templateId: 'XeULkxnxxxxxxxxxxxxxx9vRO0olhrQi34',
    getErrorInfo:'',
    securityContent:'hello world!',
    securityMedia:'https://developers.weixin.qq.com/miniprogram/assets/images/head_global_z_@all.png',
    mediaId:'MEDIA_ID',
    sendCustomMessage:'Hello World',
    urlLink:'https://wxaurl.cn/difT1VdVOLa',
    smsTemplateId:'2053122',
    phoneNumber:'+8611111111111',
    appid:'appid',
    csvLink:'extension://xxx.zip',
    qrcode:'',
    unlimitedQrcode:'',
    qrcodeShortLink:''
  },
  handdleResult: function(data){
    if(data.message.includes('env not exists') || data.message.includes('Environment not found') || data.message.includes('env check invalid be filterd')){
      this.setData({
        showUploadTip: true,
      });
    }
    wx.hideLoading();
  },
  bindKeyInputCsvLink: function(e){
    this.setData({
      csvLink: e.detail.value
    })
  },
  bindKeyInputUrlLink: function(e){
    this.setData({
      urlLink: e.detail.value
    })
  },
  bindKeyInputSmsTemplateId: function(e){
    this.setData({
      smsTemplateId: e.detail.value
    })
  },
  bindKeyInputPhoneNumber: function(e){
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  bindKeyInputAppid: function(e){
    this.setData({
      appid: e.detail.value
    })
  },
  bindKeyInputSendCustomMessage: function(e){
    this.setData({
      sendCustomMessage: e.detail.value
    })
  },
  bindKeyInputMediaId: function(e){
    this.setData({
      mediaId: e.detail.value
    })
  },
  bindKeyInputSecurityMedia: function(e){
    this.setData({
      securityMedia: e.detail.value
    })
  },
  bindKeyInputSecurityContent: function(e){
    this.setData({
      securityContent: e.detail.value
    })
  },
  bindKeyInputTemplateId: function (e) {
    this.setData({
      templateId: e.detail.value
    })
  },
  bindKeyInputOpenId: function (e) {
    this.setData({
      userOpenId: e.detail.value
    })
  },
  clearError: function(){
    this.setData({
      userOpenId: '',
      templateId: '',
      getErrorInfo:'',
      securityMedia:'',
      securityContent:'',
      mediaId:'',
      sendCustomMessage:'',
      urlLink:'',
      smsTemplateId:'',
      phoneNumber:'',
      appid:'',
      csvLink:'',
      qrcode:'',
      unlimitedQrcode:'',
      qrcodeShortLink:''
    })  
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: `${options?.title}-${options?.subtitle}`
    })
    this.setData({ type: options?.type, envId: options?.envId});
  },

  // 发送消息
  sendMessage() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
      .callFunction({
        name: 'cloudbase_module',
        data: {
          name: 'wx_message_send_message',
          data: {
            template_id: this.data.templateId, // 所需下发的订阅模板id
            page: "pages/index/index", //点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转
            touser: this.data.userOpenId, //接收者（用户）的 openid
            data:{ "thing1": { "value": 123 }, "thing4": { "value": 123 },"thing6": { "value": 123 },"thing7": { "value": 123 },"time6":{"value": "2022-11-32"} }, //模板内容，格式形如 { "key1": { "value": any }, "key2": { "value": any } }的object
            miniprogram_state:"trial", //跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版
            lang:"zh_CN" //进入小程序查看”的语言类型，支持zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为zh_CN
          },
        },
      })
      .then((resp) => {
        if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
          this.setData({
            installModalVisible: true,
            installModalTipText: '云开发>云模板>模板中心>小程序消息',
            installModuleName: 'wx_message_send_message',
            installModulePageTitle:'小程序消息-发送消息'
          });
        }else if(resp?.result?.errcode !== -1){
          wx.showToast({
            title: "发送失败",
            icon: 'error',
            duration: 2000
          });
          this.setData({
            getErrorInfo:resp?.result?.errmsg,
          })
        }else {
          wx.showToast({
            title: "发送成功",
            icon: 'success',
            duration: 2000
          }); 
        }
        wx.hideLoading();
      })
      .catch((e) => {
        this.handdleResult(e);
      });
  },

  // 创建activity_id
  createMessageActivityId() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
      .callFunction({
        name: 'cloudbase_module',
        data: {
          name: 'wx_message_create_activity_id',
          data: {
            openid: this.data.userOpenId, //为私密消息创建activity_id时，指定分享者为openid用户。其余用户不能用此activity_id分享私密消息。openid与unionid填一个即可。私密消息暂不支持云函数生成activity id。
          },
        }
      })
      .then((resp) => {
        if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
          this.setData({
            installModalVisible: true,
            installModalTipText: '云开发>云模板>模板中心>小程序消息',
            installModuleName: 'wx_message_send_message',
            installModulePageTitle:'小程序消息-创建activity_id'
          });
        }else if(resp?.result?.activityId){
          wx.showToast({
            title: "创建成功",
            icon: 'success',
            duration: 2000
          }); 
        }else {
          wx.showToast({
            title: "创建失败",
            icon: 'error',
            duration: 2000
          });
          this.setData({
            getErrorInfo:resp?.result?.errmsg,
          })
        } 
        wx.hideLoading();
      })
      .catch((e) => {
        this.handdleResult(e);
      });    
  },

  // 获取小程序码
  getCodeSrc() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
      .callFunction({
        name: 'cloudbase_module',
        data: {
          name: 'wx_qrcode_get_qrcode',
          data: {
            path: 'pages/index/index', // 扫码进入的小程序页面路径，最大长度 1024 个字符，不能为空，scancode_time为系统保留参数，不允许配置；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsSync 接口中的 query 参数获取到 {foo:"bar"}。
            width: 430, //二维码的宽度，单位 px。默认值为430，最小 280px，最大 1280px
            auto_color: false, //默认值false；自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调
            line_color: { r: 0, g: 0, b: 0 }, //默认值{"r":0,"g":0,"b":0} ；auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
            is_hyaline: false, //默认值false；是否需要透明底色，为 true 时，生成透明底色的小程序码
            env_version: 'trial', //要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop"。默认是正式版。
          },
        },
      })
      .then((resp) => {
        if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
          this.setData({
            installModalVisible: true,
            installModalTipText: '云开发>云模板>模板中心>微信小程序码和链接',
            installModuleName: 'wx_qrcode',
            installModulePageTitle:'微信小程序码和链接-获取小程序码'
          });
        } else {
          wx.showToast({
            title: "获取成功",
            icon: 'success',
            duration: 2000
          }); 
          this.setData({
            qrcode: resp.result.tempFileURL,
          });
        }
        wx.hideLoading();
      })
      .catch((e) => {
        this.handdleResult(e);
      });
  },

  // 获取不限制的小程序码
  getUnlimitedCodeSrc() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
      .callFunction({
        name: 'cloudbase_module',
        data: {
          name: 'wx_qrcode_get_unlimited_qrcode',
          data: {
            scene: 'abc', //最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
            page: 'pages/index/index', //默认是主页，页面 page，例如 pages/index/index，根路径前不要填加 /，不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面。scancode_time为系统保留参数，不允许配置
            check_path: true, //默认是true，检查page 是否存在，为 true 时 page 必须是已经发布的小程序存在的页面（否则报错）；为 false 时允许小程序未发布或者 page 不存在， 但page 有数量上限（60000个）请勿滥用。
            env_version: 'trial', //要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop"。默认是正式版。
            width: 430, // 默认430，二维码的宽度，单位 px，最小 280px，最大 1280px
            auto_color: false, //自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false
            line_color: {"r":0,"g":0,"b":0}, //默认是{"r":0,"g":0,"b":0} 。auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
            is_hyaline: false, //默认是false，是否需要透明底色，为 true 时，生成透明底色的小程序
          },
        },
      })
      .then((resp) => {
        if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
          this.setData({
            installModalVisible: true,
            installModalTipText: '云开发>云模板>模板中心>微信小程序码和链接',
            installModuleName: 'wx_qrcode',
            installModulePageTitle:'微信小程序码和链接-获取不限制的小程序码'
          });
        }else if(resp.result?.errmsg){
          wx.showToast({
            title: "获取失败",
            icon: 'error',
            duration: 2000
          }); 
          this.setData({
            getErrorInfo:resp?.result?.errmsg,
          })
        } else {
          wx.showToast({
            title: "获取成功",
            icon: 'success',
            duration: 2000
          }); 
          this.setData({
            unlimitedQrcode: resp.result.tempFileURL,
          });
        }
        wx.hideLoading();
      })
      .catch((e) => {
        this.handdleResult(e);
      });
  },

  // 获取ShortLink
  getShortLink() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
      .callFunction({
        name: 'cloudbase_module',
        data: {
          name: 'wx_qrcode_generate_short_link',
          data: {
            page_url: 'pages/index/index', // 通过 Short Link 进入的小程序页面路径，必须是已经发布的小程序存在的页面，可携带 query，最大1024个字符
            page_title: '首页', //页面标题，不能包含违法信息，超过20字符会用... 截断代替
            is_permanent: false, //默认值false。生成的 Short Link 类型，短期有效：false，永久有效：true
          },
        },
      })
      .then((resp) => {
        if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
          this.setData({
            installModalVisible: true,
            installModalTipText: '云开发>云模板>模板中心>微信小程序码和链接',
            installModuleName: 'wx_qrcode',
            installModulePageTitle:'微信小程序码和链接-获取ShortLink'
          });
        }else if(resp.result?.errmsg){
          wx.showToast({
            title: "获取失败",
            icon: 'error',
            duration: 2000
          }); 
          this.setData({
            getErrorInfo:resp?.result?.errmsg,
          })
        } else {
          wx.showToast({
            title: "获取成功",
            icon: 'success',
            duration: 2000
          }); 
          this.setData({
            qrcodeShortLink: resp.result.tempFileURL,
          });
        }
        wx.hideLoading();
      })
      .catch((e) => {
        this.handdleResult(e);
      });
  },

  
// 发送短信
sendCloudbaseSms() {
  wx.showLoading({
    title: '',
  });
  wx.cloud
    .callFunction({
      name: 'cloudbase_module',
      data: {
        name: 'wx_sms_new_send_cloudbase_sms',
        data: {
          env: this.data.envId, // 环境 ID
          url_link: this.data.urlLink, // URL Link
          template_id: this.data.smsTemplateId, //短信模版 ID 默认值：2053122（销类短信模版 ID)
          template_param_list: ['xxx'], //短信模版变量数组
          phone_number_list: [this.data.phoneNumber], //手机号列表，单次请求最多支持 1000 个境内手机号，手机号必须以+86开头
          use_short_name: false, //是否使用小程序简称
          resource_appid: this.data.appid, //资源方appid，第三方代开发时可填第三方appid或小程序appid，应为所填环境所属的账号APPID
        },
      },
    })
    .then((resp) => {
      if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
        this.setData({
          installModalVisible: true,
          installModalTipText: '云开发>云模板>模板中心>小程序短信',
          installModuleName: 'wx_sms_new_send_cloudbase_sms',
          installModulePageTitle:'小程序短信-发送短信'
        });
      }else if(resp?.result?.errmsg){
        wx.showToast({
          title: "发送失败",
          icon: 'error',
          duration: 2000
        });
        this.setData({
          getErrorInfo:resp?.result?.errmsg,
        })
      }else {
        wx.showToast({
          title: "发送成功",
          icon: 'success',
          duration: 2000
        }); 
      } 
      wx.hideLoading();
    })
    .catch((e) => {
      this.handdleResult(e);
    });    
  },

  // 创建发短信任务
  sendCloudbaseSmsTask() {
    wx.showLoading({
      title: '',
    });
  wx.cloud
    .callFunction({
      name: 'cloudbase_module',
      data: {
        name: 'wx_sms_create_send_sms_task',
        data:{
          env: this.data.envId, // 环境 ID
          file_url: this.data.csvLink, //短信 CSV 文件地址CodeUri
          template_id: this.data.smsTemplateId, //短信模版 ID 默认值：2053122（销类短信模版 ID)
          use_short_name: false //是否使用小程序简称
        }
      },
    })
    .then((resp) => {
      if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
        this.setData({
          installModalVisible: true,
          installModalTipText: '云开发>云模板>模板中心>小程序短信',
          installModuleName: 'wx_sms_new_send_cloudbase_sms',
          installModulePageTitle:'小程序短信-创建发短信任务'
        });
      }else if(resp?.result?.errmsg){
        wx.showToast({
          title: "创建失败",
          icon: 'error',
          duration: 2000
        });
        this.setData({
          getErrorInfo:resp?.result?.errmsg,
        })
      }else {
        wx.showToast({
          title: "创建成功",
          icon: 'success',
          duration: 2000
        }); 
      } 
      wx.hideLoading();
    })
    .catch((e) => {
      this.handdleResult(e);
    });    
  },

  // 文本内容安全识别
  securityMessageCheck() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
    .callFunction({
      name: 'cloudbase_module',
      data: {
        name: 'wx_security_msg_sec_check',
        data: {
          scene: 1, // 场景值 1, 代表资料
          version: 2, // 接口版本号，2.0版本为固定值2
          content: this.data.securityContent, // 要检测的内容
        },
      },
    })
    .then((resp) => {
      if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
        this.setData({
          installModalVisible: true,
          installModalTipText: '云开发>云模板>模板中心>小程序安全能力',
          installModuleName: 'wx_security_msg_sec_check',
          installModulePageTitle:'小程序安全能力-文本内容安全识别'
        });
      }else if(resp?.result?.result?.label === 100){
        wx.showToast({
          title: "内容正常",
          icon: 'success',
          duration: 2000
        }); 
      }else{
        wx.showToast({
          title: "内容异常",
          icon: 'error',
          duration: 2000
        }); 
      }
      wx.hideLoading();
    })
    .catch((e) => {
      this.handdleResult(e);
    });    
  },

  // 音视频内容安全识别
  securityMediaCheck() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
    .callFunction({
      name: 'cloudbase_module',
      data: {
        name: 'wx_security_media_check',
        data: {
          scene: 1, // 场景值 1, 代表资料
          version: 2, // 接口版本号，2.0版本为固定值2
          media_url: this.data.securityMedia, // 要检测的内容
          media_type: 2, //媒体资源类型，2 代表图片图片
        },
      },
    })
    .then((resp) => {
      if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
        this.setData({
          installModalVisible: true,
          installModalTipText: '云开发>云模板>模板中心>小程序安全能力',
          installModuleName: 'wx_security_msg_sec_check',
          installModulePageTitle:'小程序安全能力-音视频内容安全识别'
        });
      }else if(resp?.result?.errmsg){
        wx.showToast({
          title: "内容异常",
          icon: 'error',
          duration: 2000
        }); 
        this.setData({
          getErrorInfo:resp?.result?.errmsg,
        })
      }else{
        wx.showToast({
          title: "内容正常",
          icon: 'success',
          duration: 2000
        });   
      }
      wx.hideLoading();
    })
    .catch((e) => {
      this.handdleResult(e);
    });    
  },
  
  // 获取用户openId
  getUserOpenId() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
    .callFunction({
      name: 'cloudbase_module',
      data: {
        name: 'wx_user_get_open_id',
      },
    })
    .then((resp) => {
      if (resp?.result?.errcode === CLOUD_MODULE_NOT_INSTALLED) {
        this.setData({
          installModalVisible: true,
          installModalTipText: '云开发>云模板>模板中心>小程序用户信息',
          installModuleName: 'wx_user_get_open_id',
          installModulePageTitle:'小程序用户信息-获取用户openId'
        });
      }else {
        this.setData({
          currentOpenId: resp.result.openId,
        });
      }
      wx.hideLoading();
    })
    .catch((e) => {
      this.handdleResult(e);
    });    
  },

  // 手机号快速验证
  getPhoneNumber(e) {
    console.log(e.detail.code); // 动态令牌
    wx.cloud.callFunction({
      name: 'cloudbase_module',
      data: {
        name: 'wx_user_get_phone_number',
        data: {
          code: e.detail.code,
        },
      },
      success: (res) => {
        const phoneInfo = res.result?.phoneInfo;
        console.log('获取到的手机号信息: ', phoneInfo);
      },
    });
  }
});

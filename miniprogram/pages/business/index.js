// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {
    showUploadTip: false,
    businessList: [
      {
        title: '小程序消息',
        tip: '在小程序中通过几行代码即可发送订阅消息',
        showItem: false,
        item: [
          {
            type: 'wx_message_send_message',
            title: '发送消息',
          },
          {
            type: 'wx_message_create_activity_id',
            title: '创建activity_id',
          },
        ],
      },
      {
        title: '微信小程序码和链接',
        tip: '在小程序中快速获取小程序码和short link',
        showItem: false,
        item: [
          {
            type: 'wx_qrcode_get_qrcode',
            title: '获取小程序码',
          },
          {
            type: 'wx_qrcode_get_unlimited_qrcode',
            title: '获取不限制的小程序码',
          },
          {
            type: 'wx_qrcode_generate_short_link',
            title: '获取ShortLink',
          },
        ],
      },
      {
        title: '小程序短信',
        tip: '在小程序中向指定用户发送短信和创建发送短信的任务',
        showItem: false,
        item: [
          {
            type: 'wx_sms_new_send_cloudbase_sms',
            title: '发送短信',
          },
          {
            type: 'wx_sms_create_send_sms_task',
            title: '创建发短信任务',
          },
        ],
      },
      {
        title: '小程序安全能力',
        tip: '在小程序中可以几行代码即可调用小程序的内容安全识别能力',
        showItem: false,
        item: [
          {
            type: 'wx_security_msg_sec_check',
            title: '文本内容安全识别',
          },
          {
            type: 'wx_security_media_check',
            title: '音视频内容安全识别',
          },
        ],
      },
      {
        title: '小程序用户信息',
        tip: '在小程序中通过几行代码即可获取当前用户的信息',
        showItem: false,
        item: [
          {
            type: 'wx_user_get_open_id',
            title: '获取用户openId',
          },
          {
            type: 'wx_user_get_phone_number',
            title: '手机号快速验证',
          },
        ],
      },
      {
        title: '小程序微信支付',
        tip: '在小程序中通过几行代码即可调用微信支付的能力',
        showItem: false,
        item: [
          {
            title: '使用指南',
          }
        ],
      },
      {
        title: '轮播图管理',
        tip: '结合商品订单管理流程，提供订单信息列表展示/查询/导出等相关能力。',
        showItem: false,
        item: [
          {
            title: '使用指南',
          },
        ],
      },
      {
        title: '管理商品和订单',
        tip: '通过云模板，快速实现小程序内的商品信息展示/查询/上架/删除/分类管理等。',
        showItem: false,
        item: [
          {
            title: '内容管理系统（CMS）',
            level:'main'
          },
          {
            title: '商品管理',
            level:'main'
          },
          {
            title: '订单管理',
            level:'main'
          },
        ],
      },
      {
        title: '管理云开发数据和文件',
        tip: '通过云模板，快速实现小程序管理后台所需的CMS内容管理/数据库管理/文件管理等能力。',
        showItem: false,
        item: [
          {
            title: '云存储管理',
            level:'main'
          },
          {
            title: '云数据库管理',
            level:'main'
          },
        ],
      }
    ],
    envList,
    selectedEnv: envList?.[0],
    haveCreateCollection: false,
  },

  onClickBusinessInfo(e) {
    const index = e.currentTarget.dataset.index;
    const businessList = this.data.businessList;
    const selectedItem = businessList[index];
    selectedItem.showItem = !selectedItem.showItem;
    this.setData({
      businessList,
    });
  },

  jumpBusinessPage(e) {
    const { title, subtitle, type,level } = e.currentTarget.dataset;
    if (type) {
      wx.navigateTo({
        url: `/pages/cloudbaseModuleDetail/index?envId=${this.data.selectedEnv}&type=${type}&title=${title}&subtitle=${subtitle}`,
      });
    } else {
      console.log(level);
      wx.navigateTo({
        url: `/pages/cloudbaseModuleGuide/index?title=${title}&subtitle=${subtitle}&level=${level}`,
      });
    }
  }
});

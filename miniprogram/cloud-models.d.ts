
import { DataModelMethods } from "@cloudbase/wx-cloud-client-sdk";
interface IModalChatBi_0Fds5ByAppXdBjq3Ai {}
interface IModalChatBiDashGroup_4Pmlo60 {
  /**
   * 分组名称
   *
   */
  group_name: string;
  /**
   * 显示
   *
   */
  group_show?: boolean;
  /**
   * 排序
   *
   */
  group_sort?: number;
  /**
   * 分组标识
   *
   */
  group_key: string;
}

interface IModalChatBiDbs_3Dcsfvf {
  /**
   * 数据表类型
   *
   */
  db_type?: string;
  /**
   * 推荐问题
   *
   */
  db_recommend_question?: string[];
  /**
   * 数据表标识
   *
   */
  db_name?: string;
  /**
   * 表字段
   *
   */
  db_fields?: {
    /**
     * 字段名称
     *
     */
    db_field_name?: string;
    /**
     * 描述
     *
     */
    db_field_description?: string;
  }[];
  /**
   * 数据表备注
   *
   */
  db_title?: string;
}

interface IModalChatBiSessionOwubz62 {
  /**
   * 字段配置
   *
   */
  chart_config?: {
    /**
     * axisType
     * 指标 / 维度，'metrics' | 'dimensions'
     */
    axisType?: string;
    /**
     * key
     *
     */
    key?: string;
    /**
     * desc
     *
     */
    desc?: string;
  }[];
  /**
   * 配置模式
   * 图表配置模式, config / sql
   */
  edit_type?: string;
  /**
   * 数据表标识
   *
   */
  table_name?: string;
  /**
   * 查询语句
   *
   */
  sql: string;
  /**
   * 默认图表类型
   *
   */
  chart_type?: string;
  /**
   * 查询Prompt
   *
   */
  prompt: string;
  /**
   * 会话ID
   *
   */
  conversation?: string;
  /**
   * 数据表描述
   *
   */
  db_fields?: string;
  /**
   * 图表分组
   *
   */
  group_key?: string;
}

interface IModalItinerary {
  /**
   * 目的地
   *
   */
  destination?: string;
  /**
   * 行程
   *
   */
  days?: {
    /**
     * 活动
     *
     */
    activities?: {
      /**
       *  名称
       *
       */
      name?: string;
      /**
       * 描述
       *
       */
      description?: string;
      /**
       *  地点
       *
       */
      location?: string;
      /**
       * 时间
       *
       */
      time?: string;
    }[];
    /**
     * 第几天
     *
     */
    day?: number;
  }[];
  /**
   * 出发日期
   *
   */
  start_date?: number;
}

interface IModalAiCk {
  /**
   * 向量化Document名称
   * 向量化Document名称
   */
  docSetName?: string;
  /**
   * 文件大小
   * 文件大小
   */
  filesize?: number;
  /**
   * 文件名称
   * 文件名称
   */
  filename?: string;
  /**
   * 知识库名称
   * 知识库名称
   */
  name?: string;
  /**
   * 知识库预处理状态
   * New: 待处理
   * Loading：处理中
   * Failure：解析失败
   * Ready：解析完成
   */
  docIndexedStatus?: string;
  /**
   * 知识库启用状态
   * 知识库启用状态,0: 已启用，1 未启用, 默认为 1
   */
  status?: number;
  /**
   * 向量化Document ID
   *
   */
  docSetId?: string;
}

interface IModalAibotWxkfUdvtydn {}
interface IModalSquaredLottery_1Atq341AppFaExVNNC {}
interface IModalSquaredLottery_1Atq341AppTQq94V0X {}
interface IModalWinningRecor_1Pbmktx {
  /**
   * 地区
   *
   */
  area?: string;
  /**
   * 详细地址
   * 详细地址
   */
  address?: string;
  /**
   * 奖品
   *
   */
  prizeItem?: string;
  /**
   * 微信openId
   * 用户微信openId
   */
  userOpenId?: string;
  /**
   * 收货人姓名
   *
   */
  nickName?: string;
  /**
   * 用户Id
   * 用户Id
   */
  userId?: string;
  /**
   * 奖品Id
   * 奖品Id
   */
  prizeId?: string;
  /**
   * 已发货
   * 已发货
   */
  shipped?: boolean;
  /**
   * 收货人手机
   *
   */
  phone?: string;
  /**
   * 抽奖用户
   *
   */
  user?: string;
  /**
   * 关联奖品对象
   */
  "@prizeItem"?: {
    v1?: {
      record?: IModalPrizePgt1Uru;
    };
  };
  /**
   * 关联抽奖用户对象
   */
  "@user"?: {
    v1?: {
      record?: IModalUserAgsm4Q0;
    };
  };
}

interface IModalEventAs1Snvh {
  /**
   * deviceType
   * 访问设备类型, e.g., pc, phone
   */
  deviceType?: string;
  /**
   * country
   * 国家
   */
  country?: string;
  /**
   * deviceOS
   * 访问设备操作系统
   */
  deviceOS?: string;
  /**
   * userId
   * 用户标识
   */
  userId?: string;
  /**
   * result
   * 事件结果
   */
  result?: string;
  /**
   * sourceIp
   * 请求来源IP
   */
  sourceIp?: string;
  /**
   * name
   * 事件, e.g., view, share, login
   */
  name?: string;
  /**
   * deviceModel
   * 访问设备型号
   */
  deviceModel?: string;
  /**
   * region
   * 地区
   */
  region?: string;
  /**
   * deviceBrand
   * 访问设备品牌
   */
  deviceBrand?: string;
}

interface IModalDrawResultPwmxaco {
  /**
   * userOpenId
   * 用户微信openId
   */
  userOpenId?: string;
  /**
   * userName
   * 用户名
   */
  userName?: string;
  /**
   * userId
   * 用户Id
   */
  userId?: string;
  /**
   * prizeId
   * 奖品Id
   */
  prizeId?: string;
}

interface IModalStatisticsXt224Nt {
  /**
   * count
   * 数量
   */
  count?: number;
  /**
   * totalCount
   * 截止当前总数
   */
  totalCount?: number;
  /**
   * deviceBrandGroup
   * 按照设备品牌聚合, e.g., {'iphone': 101}
   */
  deviceBrandGroup?: string;
  /**
   * regionGroup
   * 按照地域聚合数据, e.g., {'zhejiang': 500}
   */
  regionGroup?: string;
  /**
   * deviceTypeGroup
   * 按照访问设备聚合数据, e.g., {'pc': 100}
   */
  deviceTypeGroup?: string;
  /**
   * category
   * 统计数据维度 e.g., pv, uv, shareCount
   */
  category: string;
}

interface IModalPrizePgt1Uru {
  /**
   * 奖品图片
   * 奖品图片
   */
  image?: string;
  /**
   * 奖品描述
   * 奖品描述
   */
  description?: string;
  /**
   * 奖品剩余数量
   * 奖品剩余数量
   */
  stockQuantity: number;
  /**
   * 中奖概率
   * 中奖概率
   */
  winningProbability: number;
  /**
   * 数据记录版本
   * 数据记录版本, 用于实现乐观锁
   */
  version?: number;
  /**
   * 是否安慰奖
   * 是否为安慰奖
   */
  isPlaceholder: boolean;
  /**
   * 奖品名称
   * 奖品名称
   */
  name: string;
  /**
   * 奖品在列表中的位置
   * 奖品在列表中的位置
   */
  position?: number;
  /**
   * 奖品总数量
   * 奖品总数量
   */
  initQuantity: number;
}

interface IModalUserAgsm4Q0 {
  /**
   * 地区
   *
   */
  area?: string;
  /**
   * 自定义用户ID
   *
   */
  customUserId?: string;
  /**
   * 微信openId
   * 微信 openId
   */
  openId?: string;
  /**
   * 用户昵称
   * 用户昵称
   */
  nickName?: string;
  /**
   * 用户头像
   * 用户头像
   */
  avatar?: string;
  /**
   * 详细地址
   * 详细地址, e.g.,和平里街道400号
   */
  addressDetail?: string;
  /**
   * 手机号码
   * 手机号码
   */
  phone?: string;
  /**
   * 是否抽过奖
   * 用户是否抽过奖
   */
  hasDrawn?: boolean;
  /**
   * 用户名
   * 用户名
   */
  name?: string;
}

interface IModalLottery_7Tglt0Z {
  /**
   * 单日抽奖次数上限
   * 单日抽奖次数上限
   */
  totalDrawsLimit?: number;
  /**
   * 抽奖完成音乐
   * 抽奖完成音乐
   */
  finishMusic?: string;
  /**
   * 分享图片
   * 分享图片
   */
  shareImage?: string;
  /**
   * 活动规则
   * 活动规则
   */
  rule?: string;
  /**
   * 活动主题
   * 活动主题
   */
  title: string;
  /**
   * 背景音乐
   * 背景音乐
   */
  music?: string;
  /**
   * 分享标题
   * 分享标题
   */
  shareTitle?: string;
  /**
   * 背景图片
   * 背景图片
   */
  background?: string;
  /**
   * 活动开始时间
   * 活动开始时间
   */
  startTime?: number;
  /**
   * 单用户单日抽奖次数上限
   * 单用户单日抽奖次数上限
   */
  drawsPerUserLimit?: number;
  /**
   * 活动结束时间
   * 活动结束时间
   */
  endTime?: number;
  /**
   * 分享描述
   * 分享描述
   */
  shareDesc?: string;
  /**
   * 抽奖中音乐
   * 抽奖中音乐
   */
  rollingMusic?: string;
}

interface IModalLottery_76X75KlAppZ92UXx0R {}
interface IModalWinningRecorSxsgw7J {
  /**
   * 地区
   *
   */
  area?: string;
  /**
   * 详细地址
   * 详细地址
   */
  address?: string;
  /**
   * 奖品
   *
   */
  prizeItem?: string;
  /**
   * 微信openId
   * 用户微信openId
   */
  userOpenId?: string;
  /**
   * 收货人姓名
   *
   */
  nickName?: string;
  /**
   * 用户Id
   * 用户Id
   */
  userId?: string;
  /**
   * 奖品Id
   * 奖品Id
   */
  prizeId?: string;
  /**
   * 已发货
   * 已发货
   */
  shipped?: boolean;
  /**
   * 收货人手机
   *
   */
  phone?: string;
  /**
   * 抽奖用户
   *
   */
  user?: string;
  /**
   * 关联奖品对象
   */
  "@prizeItem"?: {
    v1?: {
      record?: IModalPrizeC0U0Rgb;
    };
  };
  /**
   * 关联抽奖用户对象
   */
  "@user"?: {
    v1?: {
      record?: IModalUser_80Sdy6F;
    };
  };
}

interface IModalDrawResult_8Zme4Rh {
  /**
   * userOpenId
   * 用户微信openId
   */
  userOpenId?: string;
  /**
   * userName
   * 用户名
   */
  userName?: string;
  /**
   * userId
   * 用户Id
   */
  userId?: string;
  /**
   * prizeId
   * 奖品Id
   */
  prizeId?: string;
}

interface IModalEventP4R7K21 {
  /**
   * deviceType
   * 访问设备类型, e.g., pc, phone
   */
  deviceType?: string;
  /**
   * country
   * 国家
   */
  country?: string;
  /**
   * deviceOS
   * 访问设备操作系统
   */
  deviceOS?: string;
  /**
   * userId
   * 用户标识
   */
  userId?: string;
  /**
   * result
   * 事件结果
   */
  result?: string;
  /**
   * sourceIp
   * 请求来源IP
   */
  sourceIp?: string;
  /**
   * name
   * 事件, e.g., view, share, login
   */
  name?: string;
  /**
   * deviceModel
   * 访问设备型号
   */
  deviceModel?: string;
  /**
   * region
   * 地区
   */
  region?: string;
  /**
   * deviceBrand
   * 访问设备品牌
   */
  deviceBrand?: string;
}

interface IModalStatisticsObkjdui {
  /**
   * count
   * 数量
   */
  count?: number;
  /**
   * totalCount
   * 截止当前总数
   */
  totalCount?: number;
  /**
   * deviceBrandGroup
   * 按照设备品牌聚合, e.g., {'iphone': 101}
   */
  deviceBrandGroup?: string;
  /**
   * regionGroup
   * 按照地域聚合数据, e.g., {'zhejiang': 500}
   */
  regionGroup?: string;
  /**
   * deviceTypeGroup
   * 按照访问设备聚合数据, e.g., {'pc': 100}
   */
  deviceTypeGroup?: string;
  /**
   * category
   * 统计数据维度 e.g., pv, uv, shareCount
   */
  category: string;
}

interface IModalPrizeC0U0Rgb {
  /**
   * 奖品图片
   * 奖品图片
   */
  image?: string;
  /**
   * 奖品描述
   * 奖品描述
   */
  description?: string;
  /**
   * 奖品剩余数量
   * 奖品剩余数量
   */
  stockQuantity: number;
  /**
   * 中奖概率
   * 中奖概率
   */
  winningProbability: number;
  /**
   * 数据记录版本
   * 数据记录版本, 用于实现乐观锁
   */
  version?: number;
  /**
   * 是否安慰奖
   * 是否为安慰奖
   */
  isPlaceholder: boolean;
  /**
   * 奖品名称
   * 奖品名称
   */
  name: string;
  /**
   * 奖品在列表中的位置
   * 奖品在列表中的位置
   */
  position?: number;
  /**
   * 奖品总数量
   * 奖品总数量
   */
  initQuantity: number;
}

interface IModalUser_80Sdy6F {
  /**
   * 地区
   *
   */
  area?: string;
  /**
   * 自定义用户ID
   *
   */
  customUserId?: string;
  /**
   * 微信openId
   * 微信 openId
   */
  openId?: string;
  /**
   * 用户昵称
   * 用户昵称
   */
  nickName?: string;
  /**
   * 用户头像
   * 用户头像
   */
  avatar?: string;
  /**
   * 详细地址
   * 详细地址, e.g.,和平里街道400号
   */
  addressDetail?: string;
  /**
   * 手机号码
   * 手机号码
   */
  phone?: string;
  /**
   * 是否抽过奖
   * 用户是否抽过奖
   */
  hasDrawn?: boolean;
  /**
   * 用户名
   * 用户名
   */
  name?: string;
}

interface IModalLotteryO4Ywwg7 {
  /**
   * 单日抽奖次数上限
   * 单日抽奖次数上限
   */
  totalDrawsLimit?: number;
  /**
   * 抽奖完成音乐
   * 抽奖完成音乐
   */
  finishMusic?: string;
  /**
   * 分享图片
   * 分享图片
   */
  shareImage?: string;
  /**
   * 活动规则
   * 活动规则
   */
  rule?: string;
  /**
   * 活动主题
   * 活动主题
   */
  title: string;
  /**
   * 背景音乐
   * 背景音乐
   */
  music?: string;
  /**
   * 分享标题
   * 分享标题
   */
  shareTitle?: string;
  /**
   * 背景图片
   * 背景图片
   */
  background?: string;
  /**
   * 活动开始时间
   * 活动开始时间
   */
  startTime?: number;
  /**
   * 单用户单日抽奖次数上限
   * 单用户单日抽奖次数上限
   */
  drawsPerUserLimit?: number;
  /**
   * 活动结束时间
   * 活动结束时间
   */
  endTime?: number;
  /**
   * 分享描述
   * 分享描述
   */
  shareDesc?: string;
  /**
   * 抽奖中音乐
   * 抽奖中音乐
   */
  rollingMusic?: string;
}

interface IModalAiBotServiceAccountU853Wfk_Apff {}
interface IModalAibotWxkfUdvtydnIiis {}
interface IModalAiBotSubscriptionAcount_16Q9L5GTCxf {}
interface IModalAiBotMpJftg8Ta_Pxou {}
interface IModalAiBotChatHistoryYhksihv {
  /**
   * 角色
   * assistant 代表 AI
   * user 代表用户
   */
  role?: string;
  /**
   * 智能体
   *
   */
  bot?: string;
  /**
   * 是否异步回复
   *
   */
  need_async_reply?: boolean;
  /**
   * 消息类型
   * 消息的类型 text | image | event
   */
  type?: string;
  /**
   * 内容
   * 字段内容
   */
  content?: string;
  /**
   * 推荐问题
   *
   */
  recommend_questions?: string[];
  /**
   * 被回复的消息id
   *
   */
  reply_to?: string;
  /**
   * 事件类型
   * 如果是事件类型的消息会有此字段
   */
  event?: string;
  /**
   * 回复的消息id
   *
   */
  reply?: string;
  /**
   * 会话
   * 会话信息
   */
  conversation?: string;
  /**
   * 原始消息内容
   *
   */
  origin_msg?: string;
  /**
   * 图片地址
   * 图片类型的消息会有此字段
   */
  image?: string;
  /**
   * 请求 id
   *
   */
  trace_id?: string;
  /**
   * 会话纠错备注
   *
   */
  modified_remark?: string;
  /**
   * 用户环境
   *
   */
  env?: string;
  /**
   * 来源
   *
   */
  trigger_src?: string;
  /**
   * 发送者
   *
   */
  sender?: string;
  /**
   * 参考知识
   *
   */
  refs?: string;
  /**
   * 会话纠错状态
   * 是否要手动纠正AI对话返回数据，-1: 不处理；0: 处理中；1: 已处理
   */
  modified_status?: string;
  /**
   * 异步回复内容
   *
   */
  async_reply?: string;
  /**
   * 关联智能体对象
   */
  "@bot"?: {
    v1?: {
      record?: IModalAiBotAgent_4Vppq8K;
    };
  };
}

interface IModalAiBotFeedback_5Hobd2J {
  /**
   * 智能体
   *
   */
  bot?: string;
  /**
   * 评分
   *
   */
  rating?: number;
  /**
   * 类型
   * 点踩downvote 点赞 upvote
   */
  type?: string;
  /**
   * 评分标签
   *
   */
  tags?: string[];
  /**
   * 用户输入
   *
   */
  input?: string;
  /**
   * 环境 id
   *
   */
  env_id?: string;
  /**
   * AI 回答
   *
   */
  ai_answer?: string;
  /**
   * 反馈内容
   *
   */
  comment?: string;
  /**
   * 会话记录 ID
   *
   */
  conversation?: string;
  /**
   * 关联智能体对象
   */
  "@bot"?: {
    v1?: {
      record?: IModalAiBotAgent_4Vppq8K;
    };
  };
}

interface IModalAiBotAgent_4Vppq8K {
  /**
   * 发布范围
   * 默认为 public
   * 内部组织可见为 private
   */
  access?: string;
  /**
   * 回答后是否推荐问题
   *
   */
  is_need_recommand?: boolean;
  /**
   * 欢迎语
   * 用于存储智能体的欢迎语
   */
  welcome_message?: string;
  /**
   * 类型
   * text 文本
   * image 图片
   */
  type?: string;
  /**
   * 技能
   *
   */
  tools?: {
    /**
     * 技能标识
     *
     */
    name?: string;
    /**
     * API 方法标识
     * 当技能类型为 apis 是，这里填写 apis 的方法标识
     */
    apis_name?: string;
    /**
     * 类型
     * apis APIs
     * cloud-function 云函数
     * automation 工作流（自动化流）
     * 默认是 apis
     */
    type?: string;
  }[];
  /**
   * 智能体设定
   *
   */
  agent_setting?: string;
  /**
   * 人工服务回复的消息
   *
   */
  manual_reply?: string;
  /**
   * 是否支持流式输出
   *
   */
  stream?: boolean;
  /**
   * 是否启用
   *
   */
  enable?: boolean;
  /**
   * 推荐的问题
   *
   */
  init_questions?: string[];
  /**
   * 是否允许公开
   * 是否允许同步到云开发云模板中心
   */
  public_to_market?: boolean;
  /**
   * 智能体简介
   * 用于存储智能体的简介
   */
  introduction?: string;
  /**
   * 智能体自定义消息处理工作流
   * 支持自定义消息处理的工作流
   */
  custom_msg_handler?: string;
  /**
   * 创建人
   *
   */
  author?: string;
  /**
   * 智能体头像
   * 用于存储智能体头像的图片链接或者AI生成的图片ID。
   */
  avatar?: string;
  /**
   * 创建人环境ID
   *
   */
  author_env_id?: string;
  /**
   * 是否显示侧边栏
   *
   */
  show_sidebar?: boolean;
  /**
   * 标签
   *
   */
  tags?: string[];
  /**
   * 聊天背景图
   *
   */
  background?: string;
  /**
   * 智能体名称
   * 用于存储智能体的名称
   */
  name: string;
  /**
   * 知识库
   *
   */
  knowledges?: string[];
  /**
   * 人工服务的消息类型
   * 文本类型 text
   * 图片类型 image
   */
  manual_reply_type?: string;
}

interface IModalWxzfmbddsjSHMt {
  /**
   * 商品名称
   *
   */
  spmc?: string;
  /**
   * 订单号
   *
   */
  ddh?: string;
  /**
   * 商品价格
   *
   */
  spjg?: number;
  /**
   * 支付状态
   * 1表示未支付
   * 2表示已支付
   * 3表示退款中
   * 4表示已退款
   */
  zfzt?: number;
}

interface IModalWxzfspxxKBCBw {
  /**
   * 商品名称
   *
   */
  spmc?: string;
  /**
   * 商品描述
   *
   */
  spms?: string;
  /**
   * 商品图片
   *
   */
  sptp?: string;
  /**
   * 商品价格
   *
   */
  spjg?: number;
}

interface IModalTapis_PnLO {}
interface IModalQygwjjfa_4AqON {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalBusinessHYHv {
  /**
   * 首页展示图片
   *
   */
  index_show?: string[];
  /**
   * 功能展示
   * undefined
   */
  function_show?: {
    /**
     * 图标
     * undefined
     */
    icon?: string;
    /**
     * 文字说明
     * undefined
     */
    text?: string;
  }[];
  /**
   * 公司地址
   *
   */
  address?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
  /**
   * 联系电话
   * undefined
   */
  phone?: string;
  /**
   * 品牌简介
   *
   */
  intro?: string;
  /**
   * 电子邮箱
   *
   */
  email?: string;
  /**
   * 合作伙伴
   * undefined
   */
  cooperation?: {
    /**
     * 图片
     * undefined
     */
    pic?: string;
  }[];
}

interface IModalAppScenarDroU {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 副标题
   *
   */
  sub_title?: string;
  /**
   * 背景图
   *
   */
  backgroud_pic?: string;
  /**
   * 说明
   *
   */
  description?: string;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 内容
   *
   */
  content?: string;
  /**
   * 详情图片
   *
   */
  detail_pic?: string;
}

interface IModalBusinessHYHvSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalQygwzxdtKSSfo {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 图片
   *
   */
  picture?: string;
  /**
   * 内容
   *
   */
  content?: string;
}

interface IModalWxzfmbddsjDtjU {
  /**
   * 商品名称
   *
   */
  spmc?: string;
  /**
   * 订单号
   *
   */
  ddh?: string;
  /**
   * 商品价格
   *
   */
  spjg?: number;
  /**
   * 支付状态
   * 1表示未支付
   * 2表示已支付
   * 3表示退款中
   * 4表示已退款
   */
  zfzt?: number;
}

interface IModalWxzfspxxK_JLUr {
  /**
   * 商品名称
   *
   */
  spmc?: string;
  /**
   * 商品描述
   *
   */
  spms?: string;
  /**
   * 商品图片
   *
   */
  sptp?: string;
  /**
   * 商品价格
   *
   */
  spjg?: number;
}

interface IModalMykhyyDy5HgZg {
  /**
   * 预约日期
   *
   */
  date: number;
  /**
   * 预约人id
   *
   */
  wxOpenId: string;
  /**
   * 预约电话
   *
   */
  telephone: string;
  /**
   * 服务id
   *
   */
  serviceId: string;
  /**
   * 状态
   *
   */
  status: string;
  /**
   * 关联服务id对象
   */
  "@serviceId"?: {
    v1?: {
      record?: IModalMyfwY3A80QWvK;
    };
  };
}

interface IModalMyfwflFlt_GyuS {
  /**
   * 分类icon
   *
   */
  icon: string;
  /**
   * 分类名称
   *
   */
  name: string;
  /**
   * 首页展示
   *
   */
  inHome: boolean;
}

interface IModalMydpxxQ0N_FPkA {
  /**
   * 地区选择
   *
   */
  area?: string;
  /**
   * 开始工作日
   *
   */
  startKey?: string;
  /**
   * 详细地址
   *
   */
  address?: string;
  /**
   * 客服电话
   *
   */
  telphones: string;
  /**
   * 开始时间
   *
   */
  start?: number;
  /**
   * 轮播图
   *
   */
  carousels: string[];
  /**
   * 结束工作日
   *
   */
  endKey?: string;
  /**
   * 店铺名称
   *
   */
  name: string;
  /**
   * 店铺logo
   *
   */
  logo: string;
  /**
   * 结束时间
   *
   */
  end?: number;
  /**
   * 地图位置
   *
   */
  map?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
}

interface IModalMyfwY3A80QWvK {
  /**
   * 服务图片
   *
   */
  image: string;
  /**
   * 售价
   *
   */
  salePrice: number;
  /**
   * 服务时长(小时)
   * 请输入服务时长，服务时长必须是整数
   */
  duration: number;
  /**
   * 服务名称
   *
   */
  name: string;
  /**
   * 服务详情
   *
   */
  detail?: string;
  /**
   * 服务分类id
   *
   */
  categoryId: string;
  /**
   * 是否推荐
   * 推荐后显示在首页只显示最新添加的四个服务
   */
  isHot?: boolean;
  /**
   * 上架状态
   *
   */
  status?: string;
  /**
   * 关联服务分类id对象
   */
  "@categoryId"?: {
    v1?: {
      record?: IModalMyfwflFlt_GyuS;
    };
  };
}

interface IModalBusiness_PnGbSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalTapisJQRB {}
interface IModalQygwzxdtK_AxSG {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 图片
   *
   */
  picture?: string;
  /**
   * 内容
   *
   */
  content?: string;
}

interface IModalBusiness_KvDrSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalAppScenarSbWR {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 副标题
   *
   */
  sub_title?: string;
  /**
   * 背景图
   *
   */
  backgroud_pic?: string;
  /**
   * 说明
   *
   */
  description?: string;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 内容
   *
   */
  content?: string;
  /**
   * 详情图片
   *
   */
  detail_pic?: string;
}

interface IModalBusiness_KvDr {
  /**
   * 首页展示图片
   *
   */
  index_show?: string[];
  /**
   * 功能展示
   * undefined
   */
  function_show?: {
    /**
     * 图标
     * undefined
     */
    icon?: string;
    /**
     * 文字说明
     * undefined
     */
    text?: string;
  }[];
  /**
   * 公司地址
   *
   */
  address?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
  /**
   * 联系电话
   * undefined
   */
  phone?: string;
  /**
   * 品牌简介
   *
   */
  intro?: string;
  /**
   * 电子邮箱
   *
   */
  email?: string;
  /**
   * 合作伙伴
   * undefined
   */
  cooperation?: {
    /**
     * 图片
     * undefined
     */
    pic?: string;
  }[];
}

interface IModalQygwjjfa_4VBbG {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalMykhyyDy5_CSOz {
  /**
   * 预约日期
   *
   */
  date: number;
  /**
   * 预约人id
   *
   */
  wxOpenId: string;
  /**
   * 预约电话
   *
   */
  telephone: string;
  /**
   * 服务id
   *
   */
  serviceId: string;
  /**
   * 状态
   *
   */
  status: string;
  /**
   * 关联服务id对象
   */
  "@serviceId"?: {
    v1?: {
      record?: IModalMyfwY3A80SYkq;
    };
  };
}

interface IModalMyfwY3A80SYkq {
  /**
   * 服务图片
   *
   */
  image: string;
  /**
   * 售价
   *
   */
  salePrice: number;
  /**
   * 服务时长(小时)
   * 请输入服务时长，服务时长必须是整数
   */
  duration: number;
  /**
   * 服务名称
   *
   */
  name: string;
  /**
   * 服务详情
   *
   */
  detail?: string;
  /**
   * 服务分类id
   *
   */
  categoryId: string;
  /**
   * 是否推荐
   * 推荐后显示在首页只显示最新添加的四个服务
   */
  isHot?: boolean;
  /**
   * 上架状态
   *
   */
  status?: string;
  /**
   * 关联服务分类id对象
   */
  "@categoryId"?: {
    v1?: {
      record?: IModalMyfwflFltTNxJ;
    };
  };
}

interface IModalMydpxxQ0NCNJq {
  /**
   * 地区选择
   *
   */
  area?: string;
  /**
   * 开始工作日
   *
   */
  startKey?: string;
  /**
   * 详细地址
   *
   */
  address?: string;
  /**
   * 客服电话
   *
   */
  telphones: string;
  /**
   * 开始时间
   *
   */
  start?: number;
  /**
   * 轮播图
   *
   */
  carousels: string[];
  /**
   * 结束工作日
   *
   */
  endKey?: string;
  /**
   * 店铺名称
   *
   */
  name: string;
  /**
   * 店铺logo
   *
   */
  logo: string;
  /**
   * 结束时间
   *
   */
  end?: number;
  /**
   * 地图位置
   *
   */
  map?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
}

interface IModalMyfwflFltTNxJ {
  /**
   * 分类icon
   *
   */
  icon: string;
  /**
   * 分类名称
   *
   */
  name: string;
  /**
   * 首页展示
   *
   */
  inHome: boolean;
}

interface IModalTapis_CVWN {}
interface IModalHdszSr1WwSvRs {
  /**
   * 奖品位置1
   *
   */
  prize1: string;
  /**
   * 中奖限制
   *
   */
  maxHitNum: number;
  /**
   * 活动说明设置
   *
   */
  activityDesc: {
    /**
     * 标题
     *
     */
    title?: string;
    /**
     * 详细描述
     *
     */
    desc?: string;
  }[];
  /**
   * 中奖概率
   *
   */
  rate: number;
  /**
   * 活动开始时间
   *
   */
  startTime: number;
  /**
   * 每天抽奖次数
   *
   */
  dailyChances: number;
  /**
   * 是否限制总抽奖次数
   *
   */
  isLimitTotal: string;
  /**
   * 奖品位置8
   *
   */
  prize8: string;
  /**
   * 奖品位置6
   *
   */
  prize6: string;
  /**
   * 奖品位置7
   *
   */
  prize7: string;
  /**
   * 奖品位置4
   *
   */
  prize4: string;
  /**
   * 奖品位置5
   *
   */
  prize5: string;
  /**
   * 活动主标题
   *
   */
  mainTitle: string;
  /**
   * 奖品位置2
   *
   */
  prize2: string;
  /**
   * 活动副标题
   *
   */
  subtitle: string;
  /**
   * 奖品设置
   *
   */
  prizes: {
    /**
     * 奖品描述
     *
     */
    prizeDesc?: string;
    /**
     * 转盘位置
     *
     */
    number?: number;
    /**
     * 奖品名称
     *
     */
    prizeName?: string;
    /**
     * 奖品图片
     *
     */
    prizeImg?: string;
    /**
     * 奖品标识
     *
     */
    prizeId?: string;
  }[];
  /**
   * 奖品位置3
   *
   */
  prize3: string;
  /**
   * 活动结束时间
   *
   */
  endTime: number;
  /**
   * 总抽奖次数
   *
   */
  totalChances?: number;
}

interface IModalCjjgRjkciAQEG {
  /**
   * 收货地址
   *
   */
  addressInfo?: {
    /**
     * 地区
     *
     */
    area?: string;
    /**
     * 详细地址
     *
     */
    address?: string;
    /**
     * 收货人手机
     *
     */
    phone?: string;
    /**
     * 收货人姓名
     *
     */
    nickName?: string;
  };
  /**
   * 小程序openId
   *
   */
  openId: string;
  /**
   * 是否需要邮寄
   *
   */
  isPost: boolean;
  /**
   * 奖品标识
   *
   */
  prizeId?: string;
  /**
   * 中奖时间
   *
   */
  prizeTime?: number;
  /**
   * 奖品名称
   *
   */
  prizeName?: string;
}

interface IModalJplbA7Nux_TBeg {
  /**
   * 奖品描述
   *
   */
  prizeDesc: string;
  /**
   * 奖品图片
   *
   */
  prizeImg: string;
  /**
   * 是否需要邮寄
   *
   */
  isPost: boolean;
  /**
   * 奖品标识
   *
   */
  prizeId?: string;
  /**
   * 奖品状态
   *
   */
  prizeStatus?: string;
  /**
   * 总数量
   *
   */
  total: number;
  /**
   * 奖品名称
   *
   */
  prizeName: string;
  /**
   * 剩余数量
   *
   */
  prizeRemaining?: number;
}

interface IModalMykhyyDy5ZeBn {
  /**
   * 预约日期
   *
   */
  date: number;
  /**
   * 预约人id
   *
   */
  wxOpenId: string;
  /**
   * 预约电话
   *
   */
  telephone: string;
  /**
   * 服务id
   *
   */
  serviceId: string;
  /**
   * 状态
   *
   */
  status: string;
  /**
   * 关联服务id对象
   */
  "@serviceId"?: {
    v1?: {
      record?: IModalMyfwY3A80ABHO;
    };
  };
}

interface IModalMyfwY3A80ABHO {
  /**
   * 服务图片
   *
   */
  image: string;
  /**
   * 售价
   *
   */
  salePrice: number;
  /**
   * 服务时长(小时)
   * 请输入服务时长，服务时长必须是整数
   */
  duration: number;
  /**
   * 服务名称
   *
   */
  name: string;
  /**
   * 服务详情
   *
   */
  detail?: string;
  /**
   * 服务分类id
   *
   */
  categoryId: string;
  /**
   * 是否推荐
   * 推荐后显示在首页只显示最新添加的四个服务
   */
  isHot?: boolean;
  /**
   * 上架状态
   *
   */
  status?: string;
  /**
   * 关联服务分类id对象
   */
  "@categoryId"?: {
    v1?: {
      record?: IModalMyfwflFltHwwQ;
    };
  };
}

interface IModalMydpxxQ0NGOoi {
  /**
   * 地区选择
   *
   */
  area?: string;
  /**
   * 开始工作日
   *
   */
  startKey?: string;
  /**
   * 详细地址
   *
   */
  address?: string;
  /**
   * 客服电话
   *
   */
  telphones: string;
  /**
   * 开始时间
   *
   */
  start?: number;
  /**
   * 轮播图
   *
   */
  carousels: string[];
  /**
   * 结束工作日
   *
   */
  endKey?: string;
  /**
   * 店铺名称
   *
   */
  name: string;
  /**
   * 店铺logo
   *
   */
  logo: string;
  /**
   * 结束时间
   *
   */
  end?: number;
  /**
   * 地图位置
   *
   */
  map?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
}

interface IModalMyfwflFltHwwQ {
  /**
   * 分类icon
   *
   */
  icon: string;
  /**
   * 分类名称
   *
   */
  name: string;
  /**
   * 首页展示
   *
   */
  inHome: boolean;
}

interface IModalTapis_ABCr {}
interface IModalCjjgRjkciRjwj {
  /**
   * 收货地址
   *
   */
  addressInfo?: {
    /**
     * 地区
     *
     */
    area?: string;
    /**
     * 详细地址
     *
     */
    address?: string;
    /**
     * 收货人手机
     *
     */
    phone?: string;
    /**
     * 收货人姓名
     *
     */
    nickName?: string;
  };
  /**
   * 小程序openId
   *
   */
  openId: string;
  /**
   * 是否需要邮寄
   *
   */
  isPost: boolean;
  /**
   * 奖品标识
   *
   */
  prizeId?: string;
  /**
   * 中奖时间
   *
   */
  prizeTime?: number;
  /**
   * 奖品名称
   *
   */
  prizeName?: string;
}

interface IModalJplbA7NuxZDoC {
  /**
   * 奖品描述
   *
   */
  prizeDesc: string;
  /**
   * 奖品图片
   *
   */
  prizeImg: string;
  /**
   * 是否需要邮寄
   *
   */
  isPost: boolean;
  /**
   * 奖品标识
   *
   */
  prizeId?: string;
  /**
   * 奖品状态
   *
   */
  prizeStatus?: string;
  /**
   * 总数量
   *
   */
  total: number;
  /**
   * 奖品名称
   *
   */
  prizeName: string;
  /**
   * 剩余数量
   *
   */
  prizeRemaining?: number;
}

interface IModalHdszSr1WwMDQy {
  /**
   * 奖品位置1
   *
   */
  prize1: string;
  /**
   * 中奖限制
   *
   */
  maxHitNum: number;
  /**
   * 活动说明设置
   *
   */
  activityDesc: {
    /**
     * 标题
     *
     */
    title?: string;
    /**
     * 详细描述
     *
     */
    desc?: string;
  }[];
  /**
   * 中奖概率
   *
   */
  rate: number;
  /**
   * 活动开始时间
   *
   */
  startTime: number;
  /**
   * 每天抽奖次数
   *
   */
  dailyChances: number;
  /**
   * 是否限制总抽奖次数
   *
   */
  isLimitTotal: string;
  /**
   * 奖品位置8
   *
   */
  prize8: string;
  /**
   * 奖品位置6
   *
   */
  prize6: string;
  /**
   * 奖品位置7
   *
   */
  prize7: string;
  /**
   * 奖品位置4
   *
   */
  prize4: string;
  /**
   * 奖品位置5
   *
   */
  prize5: string;
  /**
   * 活动主标题
   *
   */
  mainTitle: string;
  /**
   * 奖品位置2
   *
   */
  prize2: string;
  /**
   * 活动副标题
   *
   */
  subtitle: string;
  /**
   * 奖品设置
   *
   */
  prizes: {
    /**
     * 奖品描述
     *
     */
    prizeDesc?: string;
    /**
     * 转盘位置
     *
     */
    number?: number;
    /**
     * 奖品名称
     *
     */
    prizeName?: string;
    /**
     * 奖品图片
     *
     */
    prizeImg?: string;
    /**
     * 奖品标识
     *
     */
    prizeId?: string;
  }[];
  /**
   * 奖品位置3
   *
   */
  prize3: string;
  /**
   * 活动结束时间
   *
   */
  endTime: number;
  /**
   * 总抽奖次数
   *
   */
  totalChances?: number;
}

interface IModalMykhyyDy5_YLuT {
  /**
   * 预约日期
   *
   */
  date: number;
  /**
   * 预约人id
   *
   */
  wxOpenId: string;
  /**
   * 预约电话
   *
   */
  telephone: string;
  /**
   * 服务id
   *
   */
  serviceId: string;
  /**
   * 状态
   *
   */
  status: string;
  /**
   * 关联服务id对象
   */
  "@serviceId"?: {
    v1?: {
      record?: IModalMyfwY3A80Okbd;
    };
  };
}

interface IModalMyfwY3A80Okbd {
  /**
   * 服务图片
   *
   */
  image: string;
  /**
   * 售价
   *
   */
  salePrice: number;
  /**
   * 服务时长(小时)
   * 请输入服务时长，服务时长必须是整数
   */
  duration: number;
  /**
   * 服务名称
   *
   */
  name: string;
  /**
   * 服务详情
   *
   */
  detail?: string;
  /**
   * 服务分类id
   *
   */
  categoryId: string;
  /**
   * 是否推荐
   * 推荐后显示在首页只显示最新添加的四个服务
   */
  isHot?: boolean;
  /**
   * 上架状态
   *
   */
  status?: string;
  /**
   * 关联服务分类id对象
   */
  "@categoryId"?: {
    v1?: {
      record?: IModalMyfwflFlt_RstG;
    };
  };
}

interface IModalMyfwflFlt_RstG {
  /**
   * 分类icon
   *
   */
  icon: string;
  /**
   * 分类名称
   *
   */
  name: string;
  /**
   * 首页展示
   *
   */
  inHome: boolean;
}

interface IModalMydpxxQ0NOqkR {
  /**
   * 地区选择
   *
   */
  area?: string;
  /**
   * 开始工作日
   *
   */
  startKey?: string;
  /**
   * 详细地址
   *
   */
  address?: string;
  /**
   * 客服电话
   *
   */
  telphones: string;
  /**
   * 开始时间
   *
   */
  start?: number;
  /**
   * 轮播图
   *
   */
  carousels: string[];
  /**
   * 结束工作日
   *
   */
  endKey?: string;
  /**
   * 店铺名称
   *
   */
  name: string;
  /**
   * 店铺logo
   *
   */
  logo: string;
  /**
   * 结束时间
   *
   */
  end?: number;
  /**
   * 地图位置
   *
   */
  map?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
}

interface IModalTapis_GwQQ {}
interface IModalQygwzxdtKNHOC {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 图片
   *
   */
  picture?: string;
  /**
   * 内容
   *
   */
  content?: string;
}

interface IModalQygwjjfa_4QmWp {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalBusiness_ZvEe {
  /**
   * 首页展示图片
   *
   */
  index_show?: string[];
  /**
   * 功能展示
   * undefined
   */
  function_show?: {
    /**
     * 图标
     * undefined
     */
    icon?: string;
    /**
     * 文字说明
     * undefined
     */
    text?: string;
  }[];
  /**
   * 公司地址
   *
   */
  address?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
  /**
   * 联系电话
   * undefined
   */
  phone?: string;
  /**
   * 品牌简介
   *
   */
  intro?: string;
  /**
   * 电子邮箱
   *
   */
  email?: string;
  /**
   * 合作伙伴
   * undefined
   */
  cooperation?: {
    /**
     * 图片
     * undefined
     */
    pic?: string;
  }[];
}

interface IModalBusiness_ZvEeSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalAppScenarCPdS {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 副标题
   *
   */
  sub_title?: string;
  /**
   * 背景图
   *
   */
  backgroud_pic?: string;
  /**
   * 说明
   *
   */
  description?: string;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 内容
   *
   */
  content?: string;
  /**
   * 详情图片
   *
   */
  detail_pic?: string;
}

interface IModalMykhyyDy5HNQa {
  /**
   * 预约日期
   *
   */
  date: number;
  /**
   * 预约人id
   *
   */
  wxOpenId: string;
  /**
   * 预约电话
   *
   */
  telephone: string;
  /**
   * 服务id
   *
   */
  serviceId: string;
  /**
   * 状态
   *
   */
  status: string;
  /**
   * 关联服务id对象
   */
  "@serviceId"?: {
    v1?: {
      record?: IModalMyfwY3A80YxbU;
    };
  };
}

interface IModalMyfwY3A80YxbU {
  /**
   * 服务图片
   *
   */
  image: string;
  /**
   * 售价
   *
   */
  salePrice: number;
  /**
   * 服务时长(小时)
   * 请输入服务时长，服务时长必须是整数
   */
  duration: number;
  /**
   * 服务名称
   *
   */
  name: string;
  /**
   * 服务详情
   *
   */
  detail?: string;
  /**
   * 服务分类id
   *
   */
  categoryId: string;
  /**
   * 是否推荐
   * 推荐后显示在首页只显示最新添加的四个服务
   */
  isHot?: boolean;
  /**
   * 上架状态
   *
   */
  status?: string;
  /**
   * 关联服务分类id对象
   */
  "@categoryId"?: {
    v1?: {
      record?: IModalMyfwflFltUINh;
    };
  };
}

interface IModalMydpxxQ0N_Ejrj {
  /**
   * 地区选择
   *
   */
  area?: string;
  /**
   * 开始工作日
   *
   */
  startKey?: string;
  /**
   * 详细地址
   *
   */
  address?: string;
  /**
   * 客服电话
   *
   */
  telphones: string;
  /**
   * 开始时间
   *
   */
  start?: number;
  /**
   * 轮播图
   *
   */
  carousels: string[];
  /**
   * 结束工作日
   *
   */
  endKey?: string;
  /**
   * 店铺名称
   *
   */
  name: string;
  /**
   * 店铺logo
   *
   */
  logo: string;
  /**
   * 结束时间
   *
   */
  end?: number;
  /**
   * 地图位置
   *
   */
  map?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
}

interface IModalMyfwflFltUINh {
  /**
   * 分类icon
   *
   */
  icon: string;
  /**
   * 分类名称
   *
   */
  name: string;
  /**
   * 首页展示
   *
   */
  inHome: boolean;
}

interface IModalTapisLUTA {}
interface IModalAppScenarZWqj {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 副标题
   *
   */
  sub_title?: string;
  /**
   * 背景图
   *
   */
  backgroud_pic?: string;
  /**
   * 说明
   *
   */
  description?: string;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 内容
   *
   */
  content?: string;
  /**
   * 详情图片
   *
   */
  detail_pic?: string;
}

interface IModalQygwjjfa_4_HaVH {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalBusinessRxUo {
  /**
   * 首页展示图片
   *
   */
  index_show?: string[];
  /**
   * 功能展示
   * undefined
   */
  function_show?: {
    /**
     * 图标
     * undefined
     */
    icon?: string;
    /**
     * 文字说明
     * undefined
     */
    text?: string;
  }[];
  /**
   * 公司地址
   *
   */
  address?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
  /**
   * 联系电话
   * undefined
   */
  phone?: string;
  /**
   * 品牌简介
   *
   */
  intro?: string;
  /**
   * 电子邮箱
   *
   */
  email?: string;
  /**
   * 合作伙伴
   * undefined
   */
  cooperation?: {
    /**
     * 图片
     * undefined
     */
    pic?: string;
  }[];
}

interface IModalBusinessRxUoSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalQygwzxdtKJqPz {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 图片
   *
   */
  picture?: string;
  /**
   * 内容
   *
   */
  content?: string;
}

interface IModalTapis_YfSx {}
interface IModalQygwzxdtK_PfZZ {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 图片
   *
   */
  picture?: string;
  /**
   * 内容
   *
   */
  content?: string;
}

interface IModalQygwjjfa_4_Smls {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalBusiness_WOkw {
  /**
   * 首页展示图片
   *
   */
  index_show?: string[];
  /**
   * 功能展示
   * undefined
   */
  function_show?: {
    /**
     * 图标
     * undefined
     */
    icon?: string;
    /**
     * 文字说明
     * undefined
     */
    text?: string;
  }[];
  /**
   * 公司地址
   *
   */
  address?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
  /**
   * 联系电话
   * undefined
   */
  phone?: string;
  /**
   * 品牌简介
   *
   */
  intro?: string;
  /**
   * 电子邮箱
   *
   */
  email?: string;
  /**
   * 合作伙伴
   * undefined
   */
  cooperation?: {
    /**
     * 图片
     * undefined
     */
    pic?: string;
  }[];
}

interface IModalAppScenar_ZSCB {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 副标题
   *
   */
  sub_title?: string;
  /**
   * 背景图
   *
   */
  backgroud_pic?: string;
  /**
   * 说明
   *
   */
  description?: string;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 内容
   *
   */
  content?: string;
  /**
   * 详情图片
   *
   */
  detail_pic?: string;
}

interface IModalBusiness_WOkwSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalTapisXVvU {}
interface IModalBusiness_QgpbSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalQygwjjfa_4_Vvtz {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalAppScenarLFui {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 副标题
   *
   */
  sub_title?: string;
  /**
   * 背景图
   *
   */
  backgroud_pic?: string;
  /**
   * 说明
   *
   */
  description?: string;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 内容
   *
   */
  content?: string;
  /**
   * 详情图片
   *
   */
  detail_pic?: string;
}

interface IModalQygwzxdtKHYJq {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 图片
   *
   */
  picture?: string;
  /**
   * 内容
   *
   */
  content?: string;
}

interface IModalBusiness_Qgpb {
  /**
   * 首页展示图片
   *
   */
  index_show?: string[];
  /**
   * 功能展示
   * undefined
   */
  function_show?: {
    /**
     * 图标
     * undefined
     */
    icon?: string;
    /**
     * 文字说明
     * undefined
     */
    text?: string;
  }[];
  /**
   * 公司地址
   *
   */
  address?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
  /**
   * 联系电话
   * undefined
   */
  phone?: string;
  /**
   * 品牌简介
   *
   */
  intro?: string;
  /**
   * 电子邮箱
   *
   */
  email?: string;
  /**
   * 合作伙伴
   * undefined
   */
  cooperation?: {
    /**
     * 图片
     * undefined
     */
    pic?: string;
  }[];
}

interface IModalBusinessWPTWSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalMykhyyDy5MJss {
  /**
   * 预约日期
   *
   */
  date: number;
  /**
   * 预约人id
   *
   */
  wxOpenId: string;
  /**
   * 预约电话
   *
   */
  telephone: string;
  /**
   * 服务id
   *
   */
  serviceId: string;
  /**
   * 状态
   *
   */
  status: string;
  /**
   * 关联服务id对象
   */
  "@serviceId"?: {
    v1?: {
      record?: IModalMyfwY3A80YTKv;
    };
  };
}

interface IModalMyfwY3A80YTKv {
  /**
   * 服务图片
   *
   */
  image: string;
  /**
   * 售价
   *
   */
  salePrice: number;
  /**
   * 服务时长(小时)
   * 请输入服务时长，服务时长必须是整数
   */
  duration: number;
  /**
   * 服务名称
   *
   */
  name: string;
  /**
   * 服务详情
   *
   */
  detail?: string;
  /**
   * 服务分类id
   *
   */
  categoryId: string;
  /**
   * 是否推荐
   * 推荐后显示在首页只显示最新添加的四个服务
   */
  isHot?: boolean;
  /**
   * 上架状态
   *
   */
  status?: string;
  /**
   * 关联服务分类id对象
   */
  "@categoryId"?: {
    v1?: {
      record?: IModalMyfwflFlt_OMkH;
    };
  };
}

interface IModalMyfwflFlt_OMkH {
  /**
   * 分类icon
   *
   */
  icon: string;
  /**
   * 分类名称
   *
   */
  name: string;
  /**
   * 首页展示
   *
   */
  inHome: boolean;
}

interface IModalMydpxxQ0N_HwFd {
  /**
   * 地区选择
   *
   */
  area?: string;
  /**
   * 开始工作日
   *
   */
  startKey?: string;
  /**
   * 详细地址
   *
   */
  address?: string;
  /**
   * 客服电话
   *
   */
  telphones: string;
  /**
   * 开始时间
   *
   */
  start?: number;
  /**
   * 轮播图
   *
   */
  carousels: string[];
  /**
   * 结束工作日
   *
   */
  endKey?: string;
  /**
   * 店铺名称
   *
   */
  name: string;
  /**
   * 店铺logo
   *
   */
  logo: string;
  /**
   * 结束时间
   *
   */
  end?: number;
  /**
   * 地图位置
   *
   */
  map?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
}

interface IModalCarouselIMIvj {
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 图片
   *
   */
  picture: string;
  /**
   * 副标题
   *
   */
  subTitle?: string;
  /**
   * 是否展示
   *
   */
  status: boolean;
  /**
   * 顺序
   *
   */
  order: number;
}

interface IModalTapisDSME {}
interface IModalWinningRecChAw {
  /**
   * 地区
   *
   */
  area?: string;
  /**
   * 详细地址
   * 详细地址
   */
  address?: string;
  /**
   * 奖品
   *
   */
  prizeItem?: string;
  /**
   * 微信openId
   * 用户微信openId
   */
  userOpenId?: string;
  /**
   * 收货人姓名
   *
   */
  nickName?: string;
  /**
   * 用户Id
   * 用户Id
   */
  userId?: string;
  /**
   * 奖品Id
   * 奖品Id
   */
  prizeId?: string;
  /**
   * 已发货
   * 已发货
   */
  shipped?: boolean;
  /**
   * 收货人手机
   *
   */
  phone?: string;
  /**
   * 抽奖用户
   *
   */
  user?: string;
  /**
   * 关联奖品对象
   */
  "@prizeItem"?: {
    v1?: {
      record?: IModalPrizeC0U0OJOC;
    };
  };
  /**
   * 关联抽奖用户对象
   */
  "@user"?: {
    v1?: {
      record?: IModalUser_80SdyEjFA;
    };
  };
}

interface IModalLotteryO4_UBJt {
  /**
   * 单日抽奖次数上限
   * 单日抽奖次数上限
   */
  totalDrawsLimit?: number;
  /**
   * 抽奖完成音乐
   * 抽奖完成音乐
   */
  finishMusic?: string;
  /**
   * 分享图片
   * 分享图片
   */
  shareImage?: string;
  /**
   * 活动规则
   * 活动规则
   */
  rule?: string;
  /**
   * 活动主题
   * 活动主题
   */
  title: string;
  /**
   * 背景音乐
   * 背景音乐
   */
  music?: string;
  /**
   * 分享标题
   * 分享标题
   */
  shareTitle?: string;
  /**
   * 背景图片
   * 背景图片
   */
  background?: string;
  /**
   * 活动开始时间
   * 活动开始时间
   */
  startTime?: number;
  /**
   * 单用户单日抽奖次数上限
   * 单用户单日抽奖次数上限
   */
  drawsPerUserLimit?: number;
  /**
   * 活动结束时间
   * 活动结束时间
   */
  endTime?: number;
  /**
   * 分享描述
   * 分享描述
   */
  shareDesc?: string;
  /**
   * 抽奖中音乐
   * 抽奖中音乐
   */
  rollingMusic?: string;
}

interface IModalUser_80SdyEjFA {
  /**
   * 地区
   *
   */
  area?: string;
  /**
   * 自定义用户ID
   *
   */
  customUserId?: string;
  /**
   * 微信openId
   * 微信 openId
   */
  openId?: string;
  /**
   * 用户昵称
   * 用户昵称
   */
  nickName?: string;
  /**
   * 用户头像
   * 用户头像
   */
  avatar?: string;
  /**
   * 详细地址
   * 详细地址, e.g.,和平里街道400号
   */
  addressDetail?: string;
  /**
   * 手机号码
   * 手机号码
   */
  phone?: string;
  /**
   * 是否抽过奖
   * 用户是否抽过奖
   */
  hasDrawn?: boolean;
  /**
   * 用户名
   * 用户名
   */
  name?: string;
}

interface IModalPrizeC0U0OJOC {
  /**
   * 奖品图片
   * 奖品图片
   */
  image?: string;
  /**
   * 奖品描述
   * 奖品描述
   */
  description?: string;
  /**
   * 奖品剩余数量
   * 奖品剩余数量
   */
  stockQuantity: number;
  /**
   * 中奖概率
   * 中奖概率
   */
  winningProbability: number;
  /**
   * 数据记录版本
   * 数据记录版本, 用于实现乐观锁
   */
  version?: number;
  /**
   * 是否安慰奖
   * 是否为安慰奖
   */
  isPlaceholder: boolean;
  /**
   * 奖品名称
   * 奖品名称
   */
  name: string;
  /**
   * 奖品在列表中的位置
   * 奖品在列表中的位置
   */
  position?: number;
  /**
   * 奖品总数量
   * 奖品总数量
   */
  initQuantity: number;
}

interface IModalDrawResult_MgcK {
  /**
   * userOpenId
   * 用户微信openId
   */
  userOpenId?: string;
  /**
   * userName
   * 用户名
   */
  userName?: string;
  /**
   * userId
   * 用户Id
   */
  userId?: string;
  /**
   * prizeId
   * 奖品Id
   */
  prizeId?: string;
}

interface IModalStatisticsGLzU {
  /**
   * count
   * 数量
   */
  count?: number;
  /**
   * totalCount
   * 截止当前总数
   */
  totalCount?: number;
  /**
   * deviceBrandGroup
   * 按照设备品牌聚合, e.g., {'iphone': 101}
   */
  deviceBrandGroup?: string;
  /**
   * regionGroup
   * 按照地域聚合数据, e.g., {'zhejiang': 500}
   */
  regionGroup?: string;
  /**
   * deviceTypeGroup
   * 按照访问设备聚合数据, e.g., {'pc': 100}
   */
  deviceTypeGroup?: string;
  /**
   * category
   * 统计数据维度 e.g., pv, uv, shareCount
   */
  category: string;
}

interface IModalEventP4R7DRBN {
  /**
   * deviceType
   * 访问设备类型, e.g., pc, phone
   */
  deviceType?: string;
  /**
   * country
   * 国家
   */
  country?: string;
  /**
   * deviceOS
   * 访问设备操作系统
   */
  deviceOS?: string;
  /**
   * userId
   * 用户标识
   */
  userId?: string;
  /**
   * result
   * 事件结果
   */
  result?: string;
  /**
   * sourceIp
   * 请求来源IP
   */
  sourceIp?: string;
  /**
   * name
   * 事件, e.g., view, share, login
   */
  name?: string;
  /**
   * deviceModel
   * 访问设备型号
   */
  deviceModel?: string;
  /**
   * region
   * 地区
   */
  region?: string;
  /**
   * deviceBrand
   * 访问设备品牌
   */
  deviceBrand?: string;
}

interface IModalWxpayOrderApis_4Tp3344_ZerU {}
interface IModalWxpayScfExampleNbpwf1FIGYN {}
interface IModalQygwzxdtKb7C2Uq {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 图片
   *
   */
  picture?: string;
  /**
   * 内容
   *
   */
  content?: string;
}

interface IModalAppScenario_6Ks78Hy {
  /**
   * 日期
   *
   */
  date?: number;
  /**
   * 副标题
   *
   */
  sub_title?: string;
  /**
   * 背景图
   *
   */
  backgroud_pic?: string;
  /**
   * 说明
   *
   */
  description?: string;
  /**
   * 标题
   *
   */
  title?: string;
  /**
   * 内容
   *
   */
  content?: string;
  /**
   * 详情图片
   *
   */
  detail_pic?: string;
}

interface IModalBusinessSolution {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalBusiness {
  /**
   * 首页展示图片
   *
   */
  index_show?: string[];
  /**
   * 功能展示
   * undefined
   */
  function_show?: {
    /**
     * 图标
     * undefined
     */
    icon?: string;
    /**
     * 文字说明
     * undefined
     */
    text?: string;
  }[];
  /**
   * 公司地址
   *
   */
  address?: {
    /**
     * 地点
     * undefined
     */
    address: string;
    /**
     * 经纬度
     * undefined
     */
    geopoint: {
      coordinates: number[];
      type: string;
    };
  };
  /**
   * 联系电话
   * undefined
   */
  phone?: string;
  /**
   * 品牌简介
   *
   */
  intro?: string;
  /**
   * 电子邮箱
   *
   */
  email?: string;
  /**
   * 合作伙伴
   * undefined
   */
  cooperation?: {
    /**
     * 图片
     * undefined
     */
    pic?: string;
  }[];
}

interface IModalQygwjjfa_4U3Joh6 {
  /**
   * 左上角图标
   * undefined
   */
  icon?: string;
  /**
   * 详情段落
   * undefined
   */
  section?: {
    /**
     * 段落标题
     * undefined
     */
    subtitle?: string;
    /**
     * 段落内容
     * undefined
     */
    body?: string;
    /**
     * 段落列表
     * undefined
     */
    list?: string[];
  }[];
  /**
   * 背景图片
   *
   */
  pic?: string;
  /**
   * 方案标题
   * undefined
   */
  title?: string;
  /**
   * 方案内容
   * undefined
   */
  content?: string;
  /**
   * 详情图片
   * undefined
   */
  subPic?: string;
  /**
   * 描述
   *
   */
  decription?: string;
  /**
   * 详情头部
   * undefined
   */
  header?: string;
  /**
   * 左上角文本
   * undefined
   */
  text?: string;
}

interface IModalAiBotMpJftg8Ta {}
interface IModalAiBotSubscriptionAcount_16Q9L5G {}
interface IModalAiBotServiceAccountU853Wfk {}
interface IModalSysUser {}

interface IModalSysDepartment {}


interface IModels {

    /**
    * 数据模型：ChatDB
    */ 
    chat_bi_0fds5by_app_xdBjq3Ai: DataModelMethods<IModalChatBi_0Fds5ByAppXdBjq3Ai>;

    /**
    * 数据模型：ChatDB-数据看板分组
    */ 
    chat_bi_dash_group_4pmlo60: DataModelMethods<IModalChatBiDashGroup_4Pmlo60>;

    /**
    * 数据模型：ChatDB-用户数据源管理
    */ 
    chat_bi_dbs_3dcsfvf: DataModelMethods<IModalChatBiDbs_3Dcsfvf>;

    /**
    * 数据模型：ChatDB-用户图表数据管理
    */ 
    chat_bi_session_owubz62: DataModelMethods<IModalChatBiSessionOwubz62>;

    /**
    * 数据模型：智能路书-路书
    */ 
    itinerary: DataModelMethods<IModalItinerary>;

    /**
    * 数据模型：AI知识库
    */ 
    ai_ck: DataModelMethods<IModalAiCk>;

    /**
    * 数据模型：ai_bot-微信客服
    */ 
    aibot_wxkf_udvtydn: DataModelMethods<IModalAibotWxkfUdvtydn>;

    /**
    * 数据模型：九宫格抽奖
    */ 
    squaredLottery_1atq341_app_FaExVNNC: DataModelMethods<IModalSquaredLottery_1Atq341AppFaExVNNC>;

    /**
    * 数据模型：九宫格抽奖
    */ 
    squaredLottery_1atq341_app_TQq94v0x: DataModelMethods<IModalSquaredLottery_1Atq341AppTQq94V0X>;

    /**
    * 数据模型：winningRecord_sq
    */ 
    winningRecor_1pbmktx: DataModelMethods<IModalWinningRecor_1Pbmktx>;

    /**
    * 数据模型：event_sq
    */ 
    event_as1snvh: DataModelMethods<IModalEventAs1Snvh>;

    /**
    * 数据模型：drawResult_sq
    */ 
    drawResult_pwmxaco: DataModelMethods<IModalDrawResultPwmxaco>;

    /**
    * 数据模型：statistics_sq
    */ 
    statistics_xt224nt: DataModelMethods<IModalStatisticsXt224Nt>;

    /**
    * 数据模型：prize_sq
    */ 
    prize_pgt1uru: DataModelMethods<IModalPrizePgt1Uru>;

    /**
    * 数据模型：user_sq
    */ 
    user_agsm4q0: DataModelMethods<IModalUserAgsm4Q0>;

    /**
    * 数据模型：lottery_sq
    */ 
    lottery_7tglt0z: DataModelMethods<IModalLottery_7Tglt0Z>;

    /**
    * 数据模型：大转盘抽奖
    */ 
    lottery_76x75kl_app_Z92UXx0R: DataModelMethods<IModalLottery_76X75KlAppZ92UXx0R>;

    /**
    * 数据模型：winningRecord_ro
    */ 
    winningRecor_sxsgw7j: DataModelMethods<IModalWinningRecorSxsgw7J>;

    /**
    * 数据模型：drawResult_ro
    */ 
    drawResult_8zme4rh: DataModelMethods<IModalDrawResult_8Zme4Rh>;

    /**
    * 数据模型：event_ro
    */ 
    event_p4r7k21: DataModelMethods<IModalEventP4R7K21>;

    /**
    * 数据模型：statistics_ro
    */ 
    statistics_obkjdui: DataModelMethods<IModalStatisticsObkjdui>;

    /**
    * 数据模型：prize_ro
    */ 
    prize_c0u0rgb: DataModelMethods<IModalPrizeC0U0Rgb>;

    /**
    * 数据模型：user_ro
    */ 
    user_80sdy6f: DataModelMethods<IModalUser_80Sdy6F>;

    /**
    * 数据模型：lottery_ro
    */ 
    lottery_o4ywwg7: DataModelMethods<IModalLotteryO4Ywwg7>;

    /**
    * 数据模型：ai_bot-公众号开放服务-服务号
    */ 
    ai_bot_service_account_u853wfk_Apff: DataModelMethods<IModalAiBotServiceAccountU853Wfk_Apff>;

    /**
    * 数据模型：ai_bot-微信客服
    */ 
    aibot_wxkf_udvtydn_iiis: DataModelMethods<IModalAibotWxkfUdvtydnIiis>;

    /**
    * 数据模型：ai_bot-公众号开放服务
    */ 
    ai_bot_subscription_acount_16q9l5g_tCxf: DataModelMethods<IModalAiBotSubscriptionAcount_16Q9L5GTCxf>;

    /**
    * 数据模型：ai_bot-小程序开放能力
    */ 
    ai_bot_mp_jftg8ta_Pxou: DataModelMethods<IModalAiBotMpJftg8Ta_Pxou>;

    /**
    * 数据模型：对话
    */ 
    ai_bot_chat_history_yhksihv: DataModelMethods<IModalAiBotChatHistoryYhksihv>;

    /**
    * 数据模型：反馈记录
    */ 
    ai_bot_feedback_5hobd2j: DataModelMethods<IModalAiBotFeedback_5Hobd2J>;

    /**
    * 数据模型：AI 智能体
    */ 
    ai_bot_agent_4vppq8k: DataModelMethods<IModalAiBotAgent_4Vppq8K>;

    /**
    * 数据模型：微信支付模版订单数据微信支付功能展示模版_ImwW
    */ 
    wxzfmbddsj_sHMt: DataModelMethods<IModalWxzfmbddsjSHMt>;

    /**
    * 数据模型：微信支付商品信息微信支付功能展示模版_ImwW
    */ 
    wxzfspxx_k_bCBw: DataModelMethods<IModalWxzfspxxKBCBw>;

    /**
    * 数据模型：腾讯地图测试企业官网_oPGo
    */ 
    tapis_PnLO: DataModelMethods<IModalTapis_PnLO>;

    /**
    * 数据模型：企业官网解决方案企业官网_oPGo
    */ 
    qygwjjfa_4_aqON: DataModelMethods<IModalQygwjjfa_4AqON>;

    /**
    * 数据模型：企业官网-企业信息企业官网_oPGo
    */ 
    business_hYHv: DataModelMethods<IModalBusinessHYHv>;

    /**
    * 数据模型：企业官网-应用场景企业官网_oPGo
    */ 
    app_scenar_droU: DataModelMethods<IModalAppScenarDroU>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_hYHv_solution: DataModelMethods<IModalBusinessHYHvSolution>;

    /**
    * 数据模型：企业官网-最新动态企业官网_oPGo
    */ 
    qygwzxdt_k_sSfo: DataModelMethods<IModalQygwzxdtKSSfo>;

    /**
    * 数据模型：微信支付模版订单数据微信支付功能展示模版_XZtz
    */ 
    wxzfmbddsj_dtjU: DataModelMethods<IModalWxzfmbddsjDtjU>;

    /**
    * 数据模型：微信支付商品信息微信支付功能展示模版_XZtz
    */ 
    wxzfspxx_k_JLUr: DataModelMethods<IModalWxzfspxxK_JLUr>;

    /**
    * 数据模型：美业-客户预约美业小程序_YtdW
    */ 
    mykhyy_dy5_hgZg: DataModelMethods<IModalMykhyyDy5HgZg>;

    /**
    * 数据模型：美业-服务分类美业小程序_YtdW
    */ 
    myfwfl_flt_GyuS: DataModelMethods<IModalMyfwflFlt_GyuS>;

    /**
    * 数据模型：美业-店铺信息美业小程序_YtdW
    */ 
    mydpxx_q0n_FPkA: DataModelMethods<IModalMydpxxQ0N_FPkA>;

    /**
    * 数据模型：美业-服务美业小程序_YtdW
    */ 
    myfw_y3a80_qWvK: DataModelMethods<IModalMyfwY3A80QWvK>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_PnGb_solution: DataModelMethods<IModalBusiness_PnGbSolution>;

    /**
    * 数据模型：腾讯地图测试企业官网_wTii
    */ 
    tapis_jQRB: DataModelMethods<IModalTapisJQRB>;

    /**
    * 数据模型：企业官网-最新动态企业官网_wTii
    */ 
    qygwzxdt_k_AxSG: DataModelMethods<IModalQygwzxdtK_AxSG>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_KvDr_solution: DataModelMethods<IModalBusiness_KvDrSolution>;

    /**
    * 数据模型：企业官网-应用场景企业官网_wTii
    */ 
    app_scenar_sbWR: DataModelMethods<IModalAppScenarSbWR>;

    /**
    * 数据模型：企业官网-企业信息企业官网_wTii
    */ 
    business_KvDr: DataModelMethods<IModalBusiness_KvDr>;

    /**
    * 数据模型：企业官网解决方案企业官网_wTii
    */ 
    qygwjjfa_4_vBbG: DataModelMethods<IModalQygwjjfa_4VBbG>;

    /**
    * 数据模型：美业-客户预约美业小程序_NtLk
    */ 
    mykhyy_dy5_CSOz: DataModelMethods<IModalMykhyyDy5_CSOz>;

    /**
    * 数据模型：美业-服务美业小程序_NtLk
    */ 
    myfw_y3a80_sYkq: DataModelMethods<IModalMyfwY3A80SYkq>;

    /**
    * 数据模型：美业-店铺信息美业小程序_NtLk
    */ 
    mydpxx_q0n_cNJq: DataModelMethods<IModalMydpxxQ0NCNJq>;

    /**
    * 数据模型：美业-服务分类美业小程序_NtLk
    */ 
    myfwfl_flt_tNxJ: DataModelMethods<IModalMyfwflFltTNxJ>;

    /**
    * 数据模型：抽奖模板活动抽奖_aJag
    */ 
    tapis_CVWN: DataModelMethods<IModalTapis_CVWN>;

    /**
    * 数据模型：活动设置活动抽奖_aJag
    */ 
    hdsz_sr1ww_svRs: DataModelMethods<IModalHdszSr1WwSvRs>;

    /**
    * 数据模型：抽奖结果活动抽奖_aJag
    */ 
    cjjg_rjkci_aQEG: DataModelMethods<IModalCjjgRjkciAQEG>;

    /**
    * 数据模型：奖品列表活动抽奖_aJag
    */ 
    jplb_a7nux_TBeg: DataModelMethods<IModalJplbA7Nux_TBeg>;

    /**
    * 数据模型：美业-客户预约美业小程序_hOgV
    */ 
    mykhyy_dy5_zeBn: DataModelMethods<IModalMykhyyDy5ZeBn>;

    /**
    * 数据模型：美业-服务美业小程序_hOgV
    */ 
    myfw_y3a80_aBHO: DataModelMethods<IModalMyfwY3A80ABHO>;

    /**
    * 数据模型：美业-店铺信息美业小程序_hOgV
    */ 
    mydpxx_q0n_gOoi: DataModelMethods<IModalMydpxxQ0NGOoi>;

    /**
    * 数据模型：美业-服务分类美业小程序_hOgV
    */ 
    myfwfl_flt_hwwQ: DataModelMethods<IModalMyfwflFltHwwQ>;

    /**
    * 数据模型：抽奖模板活动抽奖_hXRF
    */ 
    tapis_ABCr: DataModelMethods<IModalTapis_ABCr>;

    /**
    * 数据模型：抽奖结果活动抽奖_hXRF
    */ 
    cjjg_rjkci_rjwj: DataModelMethods<IModalCjjgRjkciRjwj>;

    /**
    * 数据模型：奖品列表活动抽奖_hXRF
    */ 
    jplb_a7nux_zDoC: DataModelMethods<IModalJplbA7NuxZDoC>;

    /**
    * 数据模型：活动设置活动抽奖_hXRF
    */ 
    hdsz_sr1ww_mDQy: DataModelMethods<IModalHdszSr1WwMDQy>;

    /**
    * 数据模型：美业-客户预约美业小程序_lGji
    */ 
    mykhyy_dy5_YLuT: DataModelMethods<IModalMykhyyDy5_YLuT>;

    /**
    * 数据模型：美业-服务美业小程序_lGji
    */ 
    myfw_y3a80_okbd: DataModelMethods<IModalMyfwY3A80Okbd>;

    /**
    * 数据模型：美业-服务分类美业小程序_lGji
    */ 
    myfwfl_flt_RstG: DataModelMethods<IModalMyfwflFlt_RstG>;

    /**
    * 数据模型：美业-店铺信息美业小程序_lGji
    */ 
    mydpxx_q0n_oqkR: DataModelMethods<IModalMydpxxQ0NOqkR>;

    /**
    * 数据模型：腾讯地图测试企业官网_LsOY
    */ 
    tapis_GwQQ: DataModelMethods<IModalTapis_GwQQ>;

    /**
    * 数据模型：企业官网-最新动态企业官网_LsOY
    */ 
    qygwzxdt_k_nHOC: DataModelMethods<IModalQygwzxdtKNHOC>;

    /**
    * 数据模型：企业官网解决方案企业官网_LsOY
    */ 
    qygwjjfa_4_qmWp: DataModelMethods<IModalQygwjjfa_4QmWp>;

    /**
    * 数据模型：企业官网-企业信息企业官网_LsOY
    */ 
    business_ZvEe: DataModelMethods<IModalBusiness_ZvEe>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_ZvEe_solution: DataModelMethods<IModalBusiness_ZvEeSolution>;

    /**
    * 数据模型：企业官网-应用场景企业官网_LsOY
    */ 
    app_scenar_cPdS: DataModelMethods<IModalAppScenarCPdS>;

    /**
    * 数据模型：美业-客户预约美业小程序_skMC
    */ 
    mykhyy_dy5_hNQa: DataModelMethods<IModalMykhyyDy5HNQa>;

    /**
    * 数据模型：美业-服务美业小程序_skMC
    */ 
    myfw_y3a80_yxbU: DataModelMethods<IModalMyfwY3A80YxbU>;

    /**
    * 数据模型：美业-店铺信息美业小程序_skMC
    */ 
    mydpxx_q0n_Ejrj: DataModelMethods<IModalMydpxxQ0N_Ejrj>;

    /**
    * 数据模型：美业-服务分类美业小程序_skMC
    */ 
    myfwfl_flt_uINh: DataModelMethods<IModalMyfwflFltUINh>;

    /**
    * 数据模型：腾讯地图测试企业官网_ypaZ
    */ 
    tapis_lUTA: DataModelMethods<IModalTapisLUTA>;

    /**
    * 数据模型：企业官网-应用场景企业官网_ypaZ
    */ 
    app_scenar_zWqj: DataModelMethods<IModalAppScenarZWqj>;

    /**
    * 数据模型：企业官网解决方案企业官网_ypaZ
    */ 
    qygwjjfa_4_HaVH: DataModelMethods<IModalQygwjjfa_4_HaVH>;

    /**
    * 数据模型：企业官网-企业信息企业官网_ypaZ
    */ 
    business_rxUo: DataModelMethods<IModalBusinessRxUo>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_rxUo_solution: DataModelMethods<IModalBusinessRxUoSolution>;

    /**
    * 数据模型：企业官网-最新动态企业官网_ypaZ
    */ 
    qygwzxdt_k_jqPz: DataModelMethods<IModalQygwzxdtKJqPz>;

    /**
    * 数据模型：腾讯地图测试企业官网_pvqO
    */ 
    tapis_YfSx: DataModelMethods<IModalTapis_YfSx>;

    /**
    * 数据模型：企业官网-最新动态企业官网_pvqO
    */ 
    qygwzxdt_k_PfZZ: DataModelMethods<IModalQygwzxdtK_PfZZ>;

    /**
    * 数据模型：企业官网解决方案企业官网_pvqO
    */ 
    qygwjjfa_4_Smls: DataModelMethods<IModalQygwjjfa_4_Smls>;

    /**
    * 数据模型：企业官网-企业信息企业官网_pvqO
    */ 
    business_WOkw: DataModelMethods<IModalBusiness_WOkw>;

    /**
    * 数据模型：企业官网-应用场景企业官网_pvqO
    */ 
    app_scenar_ZSCB: DataModelMethods<IModalAppScenar_ZSCB>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_WOkw_solution: DataModelMethods<IModalBusiness_WOkwSolution>;

    /**
    * 数据模型：腾讯地图测试企业官网_RlRv
    */ 
    tapis_xVvU: DataModelMethods<IModalTapisXVvU>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_Qgpb_solution: DataModelMethods<IModalBusiness_QgpbSolution>;

    /**
    * 数据模型：企业官网解决方案企业官网_RlRv
    */ 
    qygwjjfa_4_Vvtz: DataModelMethods<IModalQygwjjfa_4_Vvtz>;

    /**
    * 数据模型：企业官网-应用场景企业官网_RlRv
    */ 
    app_scenar_lFui: DataModelMethods<IModalAppScenarLFui>;

    /**
    * 数据模型：企业官网-最新动态企业官网_RlRv
    */ 
    qygwzxdt_k_hYJq: DataModelMethods<IModalQygwzxdtKHYJq>;

    /**
    * 数据模型：企业官网-企业信息企业官网_RlRv
    */ 
    business_Qgpb: DataModelMethods<IModalBusiness_Qgpb>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_wPTW_solution: DataModelMethods<IModalBusinessWPTWSolution>;

    /**
    * 数据模型：美业-客户预约美业小程序_twBo
    */ 
    mykhyy_dy5_mJss: DataModelMethods<IModalMykhyyDy5MJss>;

    /**
    * 数据模型：美业-服务美业小程序_twBo
    */ 
    myfw_y3a80_yTKv: DataModelMethods<IModalMyfwY3A80YTKv>;

    /**
    * 数据模型：美业-服务分类美业小程序_twBo
    */ 
    myfwfl_flt_OMkH: DataModelMethods<IModalMyfwflFlt_OMkH>;

    /**
    * 数据模型：美业-店铺信息美业小程序_twBo
    */ 
    mydpxx_q0n_HwFd: DataModelMethods<IModalMydpxxQ0N_HwFd>;

    /**
    * 数据模型：轮播图轮播图管理_boOS
    */ 
    carousel_i_mIvj: DataModelMethods<IModalCarouselIMIvj>;

    /**
    * 数据模型：大转盘抽奖幸运大转盘_cUqA
    */ 
    tapis_dSME: DataModelMethods<IModalTapisDSME>;

    /**
    * 数据模型：winningRecord_ro幸运大转盘_cUqA
    */ 
    winningRec_chAw: DataModelMethods<IModalWinningRecChAw>;

    /**
    * 数据模型：lottery_ro幸运大转盘_cUqA
    */ 
    lottery_o4_UBJt: DataModelMethods<IModalLotteryO4_UBJt>;

    /**
    * 数据模型：user_ro幸运大转盘_cUqA
    */ 
    user_80sdy_ejFA: DataModelMethods<IModalUser_80SdyEjFA>;

    /**
    * 数据模型：prize_ro幸运大转盘_cUqA
    */ 
    prize_c0u0_oJOC: DataModelMethods<IModalPrizeC0U0OJOC>;

    /**
    * 数据模型：drawResult_ro幸运大转盘_cUqA
    */ 
    drawResult_MgcK: DataModelMethods<IModalDrawResult_MgcK>;

    /**
    * 数据模型：statistics_ro幸运大转盘_cUqA
    */ 
    statistics_gLzU: DataModelMethods<IModalStatisticsGLzU>;

    /**
    * 数据模型：event_ro幸运大转盘_cUqA
    */ 
    event_p4r7_dRBN: DataModelMethods<IModalEventP4R7DRBN>;

    /**
    * 数据模型：wxpay-微信支付APIs
    */ 
    wxpay_order_apis_4tp3344_ZerU: DataModelMethods<IModalWxpayOrderApis_4Tp3344_ZerU>;

    /**
    * 数据模型：wxpay-微信支付云模板云函数
    */ 
    wxpay_scf_example_nbpwf1f_iGYN: DataModelMethods<IModalWxpayScfExampleNbpwf1FIGYN>;

    /**
    * 数据模型：企业官网-最新动态
    */ 
    qygwzxdt_kb7c2uq: DataModelMethods<IModalQygwzxdtKb7C2Uq>;

    /**
    * 数据模型：企业官网-应用场景
    */ 
    app_scenario_6ks78hy: DataModelMethods<IModalAppScenario_6Ks78Hy>;

    /**
    * 数据模型：企业官网-解决方案
    */ 
    business_solution: DataModelMethods<IModalBusinessSolution>;

    /**
    * 数据模型：企业官网-企业信息
    */ 
    business: DataModelMethods<IModalBusiness>;

    /**
    * 数据模型：企业官网解决方案
    */ 
    qygwjjfa_4u3joh6: DataModelMethods<IModalQygwjjfa_4U3Joh6>;

    /**
    * 数据模型：ai_bot-小程序开放能力
    */ 
    ai_bot_mp_jftg8ta: DataModelMethods<IModalAiBotMpJftg8Ta>;

    /**
    * 数据模型：ai_bot-公众号开放服务
    */ 
    ai_bot_subscription_acount_16q9l5g: DataModelMethods<IModalAiBotSubscriptionAcount_16Q9L5G>;

    /**
    * 数据模型：ai_bot-公众号开放服务-服务号
    */ 
    ai_bot_service_account_u853wfk: DataModelMethods<IModalAiBotServiceAccountU853Wfk>;

    /**
    * 数据模型：用户
    */ 
    sys_user: DataModelMethods<IModalSysUser>;

    /**
    * 数据模型：部门
    */ 
    sys_department: DataModelMethods<IModalSysDepartment>;    
}

declare module "@cloudbase/wx-cloud-client-sdk" {
    interface OrmClient extends IModels {}
}

declare global {
    interface WxCloud {
        models: IModels;
    }
}
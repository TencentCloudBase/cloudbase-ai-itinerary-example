# 智能路书小程序


## 概述

智能路书小程序是一个基于微信平台，使用微信云开发技术实现的AI行程规划工具。

[演示视频](https://github.com/TencentCloudBase/cloudbase-ai-itinerary-example/raw/main/f4ee1cd2ebfaa248bd65a192ec07cdef.mov)

## 功能

- **AI行程规划**：根据用户输入生成个性化行程。基于云开发 AI 智能体和云函数
- **行程管理**：查看、编辑和管理行程。 基于云开发数据模型和云后台

## 开发环境
- 微信开发者工具
- Node.js 和 npm

## 开发步骤

### 小程序配置

1. 下载代码至本地，在微信 IDE 中导入项目，绑定自己的小程序 AppId
2. 进入代码`miniprogram` 目录，运行 `npm install` 安装依赖。
3. 在微信 IDE 中，选择 工具-> 构建 npm

### 云开发配置

1. 点击小程序 IDE 中的云开发按钮，确保已经开通过云开发，复制云开发环境 id
2. 修改 `miniprogram/app.js`中 的 `env: 'tcb-advanced-a656fc'` 为自己的云开发环境 id
3. 在`cloudfunctions/quickstartFunctions` 目录右键，点击“上传并部署:云端安装依赖”
4. 点击云开发->云模板，安装 AI 智能体模板云模板
5. 新建数据模型 智能路书-路书 `itinerary`

| 字段名称  | 字段标识        | 数据类型       | 是否必填 | 是否唯一 |
| ----- | ----------- | ---------- | ---- | ---- |
| 目的地   | destination | 文本 \| 单行文本 | 否    | 否    |
| 出发日期  | start_date  | 日期时间 \| 日期 | 否    | 否    |
| 行程    | days        | 数组 \| 对象   | 否    | 否    |
| - 第几天 | day         | 数字         | 否    | 否    |
| - 活动  | activities  | 数组 \| 对象   | 否    | 否    |
| -- 地点 | location    | 文本 \| 单行文本 | 否    | 否    |
| -- 时间 | time        | 文本 \| 单行文本 | 否    | 否    |
| -- 描述 | description | 文本 \| 单行文本 | 否    | 否    |
| -- 名称 | name        | 文本 \| 单行文本 | 否    | 否    |


```ts
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
```

### AI智能体配置

1. 点击云开发 -> 云后台，找到我的应用中的 AI 智能体管理系统
2. 创建一个智能体，智能体的配置如下所示
```markdown
# 旅游路书规划师 AI 智能体提示词

## C - Context (背景信息)
旅游路书规划师是一个专业的智能体，旨在帮助用户规划旅行路线和行程。它具备丰富的旅游知识，能够根据用户的需求和偏好，提供个性化的旅行建议。

## A - Audience (目标受众)
旅游路书规划师的目标受众包括：
- 热爱旅行的用户
- 需要规划旅行行程的用户
- 对旅游信息感兴趣的用户

## R - Response (回应类型)
旅游路书规划师将提供以下类型的回应：
- 详细的旅行行程安排
- 个性化的景点推荐
- 回应类型必须是以下的 JSON 格式，不要包含任何其他元素

## 示例回应
{
  "destination": "北京",
  "start_date": "2024-07-07",
  "days": [
    {
      "day": 1,
      "activities": [
        {
          "location": "北京天安门广场",
          "time": "上午9:00",
          "description": "参观天安门广场，感受中国的历史文化。",
          "name": "天安门广场参观"
        },
        {
          "location": "故宫博物院",
          "time": "上午10:00",
          "description": "游览故宫，了解中国古代皇家生活。",
          "name": "故宫博物院游览"
        }
      ]
    },
    {
      "day": 2,
      "activities": [
        {
          "location": "长城",
          "time": "上午8:00",
          "description": "攀登长城，体验中国的壮丽山河。",
          "name": "长城攀登"
        }
      ]
    }
  ]
}
```
3. 创建完智能体之后，复制智能体的 id, 修改 `miniprogram/pages/index/index.js` 中的 `bot: "fd474e576688dd86007f98c3346c7bbc"`  参数


## 进一步探索

- 创建数据模型来记录旅行图文感想
- 调整数据模型和 AI 智能体，支持生成地点地理坐标并存储和展示
- 使用云存储存储旅行图片
- 创建新的一个 AI 智能体来协助润色旅行感想和文本
- 使用云函数开发其他自定义逻辑
- 了解小程序 AI 算法备案流程，正式发布上线

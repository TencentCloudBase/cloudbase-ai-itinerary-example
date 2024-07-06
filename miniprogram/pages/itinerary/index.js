Page({
    data: {
        "destination": "深圳",
        "start_date": "2023-12-01",
        
        "days": [
            {
                "day": 1,
                "activities": [
                    {
                        "location": "深圳市区",
                        "time": "上午9:00",
                        "description": "游览深圳市区，体验深圳的都市风情。",
                        "name": "深圳市区游"
                    },
                    {
                        "location": "深圳市民中心",
                        "time": "上午11:00",
                        "description": "参观深圳市民中心，了解深圳的现代化建设。",
                        "name": "深圳市民中心参观"
                    },
                    {
                        "location": "华强北",
                        "time": "下午2:00",
                        "description": "逛华强北，感受深圳的电子科技氛围。",
                        "name": "华强北逛街"
                    }
                ]
            },
            {
                "day": 2,
                "activities": [
                    {
                        "location": "深圳世界之窗",
                        "time": "上午9:00",
                        "description": "游览世界之窗，欣赏全球著名景点的微缩景观。",
                        "name": "世界之窗游览"
                    },
                    {
                        "location": "深圳欢乐谷",
                        "time": "下午1:00",
                        "description": "游玩欢乐谷，体验刺激的游乐设施。",
                        "name": "欢乐谷游玩"
                    }
                ]
            },
            {
                "day": 3,
                "activities": [
                    {
                        "location": "深圳东部华侨城",
                        "time": "上午9:00",
                        "description": "游览东部华侨城，体验大侠谷和茶溪谷的风光。",
                        "name": "东部华侨城游览"
                    },
                    {
                        "location": "深圳大梅沙海滨公园",
                        "time": "下午2:00",
                        "description": "前往大梅沙海滨公园，享受海滨风光。",
                        "name": "大梅沙海滨公园游玩"
                    }
                ]
            },
            {
                "day": 4,
                "activities": [
                    {
                        "location": "深圳莲花山公园",
                        "time": "上午9:00",
                        "description": "攀登莲花山公园，俯瞰深圳市区美景。",
                        "name": "莲花山公园攀登"
                    },
                    {
                        "location": "深圳博物馆",
                        "time": "上午11:00",
                        "description": "参观深圳博物馆，了解深圳的历史文化。",
                        "name": "深圳博物馆参观"
                    },
                    {
                        "location": "海岸城",
                        "time": "下午2:00",
                        "description": "逛海岸城，享受购物乐趣。",
                        "name": "海岸城逛街"
                    }
                ]
            },
            {
                "day": 5,
                "activities": [
                    {
                        "location": "深圳湾公园",
                        "time": "上午9:00",
                        "description": "游览深圳湾公园，欣赏深圳湾的美景。",
                        "name": "深圳湾公园游览"
                    },
                    {
                        "location": "深圳科技园",
                        "time": "下午1:00",
                        "description": "参观深圳科技园，了解深圳的科技创新。",
                        "name": "深圳科技园参观"
                    }
                ]
            },
            {
                "day": 6,
                "activities": [
                    {
                        "location": "深圳西丽大学城",
                        "time": "上午9:00",
                        "description": "游览西丽大学城，感受学术氛围。",
                        "name": "西丽大学城游览"
                    },
                    {
                        "location": "深圳锦绣中华民俗村",
                        "time": "下午1:00",
                        "description": "游玩锦绣中华民俗村，体验中国传统文化。",
                        "name": "锦绣中华民俗村游玩"
                    }
                ]
            },
            {
                "day": 7,
                "activities": [
                    {
                        "location": "深圳中心公园",
                        "time": "上午9:00",
                        "description": "游览中心公园，享受城市绿地。",
                        "name": "中心公园游览"
                    },
                    {
                        "location": "深圳音乐厅",
                        "time": "晚上7:30",
                        "description": "聆听深圳音乐厅的音乐会，享受艺术盛宴。",
                        "name": "深圳音乐厅音乐会"
                    }
                ]
            }
        ]
    }
    ,
    getActivityIcon: function (activityName) {
        // 这里可以根据活动名称返回相应的图标路径
        // 例如：'city', 'museum', 'park', 'beach' 等
        const icons = {
            '深圳市区游': '/images/city.png',
            '深圳市民中心参观': '/images/museum.png',
            '华强北逛街': '/images/electronics.png',
            // ... 其他活动的图标路径
        };
        return icons[activityName] || '/images/default.png';
    },
    onLoad: function () {
        // 这里可以将JSON数据转换为数组格式，并绑定到data上
        this.setData({
            days: JSON.parse(JSON.stringify(/* 你的JSON数据 */))
        });
    }
});
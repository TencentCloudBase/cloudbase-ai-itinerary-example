Page({
    data: {
        itinerary: {}
    },
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
    onLoad: async function (options) {
        // 这里可以将JSON数据转换为数组格式，并绑定到data上
        if (options._id) {
            const {data} = await wx.cloud.models.itinerary.get({
                filter: {
                    where: {
                        $and: [
                            {
                                _id: {
                                    $eq: options._id, // 推荐传入_id数据标识进行操作
                                },
                            },
                        ]
                    }
                },
            });

            // 返回查询到的数据
            this.setData({
                itinerary: data
            })
        }
    }
});
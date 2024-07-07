Page({
    data: {
        loading: false,
    },
    // 表单提交事件处理函数
    submitForm: function (e) {
        if (this.loading) return

        wx.showLoading({
            title: 'AI努力生成中',
        })
        this.setData({
            loading: true
        })
        const formData = e.detail.value;
        console.log('表单数据', formData);
        const now = new Date();
        wx.cloud.callFunction({
            name: "cloudbase_module",
            data: {
                name: "ai_bot_send_msg",
                data: {
                    msg: JSON.stringify({
                        destination: formData.destination,
                        travelDays: formData.travelDays || 3,
                        interests: formData.interests,
                        startDate: formData.startDate || new Date(now.getFullYear(), now.getMonth() + 1, now.getDate() + 1)
                    }),
                    history: [
                    ],
                    bot: "fd474e576688dd86007f98c3346c7bbc",
                },
            },
            success: async (res) => {
                if (!res.result.code) {
                    console.log(res.result.data.content)
                    const itinerary = this.extractAndParseJSON(res.result.data.content)

                    const { data } = await wx.cloud.models.itinerary.create({
                        data: {
                            ...itinerary,
                            start_date: new Date(itinerary.start_date).valueOf()
                        }
                    });

                    const { id } = data;
                    wx.navigateTo({
                        url: `/pages/itinerary/index?_id=${id}`
                    });
                    console.log(data)

                }
            },
            complete: (res) => {
                wx.hideLoading()
                this.setData({
                    loading: false
                })
            }
        });
        // 这里可以调用后端API生成行程，或者进行其他逻辑处理
    },
    extractAndParseJSON(text) {
        // 正则表达式匹配直接的JSON对象或被```json```包围的JSON字符串
        const jsonRegex = /\{(?:[^{}]|(?:{[^{}]*}))*\}|```json([\s\S]*?)```/;

        let match;
        while ((match = jsonRegex.exec(text)) !== null) {
            // 尝试解析直接的JSON对象
            if (match[1]) {
                try {
                    return JSON.parse(match[1]);
                } catch (e) {
                    console.error('解析直接JSON对象时发生错误:', e);
                }
            }
            // 尝试解析被```json```包围的JSON字符串
            else if (match[3]) {
                try {
                    return JSON.parse(match[3]);
                } catch (e) {
                    console.error('解析被```json```包围的JSON字符串时发生错误:', e);
                }
            }
        }

        // 如果没有找到匹配的JSON或解析失败，则返回null
        console.log('没有找到或解析JSON失败');
        return null;
    }
});
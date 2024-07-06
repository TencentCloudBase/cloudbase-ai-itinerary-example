Page({
    // 表单提交事件处理函数
    submitForm: function(e) {
      const formData = e.detail.value;
      console.log('表单数据', formData);
      // 这里可以调用后端API生成行程，或者进行其他逻辑处理
    }
  });
// 用echo测试ajax封装的代码
ajaxRequest('/', { echo: '黑暗骑士' }, function (data) {
  console.log('应答结果：', data);
});

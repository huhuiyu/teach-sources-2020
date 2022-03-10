new Vue({
  el: '#app',
  data() {
    return {
      title: 'Vue和ajax',
      // 服务器请求参数
      echo: '',
      // 应答结果
      result: {}
    };
  },
  methods: {
    test() {
      console.log('测试生命周期方法');
    },
    sendEcho() {
      // 记录vue当前实例，避免回调丢失
      let app = this;
      // ajax请求
      ajax(
        '/',
        { echo: this.echo },
        function (data) {
          console.log(data);
          // ajax获取的数据只需要简单的记录data中声明的变量
          // 既可以正常在vue任何地方使用!!!!
          app.result = data;
        },
        'get'
      );
    }
  },
  // 生命周期方法
  created() {
    // 当vue创建完毕的时候会执行本方法
    // 这个时候已经可以正常的访问data和methods中定义的数据和方法
    console.log('vue实例创建完毕,', this.title);
    this.test();
  },
  mounted() {
    // 当vue模板页面绑定完成（这个时候可以正常操作页面dom）
    console.log('vue挂载完毕');
  }
});

new Vue({
  el: '#app',
  data() {
    return {
      title: '用户登录',
      // 登录信息
      user: {
        username: '',
        password: ''
      },
      // 服务器应答的消息
      message: ''
    };
  },
  methods: {
    login() {
      let app = this;
      // 密码加密
      app.user.password = SparkMD5.hash(app.user.password);
      // 调用登录
      ajax('/user/auth/login', app.user, function (data) {
        app.user.password = '';
        app.message = data.message;
        if (data.success) {
          // 成功就跳转到首页
          location = 'main.html';
        }
      });
    },
    reset() {
      this.user = {
        username: '',
        password: ''
      };
    }
  },
  created() {}
});

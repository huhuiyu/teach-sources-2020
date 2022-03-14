let app = new Vue({
  el: '#app',
  data() {
    return {
      title: '用户登录',
      // 用户信息
      user: {
        username: '',
        password: ''
      },
      // 服务器消息
      message: ''
    };
  },
  methods: {
    reset() {
      this.user = {};
    },
    login() {
      let app = this;
      // 密码加密
      app.user.password = SparkMD5.hash(app.user.password);
      ajax('/user/auth/login', app.user, function (data) {
        app.user.password = '';
        app.message = data.message;
        // 登录成功跳转首页
        if (data.success) {
          location = 'main.html';
        }
      });
    }
  },
  created() {}
});

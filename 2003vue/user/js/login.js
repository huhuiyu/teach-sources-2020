new Vue({
  el: '#app',
  data() {
    return {
      title: '用户登录',
      // 用户信息
      user: {
        username: '',
        password: '',
      },
      // 消息提示
      message: '',
    };
  },
  methods: {
    login() {
      // 登录功能
      let app = this;
      // 密码加密
      app.user.password = SparkMD5.hash(app.user.password);
      ajax('/user/auth/login', app.user, function (data) {
        app.user.password = '';
        app.message = data;
        if (data.success) {
          // 成功就跳转到首页
          location = 'main.html';
        }
      });
    },
    reset() {
      this.user = {
        username: '',
        password: '',
      };
    },
  },
});

new Vue({
  el: '#app',
  data() {
    return {
      title: '用户注册',
      // 用户信息
      user: {
        username: '',
        password: '',
        nickname: '',
      },
      // 消息提示
      message: '',
    };
  },
  methods: {
    reg() {
      // 注册功能
      let app = this;
      // 密码加密
      app.user.password = SparkMD5.hash(app.user.password);
      ajax('/user/auth/reg', app.user, function (data) {
        app.user.password = '';
        app.message = data;
      });
    },
    reset() {
      this.user = {
        username: '',
        password: '',
        nickname: '',
      };
    },
  },
});

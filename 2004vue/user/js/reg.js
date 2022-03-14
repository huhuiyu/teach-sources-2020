new Vue({
  el: '#app',
  data() {
    return {
      title: '用户注册',
      user: {
        nickname: '',
        password: '',
        username: ''
      },
      message: ''
    };
  },
  methods: {
    reg() {
      // 用户注册
      let app = this;
      // 密码加密
      app.user.password = SparkMD5.hash(app.user.password);
      ajax('/user/auth/reg', app.user, function (data) {
        app.user.password = '';
        app.message = data.message;
      });
    },
    reset() {
      this.user = {
        nickname: '',
        password: '',
        username: ''
      };
    }
  },
  created() {}
});

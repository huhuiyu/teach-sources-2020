new Vue({
  el: '#app',
  data() {
    return {
      title: '用户注册',
      // 注册信息
      user: {
        username: '',
        password: '',
        nickname: ''
      },
      // 服务器应答的消息
      message: ''
    };
  },
  methods: {
    reg() {
      let app = this;
      // 密码加密
      app.user.password = SparkMD5.hash(app.user.password);
      // 调用注册
      ajax('/user/auth/reg', app.user, function (data) {
        app.user.password = '';
        app.message = data.message;
      });
    },
    reset() {
      this.user = {
        username: '',
        password: '',
        nickname: ''
      };
    }
  },
  created() {}
});

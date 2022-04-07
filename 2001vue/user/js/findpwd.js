let app = null;

new Vue({
  el: '#app',
  data() {
    return {
      title: '找回密码',
      info: {
        username: '',
        password: '',
        code: '',
      },
      pwd2: '',
    };
  },
  methods: {
    save() {
      //密码校验
      if (app.info.password == '' || app.info.password != app.pwd2) {
        alert('密码必须填写且一致');
        return;
      }
      app.info.password = SparkMD5.hash(app.info.password);
      // 保存
      ajax('/user/auth/findPwdByEmail', app.info, function (data) {
        alert(data.message);
        app.info.password = '';
      });
    },
    sendCode() {
      ajax(
        '/tool/sendUserEmailCode',
        {
          username: app.info.username,
        },
        function (data) {
          alert(data.message);
        }
      );
    },
  },
  created() {
    app = this;
  },
});

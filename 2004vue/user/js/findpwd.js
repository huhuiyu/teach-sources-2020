let app = null;
new Vue({
  el: '#app',
  data() {
    return {
      title: '找回密码',
      info: {
        code: '',
        password: '',
        username: '',
      },
      pwd2: '',
    };
  },
  methods: {
    // 修改密码
    modifyPwd() {
      // 确认密码的校验
      if (app.info.password == '' || app.info.password != app.pwd2) {
        alert('密码必须填写且一致');
        return;
      }
      app.info.password = SparkMD5.hash(app.info.password);
      // 保存
      ajax('/user/auth/findPwdByEmail', app.info, function (data) {
        app.info.password = '';
        alert(data.message);
      });
    },
    // 发送验证码
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

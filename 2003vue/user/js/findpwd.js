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
    find() {
      // 验证密码
      if (app.info.password == '' || app.info.password != app.pwd2) {
        alert('密码必须填写且和确认密码一致');
        return;
      }
      app.info.password=SparkMD5.hash(app.info.password);

      ajax('/user/auth/findPwdByEmail', app.info, function (data) {
        alert(data.message);
        app.info.password='';
      });
    },
  },
  created() {
    app = this;
  },
});

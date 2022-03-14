new Vue({
  el: '#app',
  data() {
    return {
      title: '用户首页',
      tbUser: {},
      tbUserInfo: {}
    };
  },
  methods: {
    logout() {
      // 安全退出
      ajax('user/auth/logout', {}, function () {
        location = 'login.html';
      });
    },
    queryUser() {
      let app = this;
      // 获取登录用户信息的方法
      ajax('/user/auth/getUserInfo', {}, function (data) {
        if (data.success) {
          // 成功应答就显示信息
          app.tbUser = data.tbUser;
          app.tbUserInfo = data.tbUserInfo;
        } else {
          location = 'login.html';
        }
      });
    }
  },
  created() {
    this.queryUser();
  }
});

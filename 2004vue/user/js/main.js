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
      ajax('/user/auth/logout', {}, function () {
        location = 'login.html';
      });
    },
    queryUser() {
      let app = this;
      ajax('/user/auth/getUserInfo', {}, function (data) {
        if (data.success) {
          // 成功获取用户信息的情况
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

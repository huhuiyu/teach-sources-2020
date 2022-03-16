new Vue({
  el: '#app',
  data() {
    return {
      title: '用户首页',
      tbUser: {},
      tbUserInfo: {},
    };
  },
  methods: {
    queryUser() {
      let app = this;
      ajax('/user/auth/getUserInfo', {}, function (data) {
        if (!data.success) {
          alert('出bug了，没有登录成功！！');
          return;
        }
        app.tbUser = data.tbUser;
        app.tbUserInfo = data.tbUserInfo;
      });
    },
  },
  created() {
    this.queryUser();
  },
});

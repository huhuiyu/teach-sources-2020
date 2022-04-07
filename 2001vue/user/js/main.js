new Vue({
  el: '#app',
  data() {
    return {
      title: '用户首页',
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
      // 修改信息相关
      modifyUser: {},
      visible: false,
      sexList: SEX_LIST,
      // 邮箱修改的部分
      mailVisible: false,
      mailInfo: {
        email: '',
        code: '',
      },
    };
  },
  methods: {
    saveEmail() {
      let app = this;
      ajax('/user/auth/updateUserEmail', app.mailInfo, function (data) {
        alert(data.message);
        if (data.success) {
          app.queryUser();
        }
      });
    },
    sendMailCode() {
      let app = this;
      ajax('/tool/sendEmailCode', app.mailInfo, function (data) {
        alert(data.message);
      });
    },
    saveModify() {
      let app = this;
      ajax('/user/auth/updateUserInfo', app.modifyUser, function (data) {
        alert(data.message);
        if (data.success) {
          app.queryUser();
        }
      });
    },
    showModify() {
      let app = this;
      app.modifyUser = JSON.parse(JSON.stringify(app.tbUserInfo));
      app.modifyUser.nickname = app.tbUser.nickname;
      // 手机和邮箱不可以直接修改！！！
      delete app.modifyUser.phone;
      delete app.modifyUser.email;

      app.visible = true;
    },
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
          app.userOtherInfo = data.userOtherInfo;
        } else {
          location = 'login.html';
        }
      });
    },
  },
  created() {
    this.queryUser();
  },
});

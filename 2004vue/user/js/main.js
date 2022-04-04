new Vue({
  el: '#app',
  data() {
    return {
      title: '用户首页',
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
      // 修改附加信息
      modifyInfo: {},
      visible: false,
      sexList: SEX_LIST,
      // 修改邮箱信息
      mailInfo: {
        email: '',
        code: '',
      },
      mailVisible: false,
    };
  },
  methods: {
    saveMail() {
      let app = this;
      ajax('/user/auth/updateUserEmail', app.mailInfo, function (data) {
        alert(data.message);
        if (data.success) {
          app.queryUser();
        }
      });
    },
    sendMailCode() {
      ajax('/tool/sendEmailCode', this.mailInfo, function (data) {
        alert(data.message);
      });
    },
    modify() {
      let app = this;
      ajax('/user/auth/updateUserInfo', this.modifyInfo, function (data) {
        alert(data.message);
        if (data.success) {
          app.queryUser();
        }
      });
    },
    showModify() {
      // 修改的信息来自多个对象
      this.modifyInfo = JSON.parse(JSON.stringify(this.tbUserInfo));
      this.modifyInfo.nickname = this.tbUser.nickname;
      // 电话和邮箱要通过特别的接口修改，不能在这里提交
      delete this.modifyInfo.phone;
      delete this.modifyInfo.email;

      this.visible = true;
    },
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

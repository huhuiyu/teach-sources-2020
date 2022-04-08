new Vue({
  el: '#app',
  data() {
    return {
      title: '用户首页',
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
      // 修改信息的部分
      visible: false,
      modifyInfo: {},
      // 性别列表
      sexList: SEX_LIST,
      mailInfo: {
        code: '',
        email: '',
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
    sendCode() {
      let app = this;
      ajax('/tool/sendEmailCode', app.mailInfo, function (data) {
        alert(data.message);
      });
    },
    modify() {
      let app = this;
      ajax('/user/auth/updateUserInfo', app.modifyInfo, function (data) {
        alert(data.message);
        if (data.success) {
          app.queryUser();
        }
      });
    },
    showModify() {
      // 组合修改信息对象
      let app = this;
      // 主要信息来源于附加信息
      app.modifyInfo = JSON.parse(JSON.stringify(app.tbUserInfo));
      // 用户名来自于主要信息
      app.modifyInfo.nickname = app.tbUser.nickname;
      // 不可以提交电话和邮箱
      delete app.modifyInfo.phone;
      delete app.modifyInfo.email;

      app.visible = true;
    },
    queryUser() {
      let app = this;
      ajax('/user/auth/getUserInfo', {}, function (data) {
        if (!data.success) {
          alert('出bug了，没有登录成功！！');
          return;
        }
        app.tbUser = data.tbUser;
        app.tbUserInfo = data.tbUserInfo;
        app.userOtherInfo = data.userOtherInfo;
      });
    },
  },
  created() {
    this.queryUser();
  },
});

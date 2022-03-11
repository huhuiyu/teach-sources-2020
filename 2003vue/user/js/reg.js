new Vue({
  el: '#app',
  data() {
    return {
      title: '用户注册',
      // 用户信息
      user: {
        username: '',
        password: '',
        nickname: ''
      },
      // 消息提示
      message: ''
    };
  },
  methods: {
    reg() {},
    reset() {}
  }
});

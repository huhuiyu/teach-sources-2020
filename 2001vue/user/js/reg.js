new Vue({
  el: '#app',
  data() {
    return {
      title: '用户注册',
      // 注册信息
      user: {
        username: '',
        password: '',
        nickname: ''
      },
      // 服务器应答的消息
      message: ''
    };
  },
  methods: {
    login() {},
    reset() {
      this.user = {
        username: '',
        password: '',
        nickname: ''
      };
    }
  },
  created() {}
});

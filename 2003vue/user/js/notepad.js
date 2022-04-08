let app = null;

new Vue({
  el: '#app',
  data() {
    return {
      title: '用户记事本',
      page: {},
      queryInfo: {
        title: '',
        info: '',
      },
      list: [],
      message: '',
    };
  },
  methods: {
    
  },
  created() {
    app = this;
  },
});

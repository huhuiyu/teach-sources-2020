let app = null;

new Vue({
  el: '#app',
  data() {
    return {
      title: '用户记事本',
      page: {},
      queryInfo: {
        info: '',
        title: '',
      },
      list: [],
      message: '',
    };
  },
  methods: {
    query() {
      copyJsonInfo(app.page, app.queryInfo);
      ajax('/user/note/queryAll', app.queryInfo, function (data) {
        if (!data.success) {
          app.message = data.message;
          return;
        }
        app.list = data.list;
        app.page = data.page;
      });
    },
  },
  created() {
    app = this;
    app.query();
  },
});

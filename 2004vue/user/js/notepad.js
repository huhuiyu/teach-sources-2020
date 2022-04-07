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
      // 添加的部分
      addInfo: {
        info: '',
        title: '',
      },
      message: '',
    };
  },
  methods: {
    add() {
      ajax('/user/note/add', app.addInfo, function (data) {
        app.message = data.message;
        if (data.success) {
          app.query();
        }
      });
    },
    query() {
      copyJsonInfo(app.page, app.queryInfo);
      ajax('/user/note/queryAll', app.queryInfo, function (data) {
        if (!data.success) {
          alert(data.message);
          return;
        }
        app.page = data.page;
        app.list = data.list;
      });
    },
  },
  created() {
    app = this;
    app.query();
  },
});

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
      // 修改的部分
      modifyInfo: {},
      modifyVisible: false,
      // 回收站的部分
      deleteInfo: {
        page: {},
        list: {},
        visible: false,
      },
      message: '',
    };
  },
  methods: {
    // 删除记录查询（回收站）
    queryDeleteInfo() {
      ajax('/user/note/queryAllDeleted', {}, function (data) {
        if (!data.success) {
          app.message = data.message;
          return;
        }
        app.deleteInfo.page = data.page;
        app.deleteInfo.list = data.list;
        app.deleteInfo.visible = true;
      });
    },
    modify() {
      ajax('/user/note/update', app.modifyInfo, function (data) {
        alert(data.message);
        if (data.success) {
          app.query();
        }
      });
    },
    showMody(info) {
      app.modifyInfo = JSON.parse(JSON.stringify(info));
      app.modifyVisible = true;
    },
    del(info) {
      if (confirm('是否删除：' + info.title)) {
        ajax(
          '/user/note/delete',
          {
            unid: info.unid,
          },
          function (data) {
            app.message = data.message;
            if (data.success) {
              app.query();
            }
          }
        );
      }
    },
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

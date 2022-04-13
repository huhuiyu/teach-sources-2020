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
      // 添加的部分
      addInfo: {
        info: '',
        title: '',
      },
      // 修改的部分
      modifyInfo: {},
      modifyVisible: false,
      // 删除记录的查询
      deleteInfo: {
        list: [],
        page: {},
        visible: false,
      },
    };
  },
  methods: {
    // 作业：仿造记事本完成用户联系人的全部功能
    queryDelete() {
      ajax('/user/note/queryAllDeleted', app.deleteInfo.page, function (data) {
        app.message = data.message;
        if (data.success) {
          app.deleteInfo.page = data.page;
          app.deleteInfo.list = data.list;
          app.deleteInfo.visible = true;
        }
      });
    },
    modify() {
      ajax('/user/note/update', app.modifyInfo, function (data) {
        app.message = data.message;
        if (data.success) {
          app.query();
        }
      });
    },
    showModi(info) {
      app.modifyInfo = JSON.parse(JSON.stringify(info));
      app.modifyVisible = true;
    },
    del(info) {
      if (confirm('是否删除:' + info.title)) {
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
          app.addInfo = {
            info: '',
            title: '',
          };
        }
      });
    },
    query() {
      copyJsonInfo(app.page, app.queryInfo);

      ajax('/user/note/queryAll', app.queryInfo, function (data) {
        if (!data.success) {
          app.message = data.message;
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

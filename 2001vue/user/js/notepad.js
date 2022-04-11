let app = null;
// data是数据 
// method是方法
// 任何要使用的数据都要在data中定义过！！！！
// data中的数据是实时同步页面和vue的任何功能中
new Vue({
  el: '#app',
  data() {
    return {
      title: '用户记事本',
      page: {
        pageSize: 2,
      },
      queryInfo: {
        info: '',
        title: '',
      },
      list: [],
      // 添加的部分
      addInfo: {
        title: '',
        info: '',
      },
      // 修改的部分
      modifyInfo: {},
      modifyVisible: false,
      message: '',
      // 回收站
      deleteData: {
        page: {},
        list: [],
        visible: false,
      },
    };
  },
  methods: {
    showDeleteData() {
      ajax('/user/note/queryAllDeleted', {}, function (data) {
        if (!data.success) {
          app.message = data.message;
          return;
        }
        app.deleteData.page = data.page;
        app.deleteData.list = data.list;
        app.deleteData.visible = true;
      });
    },
    modify() {
      ajax('/user/note/update', app.modifyInfo, function (data) {
        app.message = data.message;
        if (data.success) {
          app.modifyVisible = false;
          app.query();
        }
      });
    },
    showModi(info) {
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
            app.query();
          }
        );
      }
    },
    toPage(pageNumber) {
      // 有效性判断
      if (pageNumber < 1 || pageNumber > app.page.pageCount) {
        return;
      }
      app.page.pageNumber = pageNumber;
      app.query();
    },
    add() {
      ajax('/user/note/add', app.addInfo, function (data) {
        app.message = data.message;
        if (data.success) {
          app.addInfo = {
            title: '',
            info: '',
          };
        }
        app.query();
      });
    },
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

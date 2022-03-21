
new Vue({
  el: '#app',
  data() {
    return {
      title: '部门管理',
      loading: false,
      // 查询参数
      queryInfo: {
        deptName: '',
      },
      // 部门列表
      list: [],
      // 分页信息
      page: {
        pageNumber: 1,
        pageSize: 5,
      },
      // 添加的信息
      addInfo: {
        deptInfo: '',
        deptName: '',
      },
      // 修改的信息
      modifyInfo: {},
      // 修改信息是否可见
      visible: false,
    };
  },
  methods: {
    getTime(time) {
      console.log('要处理的时间信息', time);
      // 转换时间戳为指定格式的字符
      let date = new Date();
      date.setTime(time);
      return (
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes() +
        ':' +
        date.getSeconds()
      );
    },
    del(info) {
      let app = this;
      if (confirm('是否删除部门：' + info.deptName)) {
        app.loading = true;
        ajax(
          '/manage/dept/delete',
          {
            deptId: info.deptId,
          },
          function (data) {
            app.loading = false;
            alert(data.message);
            app.query();
          }
        );
      }
    },
    modify() {
      // 修改信息
      let app = this;
      app.loading = true;
      ajax('/manage/dept/update', app.modifyInfo, function (data) {
        app.loading = false;
        alert(data.message);
      });
    },
    showModify(info) {
      // vue是双向绑定，所以需要一个页面数据的副本进行修改
      this.modifyInfo = JSON.parse(JSON.stringify(info));
      // 删除修改不能提交的字段lastupdate
      delete this.modifyInfo.lastupdate;
      this.visible = true;
    },
    add() {
      let app = this;
      app.loading = true;
      ajax('/manage/dept/add', app.addInfo, function (data) {
        app.loading = false;
        alert(data.message);
        if (data.success) {
          app.addInfo = {};
          app.query();
        }
      });
    },
    toPage(pageNumber) {
      // 分页合法性校验
      if (pageNumber <= 0 || pageNumber > this.page.pageCount) {
        return;
      }
      this.page.pageNumber = pageNumber;
      this.query();
    },
    query() {
      let app = this;
      app.loading = true;
      // 处理page信息
      app.queryInfo.pageNumber = app.page.pageNumber;
      app.queryInfo.pageSize = app.page.pageSize;

      ajax('/manage/dept/queryAll', app.queryInfo, function (data) {
        // setTimeout(function () {
        app.loading = false;
        // }, 2000);

        if (!data.success) {
          alert(data.message);
          return;
        }
        app.list = data.list;
        app.page = data.page;
      });
    },
  },
  created() {
    this.query();
  },
});

new Vue({
  el: '#app',
  data() {
    return {
      title: '部门管理',
      // 查询参数
      queryInfo: {
        deptName: '',
        pageNumber: '',
        pageSize: '',
      },
      // 查询结果
      list: [],
      page: {
        pageNumber: 1,
        pageSize: 5,
      },
      // 添加信息对象
      addInfo: {
        deptInfo: '',
        deptName: '',
      },
      // 修改信息对象
      modifyInfo: {},
      // 修改信息是否出现
      visible: false,
      // 加载数据的控制
      loading: false,
    };
  },
  methods: {
    del(info) {
      // 删除信息
      let app = this;
      if (confirm('是否删除部门:' + info.deptName)) {
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
        if (data.success) {
          app.query();
        }
      });
    },
    showModify(info) {
      // 显示修改信息，vue的变量会和页面绑定，所以修改应该是副本
      this.modifyInfo = JSON.parse(JSON.stringify(info));
      this.visible = true;
    },
    add() {
      // 添加部门
      let app = this;
      app.loading = true;
      ajax('/manage/dept/add', this.addInfo, function (data) {
        app.loading = false;
        alert(data.message);
        if (data.success) {
          app.addInfo = { deptInfo: '', deptName: '' };
        }
      });
    },
    toPage(pn) {
      // 分页有效性判断
      if (pn < 1 || pn > this.page.pageCount) {
        return;
      }
      // 切换页面查询
      this.page.pageNumber = pn;
      this.query();
    },
    query() {
      let app = this;
      // 处理分页的信息
      app.queryInfo.pageNumber = app.page.pageNumber;
      app.queryInfo.pageSize = app.page.pageSize;
      app.loading = true;
      // 查询部门信息
      ajax('/manage/dept/queryAll', app.queryInfo, function (data) {
        app.loading = false;
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
    this.query();
  },
});

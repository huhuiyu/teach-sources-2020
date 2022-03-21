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
      // 部门列表
      list: [],
      // 分页信息
      page: {
        pageSize: 5,
      },
      // 加载的控制
      loading: false,
      // 添加的信息
      addInfo: {
        deptName: '',
        deptInfo: '',
      },
      // 修改的信息
      modifyInfo: {},
      // 修改的表单是否可见
      visible: false,
    };
  },
  methods: {
    showModify(info) {
      let app = this;
      app.visible = true;
      // vue特色是vm同步，所以修改的值要是副本
      app.modifyInfo = JSON.parse(JSON.stringify(info));
      // 服务器不需要lastupdate字段
      delete app.modifyInfo.lastupdate;
    },
    modify() {
      let app = this;
      ajax('/manage/dept/update', app.modifyInfo, function (data) {
        alert(data.message);
        app.query();
      });
    },
    del(info) {
      console.log('要删除的信息：', info);
      let app = this;
      if (confirm('是否删除：' + info.deptName)) {
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
    add() {
      // 添加部门的方法
      this.loading = true;
      let app = this;
      ajax('/manage/dept/add', app.addInfo, function (data) {
        app.loading = false;
        alert(data.message);
        if (data.success) {
          // 成功就重置添加并查询
          app.addInfo = {
            deptName: '',
            deptInfo: '',
          };
          app.query();
        }
      });
    },
    requery() {
      // 条件查询
      this.page.pageNumber = 1; //回到第一页
      this.query();
    },
    toPage(pageNumber) {
      // 有效性判断
      if (pageNumber < 1 || pageNumber > this.page.pageCount) {
        return;
      }
      this.page.pageNumber = pageNumber;
      this.query();
    },
    query() {
      let app = this;
      // 处理分页参数
      app.queryInfo.pageNumber = app.page.pageNumber;
      app.queryInfo.pageSize = app.page.pageSize;
      app.loading = true;
      // 查询数据
      ajax('/manage/dept/queryAll', app.queryInfo, function (data) {
        // 如果客户觉得速度缓慢，收优化费用后去掉延时代码
        setTimeout(function () {
          app.loading = false;
        }, 2000);

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

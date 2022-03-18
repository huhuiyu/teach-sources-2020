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
    };
  },
  methods: {
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

      // 查询部门信息
      ajax('/manage/dept/queryAll', app.queryInfo, function (data) {
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

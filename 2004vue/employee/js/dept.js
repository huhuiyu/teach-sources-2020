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
    };
  },
  methods: {
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

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
    };
  },
  methods: {
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

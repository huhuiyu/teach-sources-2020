let app = null;

new Vue({
  el: '#app',
  data() {
    return {
      title: '员工管理',
      // 查询结果
      page: {
        pageNumber: 1,
        pageSize: 10,
      },
      list: [],
      // 查询参数
      queryInfo: {
        deptId: -1,
        employeeName: '',
        orderBy: '',
        phone: '',
      },
      // 排序的列表数据
      orderByList: [
        { value: '1', text: '按照编号升序' },
        { value: '2', text: '按照编号降序' },
        { value: '3', text: '按照部门名称升序' },
        { value: '4', text: '按照部门名称降序' },
        { value: '5', text: '分部门按照姓名排序' },
      ],
    };
  },
  methods: {
    query() {
      // 需要处理分页信息
      copyJsonInfo(app.page, app.queryInfo);
      console.log('复制page信息：', app.queryInfo);
      ajax('/manage/employee/queryAll', app.queryInfo, function (data) {
        if (data.success) {
          app.page = data.page;
          app.list = data.list;
        }
      });
    },
  },
  created() {
    app = this;
    // 处理排序默认值
    app.queryInfo.orderBy = '2';
    app.query();
  },
});

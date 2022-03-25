let app = null;

new Vue({
  el: '#app',
  data() {
    return {
      title: '员工管理',
      // 查询相关
      queryInfo: {
        deptId: -1,
        employeeName: '',
        orderBy: '',
        phone: '',
      },
      page: {
        pageNumber: 1,
        pageSize: 10,
      },
      list: [],
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
      // 将分页信息复制给查询对象
      copyJsonInfo(app.page, app.queryInfo);
      console.log('复制分页后的结果', app.queryInfo);

      ajax('/manage/employee/queryAll', app.queryInfo, function (data) {
        if (data.success) {
          app.page = data.page;
          app.list = data.list;
          return;
        }
        alert(data.message);
      });
    },
  },
  created() {
    // 确定app为vue的实例对象
    app = this;
    app.queryInfo.orderBy = '2';
    app.query();
  },
});

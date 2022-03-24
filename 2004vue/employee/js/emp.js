// 练习作业，和上课的部门员工管理同步完成班级和学生管理
// 上课完成员工管理之后的下一个周一上交作业
let app = null;
new Vue({
  el: '#app',
  data() {
    return {
      title: '员工管理',
      // 员工信息部分
      page: {
        pageNumber: 1,
        pageSize: 5,
      },
      list: [],
      // 查询参数部分
      queryInfo: {
        deptId: -1,
        employeeName: '',
        orderBy: '',
        phone: '',
      },
      // 排序的列表
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
      // 处理分页信息到查询对象的问题
      console.log('查询参数：', app.queryInfo);
      copyJsonInfo(app.page, app.queryInfo);
      console.log('查询参数带分页：', app.queryInfo);
      ajax('/manage/employee/queryAll', app.queryInfo, function (data) {
        if (data.success) {
          app.page = data.page;
          app.list = data.list;
        } else {
          alert(data.message);
        }
      });
    },
  },
  created() {
    app = this;
    // orderBy初始值
    app.queryInfo.orderBy = app.orderByList[1].value;

    app.query();
  },
});

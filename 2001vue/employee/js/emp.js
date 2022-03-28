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
      // 部门查询的部分
      dept: {
        page: { pageSize: 5 },
        list: [],
        visible: false,
        selected: {},
      },
      // 添加的部分
      addInfo: {
        deptId: -1,
        employeeName: '',
        phone: '',
      },
    };
  },
  methods: {
    // 添加部门
    add() {
      ajax('/manage/employee/add', app.addInfo, function (data) {
        alert(data.message);
        if (data.success) {
          app.resetAdd();
          app.query();
        }
      });
    },
    // 重置添加
    resetAdd() {
      app.addInfo = {
        deptId: -1,
        employeeName: '',
        phone: '',
      };
    },
    // 部门分页
    toDeptPage(pn) {
      if (pn < 1 || pn > app.dept.page.pageCount) {
        return;
      }
      app.dept.page.pageNumber = pn;
      app.queryDept();
    },
    // 重置查询
    resetQuery() {
      app.queryInfo = {
        deptId: -1,
        employeeName: '',
        orderBy: '2',
        phone: '',
      };
      app.query();
    },
    // 选中部门
    selectDept(info) {
      // 记录选中值
      app.dept.selected = info;
      // 修改查询条件值
      app.queryInfo.deptId = info.deptId;
      app.dept.visible = false;
    },
    // 查询部门的部分
    queryDept() {
      ajax('/manage/dept/queryAll', app.dept.page, function (data) {
        if (data.success) {
          app.dept.visible = true;
          app.dept.page = data.page;
          app.dept.list = data.list;
        } else {
          alert(data.message);
        }
      });
    },
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

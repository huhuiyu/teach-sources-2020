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
      // 部门信息查询部分
      deptInfo: {
        page: { pageSize: 5 },
        list: [],
        // 选中值
        selected: {},
        // 部门选择是否可见
        visible: false,
        // 判断部门选择的模式（查询，添加，修改）
        mode: '',
      },
      // 员工添加的部分
      addInfo: {
        deptId: -1,
        employeeName: '',
        phone: '',
      },
    };
  },
  methods: {
    //重置查询
    resetQuery() {
      app.queryInfo = {
        deptId: -1,
        employeeName: '',
        orderBy: '2',
        phone: '',
      };
      app.query();
    },
    // 部门分页
    toDeptPage(pageNumber) {
      // 分页合法性校验
      if (pageNumber <= 0 || pageNumber > app.deptInfo.page.pageCount) {
        return;
      }
      app.deptInfo.page.pageNumber = pageNumber;
      app.queryDept();
    },
    // 部门的选择
    selectDept(info) {
      // 记录选择的值（给页面显示）
      app.deptInfo.selected = info;

      // 通过mode判断返回值给到什么字段
      if ('add' == app.deptInfo.mode) {
        // 添加信息的部门变更
        app.addInfo.deptId = info.deptId;
      } else if ('query' == app.deptInfo.mode) {
        // 查询信息部门变更
        app.queryInfo.deptId = info.deptId;
      }

      app.deptInfo.visible = false;
    },
    // 部门的查询
    queryDept() {
      ajax('/manage/dept/queryAll', app.deptInfo.page, function (data) {
        if (data.success) {
          app.deptInfo.visible = true;
          app.deptInfo.page = data.page;
          app.deptInfo.list = data.list;
        } else {
          alert(data.message);
        }
      });
    },
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

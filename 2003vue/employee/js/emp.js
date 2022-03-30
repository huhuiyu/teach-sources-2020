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
      // 部门查询的部分
      deptInfo: {
        page: {
          pageSize: 5,
        },
        list: [],
        // 控制是否显示选择部门的列表
        visible: false,
        // 记录选中的项
        selected: {},
        // 选择部门的模式
        mode: '',
      },
      // 添加的信息
      addInfo: {
        deptId: -1,
        employeeName: '',
        phone: '',
      },
    };
  },
  methods: {
    toDeptPage(pn) {
      // 分页有效性判断
      if (pn < 1 || pn > app.deptInfo.page.pageCount) {
        return;
      }
      // 切换页面查询
      app.deptInfo.page.pageNumber = pn;
      app.queryDept();
    },

    // 选中部门的部分
    selectDept(info) {
      // 记住选中的值
      app.deptInfo.selected = info;

      if ('add' == app.deptInfo.mode) {
        // 给添加部门赋值
        app.addInfo.deptId = info.deptId;
      } else if ('query' == app.deptInfo.mode) {
        // 给查询条件赋值
        app.queryInfo.deptId = info.deptId;
      }

      app.deptInfo.visible = false;
    },
    // 查询部门的部分
    queryDept() {
      ajax('/manage/dept/queryAll', app.deptInfo.page, function (data) {
        if (data.success) {
          app.deptInfo.page = data.page;
          app.deptInfo.list = data.list;
          app.deptInfo.visible = true;
        } else {
          alert(data.message);
        }
      });
    },
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

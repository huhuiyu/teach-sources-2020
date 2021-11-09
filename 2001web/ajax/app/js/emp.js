let deptList = []; // 部门列表
let list = []; // 员工列表
let page = {}; // 分页信息
let queryInfo = {}; // 查询条件！！！！！

// 查询员工信息
function query() {
  ajax(
    '/manange/employee/query',
    {
      page: page,
      tbEmployee: queryInfo
    },
    function (data) {
      console.log('员工信息：', data);
    }
  );
}

query();

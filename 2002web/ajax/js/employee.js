// 查询过滤条件
let queryInfo = {};
// 分页参数
let page = {
  pageNumber: 1,
  pageSize: 5
};

// 查询结果记录
let deptList = [];
let list = [];

// 查询数据
function query() {
  ajaxRequest(
    '/manange/employee/query',
    {
      page: page,
      tbEmployee: queryInfo
    },
    function (data) {
      console.log('员工的信息：', data);
      // 服务器应答错误就显示原因，不要获取数据
      if (!data.success) {
        alert(data.message);
        return;
      }
      // 成功就记录并显示结果
      deptList = data.resultData.deptList;
      list = data.resultData.list;
      page = data.resultData.page;
      // 显示信息表格
      showEmpInfo();
    }
  );
}

query();

// 显示员工列表
let tbData = document.getElementById('tbData');
function showEmpInfo() {
  tbData.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let emp = list[i];
    let tr = document.createElement('tr');
    // 所属部门
    let td = document.createElement('td');
    td.append(emp.deptId);
    tr.append(td);
    // 姓名
    td = document.createElement('td');
    td.append(emp.employeeName);
    tr.append(td);
    // 电话
    td = document.createElement('td');
    td.append(emp.phone);
    tr.append(td);
    // 修改时间
    td = document.createElement('td');
    td.append(formatTimestamp(emp.lastupdate));
    tr.append(td);

    tbData.append(tr);
  }
}

// 两个星期之内完成，上课会展示
// 仿造上课的部门员工管理，完成班级和学生的信息管理
// 附件条件：需要美化界面效果
// 最晚11.14号上交

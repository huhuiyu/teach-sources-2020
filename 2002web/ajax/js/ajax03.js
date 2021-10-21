// 用echo测试ajax封装的代码
ajaxRequest('/', { echo: '黑暗骑士' }, function (data) {
  console.log('应答结果：', data);
});

// 部门信息查询
let selDept = document.getElementById('selDept');

function queryDept() {
  selDept.innerHTML = '';
  ajaxRequest('/linkinfo/queryAllDept', {}, function (data) {
    console.log('部门信息', data);
    let list = data.resultData.list;
    for (let i = 0; i < list.length; i++) {
      let d = list[i];
      let op = document.createElement('option');
      op.setAttribute('value', d.deptId);
      op.append(d.deptName);
      // 部门的描述放在option的提示信息中
      op.setAttribute('title', d.deptInfo);
      selDept.appendChild(op);
    }
    // 默认选择第一个
    selDept.selectedIndex = 0;
    queryEmployee();
  });
}

queryDept();

// 联动查询部门对应的员工
function queryEmployee() {
  let deptId = selDept.value;
  ajaxRequest(
    '/linkinfo/queryEmployeeByDept',
    {
      'tbEmployee.deptId': deptId
    },
    function (data) {
      console.log('员工信息', data);
      let list = data.resultData.list;
      showEmployee(list);
    }
  );
}
// 部门变化引发员工的查询
selDept.addEventListener('change', queryEmployee);

let tbEmployee = document.getElementById('tbEmployee');
// 显示员工信息到table中
function showEmployee(list) {
  tbEmployee.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let emp = list[i];
    let tr = document.createElement('tr');
    // 编号
    let td = document.createElement('td');
    td.append(emp.employeeId);
    tr.appendChild(td);
    // 姓名
    td = document.createElement('td');
    td.append(emp.employeeName);
    tr.appendChild(td);
    // 电话
    td = document.createElement('td');
    td.append(emp.phone);
    tr.appendChild(td);
    // 信息修改时间
    td = document.createElement('td');
    td.append( formatTimestamp(emp.lastupdate) );
    tr.appendChild(td);

    tbEmployee.appendChild(tr);
  }
}

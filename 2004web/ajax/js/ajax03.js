// 测试封装的ajax请求
ajaxRequest('/', { echo: '黑暗骑士' }, function (data) {
  console.log('测试结果：', data);
});

let selDept = document.getElementById('selDept');
// 部门信息查询
function queryDept() {
  selDept.innerHTML = '';
  ajaxRequest('/linkinfo/queryAllDept', {}, function (data) {
    console.log('部门信息', data);
    // 显示部门信息
    let list = data.resultData.list;
    for (let i = 0; i < list.length; i++) {
      let dept = list[i];
      console.log(dept);
      let op = document.createElement('option');
      op.append(dept.deptName);
      op.setAttribute('value', dept.deptId);
      // 添加描述信息显示
      op.setAttribute('title', dept.deptInfo);

      selDept.appendChild(op);
    }
    // 默认选择的部门和员工
    selDept.selectedIndex = 0;
    queryEmployee();
  });
}

queryDept();

// 员工信息部分
let tbEmployee = document.getElementById('tbEmployee');

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

// 联动查询
selDept.addEventListener('change', queryEmployee);

// 显示员工信息
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
    // 信息最后修改时间
    td = document.createElement('td');
    td.append(formatTimestamp(emp.lastupdate));
    tr.appendChild(td);

    tbEmployee.append(tr);
  }
}

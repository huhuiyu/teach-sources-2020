// 测试ajax封装是否正确
ajaxRequest('/', { echo: '黑暗骑士' }, function (data) {
  console.log('测试的结果', data);
});

let selDept = document.getElementById('selDept');
// 部门信息查询
function queryDept() {
  ajaxRequest('/linkinfo/queryAllDept', {}, function (data) {
    console.log('部门信息：', data);
    // 部门列表显示
    let list = data.resultData.list;
    for (let i = 0; i < list.length; i++) {
      let d = list[i];
      let op = document.createElement('option');
      op.setAttribute('value', d.deptId);
      op.append(d.deptName);
      op.setAttribute('title', d.deptInfo);
      selDept.appendChild(op);
    }
    // 默认选中第一个
    selDept.selectedIndex = 0;
    queryEmployee();
  });
}

queryDept();

// 查询员工信息
let tbData = document.getElementById('tbData');

function queryEmployee() {
  // 获取选中的部门编号
  let deptId = selDept.value;
  // 查询部门里面的员工
  ajaxRequest(
    '/linkinfo/queryEmployeeByDept',
    {
      'tbEmployee.deptId': deptId
    },
    function (data) {
      console.log('员工信息', data);
      let list = data.resultData.list;
      tbData.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        let emp = list[i];
        let tr = document.createElement('tr');
        // 编号
        let td = document.createElement('td');
        td.append(emp.employeeId);
        tr.append(td);
        // 姓名
        td = document.createElement('td');
        td.append(emp.employeeName);
        tr.append(td);
        // 电话
        td = document.createElement('td');
        td.append(emp.phone);
        tr.append(td);
        // 信息修改时间（后端返回的都是时间戳，需要处理）
        td = document.createElement('td');
        td.append(formatDate(emp.lastupdate));
        tr.append(td);

        tbData.appendChild(tr);
      }
    }
  );
}

selDept.addEventListener('change', queryEmployee);

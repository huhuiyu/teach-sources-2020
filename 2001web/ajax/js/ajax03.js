// 测试ajax封装
ajax('/', { echo: '黑暗骑士' }, function (data) {
  console.log('测试的数据：', data);
});

let selDept = document.getElementById('selDept');

// 查询部门信息
function queryDept() {
  ajax('/linkinfo/queryAllDept', {}, function (data) {
    // 部门信息
    console.log('部门信息：', data);
    // success表示是否正确应答
    if (!data.success) {
      alert(data.message);
      return;
    }
    // 只有正确才会获取到数据
    let list = data.resultData.list;
    for (let i = 0; i < list.length; i++) {
      let d = list[i];
      let op = document.createElement('option');
      op.setAttribute('value', d.deptId);
      op.append(d.deptName);
      selDept.appendChild(op);
    }
    selDept.selectedIndex = 0;
    // 立即查询员工
    queryEmployee();
  });
}

queryDept();

// 联动查询员工信息
function queryEmployee() {
  // 需要部门编号
  let deptId = selDept.value;
  ajax(
    '/linkinfo/queryEmployeeByDept',
    {
      'tbEmployee.deptId': deptId
    },
    function (data) {
      console.log('员工信息', data);
    }
  );
}

selDept.addEventListener('change', queryEmployee);

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
  });
}

queryDept();

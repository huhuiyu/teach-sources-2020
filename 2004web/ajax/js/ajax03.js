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
      selDept.appendChild(op);
      
    }
  });
}

queryDept();

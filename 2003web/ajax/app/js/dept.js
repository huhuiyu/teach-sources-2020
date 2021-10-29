let tbData = document.getElementById('tbData');

let list = [];
let page = {};
// 查询部门信息
function queryDept() {
  ajaxRequest('/manange/dept/query', {}, function (data) {
    console.log('部门信息', data);
    // 成功获取就记录数据
    if (data.success) {
      list = data.resultData.list;
      page = data.resultData.page;
      showDeptList();
    } else {
      alert(data.message);
    }
  });
}

// 显示部门
function showDeptList() {
  tbData.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let dept = list[i];
    let tr = document.createElement('tr');
    // 编号
    let td = document.createElement('td');
    td.append(dept.deptId);
    tr.append(td);
    // 名称
    td = document.createElement('td');
    td.append(dept.deptName);
    tr.append(td);
    // 描述
    td = document.createElement('td');
    td.append(dept.deptInfo);
    tr.append(td);
    // 时间
    td = document.createElement('td');
    td.append(formatDate(dept.lastupdate));
    tr.append(td);

    tbData.append(tr);
  }
}

queryDept();

let tbData = document.getElementById('tbData');

// 服务器查询结果有两个重要信息
let list = []; //一个是部门的列表
let page = {}; //一个分页的信息

// 查询部门信息
function queryDept() {
  ajax('/manange/dept/query', {}, function (data) {
    console.log('部门信息：', data);
    if (data.success) {
      // 成功就获取数据并显示
      list = data.resultData.list;
      page = data.resultData.page;
      showDeptList();
    } else {
      // 失败就显示原因
      alert(data.message);
    }
  });
}

// 显示部门信息
function showDeptList() {
  tbData.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let dept = list[i];
    let tr = document.createElement('tr');
    // 编号
    let td = document.createElement('td');
    td.append(dept.deptId);
    tr.append(td);
    // 部门名称
    td = document.createElement('td');
    td.append(dept.deptName);
    tr.append(td);
    // 部门描述
    td = document.createElement('td');
    td.append(dept.deptInfo);
    tr.append(td);
    // 部门描述
    td = document.createElement('td');
    td.append(formatTimestamp(dept.lastupdate));
    tr.append(td);

    tbData.append(tr);
  }
}

queryDept();

// 添加部门信息的部分 ==========================
let txtName = document.getElementById('txtName');
let txtInfo = document.getElementById('txtInfo');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');

btnReset.addEventListener('click', function () {
  txtName.value = '';
  txtInfo.value = '';
  txtName.focus();
});

btnAdd.addEventListener('click', function () {
  // 按照服务端的格式收集数据
  let tbDept = {
    deptName: txtName.value,
    deptInfo: txtInfo.value
  };
  // 添加部门
  ajax(
    '/manange/dept/add',
    {
      tbDept: tbDept
    },
    function (data) {
      alert(data.message);
      // 添加后要重新查询
      queryDept();
    }
  );
});

let txtDeptName = document.getElementById('txtDeptName');
let txtDeptInfo = document.getElementById('txtDeptInfo');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');
let divInfo = document.getElementById('divInfo');

// 添加部门信息
function add() {
  // 数据收集
  let tbDept = {
    deptName: '',
    deptInfo: ''
  };
  tbDept.deptName = txtDeptName.value;
  tbDept.deptInfo = txtDeptInfo.value;
  // 发送请求
  ajaxRequest(
    '/manange/dept/add',
    {
      tbDept: tbDept
    },
    function (data) {
      divInfo.innerHTML = data.message;
    }
  );
}

btnAdd.addEventListener('click', add);

// 查询的部分
let tbData = document.getElementById('tbData');
function query() {
  ajaxRequest('/manange/dept/query', {}, function (data) {
    console.log('查询的结果', data);
    // 数据除了数组还有分页的信息，也就是数据不会全部返回！！
    if (data.success) {
      let list = data.resultData.list;
      let page = data.resultData.page;
      console.log('部门列表和分页信息', list, page);
      showInfo(list);
    } else {
      divInfo.innerHTML = data.message;
    }
  });
}

query();

function showInfo(list) {
  tbData.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let d = list[i];
    let tr = document.createElement('tr');
    // 编号
    let td = document.createElement('td');
    td.append(d.deptId);
    tr.appendChild(td);
    // 名称
    td = document.createElement('td');
    td.append(d.deptName);
    tr.appendChild(td);
    // 描述
    td = document.createElement('td')
    td.append(d.deptInfo);
    tr.appendChild(td);
    // 修改时间
    td = document.createElement('td')
    td.append(formatTimestamp(d.lastupdate));
    tr.appendChild(td);

    tbData.appendChild(tr);
  }
}

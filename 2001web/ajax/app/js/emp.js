let deptList = []; // 部门列表
let list = []; // 员工列表
let page = { pageNumber: 1, pageSize: 5 }; // 分页信息
let queryInfo = {}; // 查询条件！！！！！

// 查询员工信息
function query() {
  // 处理查询的参数
  queryInfo = {
    deptId: selQDept.value,
    employeeName: txtQName.value,
    phone: txtQPhone.value
  };

  ajax(
    '/manange/employee/query',
    {
      page: page,
      tbEmployee: queryInfo
    },
    function (data) {
      console.log('员工信息：', data);
      // 没有数据的情况就不要处理数据
      if (!data.success) {
        alert(data.message);
        return;
      }
      // 获取数据
      page = data.resultData.page;
      list = data.resultData.list;
      deptList = data.resultData.deptList;
      // 显示数据
      showData();
      showPageInfo();
      showDeptList();
    }
  );
}

// 显示数据的部分
let tbData = document.getElementById('tbData');
function showData() {
  tbData.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let emp = list[i];
    let tr = document.createElement('tr');
    // 所属部门
    let td = document.createElement('td');
    td.append(getDeptName(emp.deptId));
    tr.append(td);
    // 姓名
    td = document.createElement('td');
    td.append(emp.employeeName);
    tr.append(td);
    // 电话
    td = document.createElement('td');
    td.append(emp.phone);
    tr.append(td);
    // 信息修改时间
    td = document.createElement('td');
    td.append(formatTimestamp(emp.lastupdate));
    tr.append(td);
    // 操作的部分
    td = document.createElement('td');
    // 修改按钮
    let btnShowModify = document.createElement('button');
    btnShowModify.append('修改');
    td.append(btnShowModify);
    btnShowModify.addEventListener('click', function () {
      showModify(emp);
    });
    tr.append(td);
    // 删除按钮
    let btnDel = document.createElement('button');
    btnDel.append('删除');
    td.append(btnDel);
    btnDel.addEventListener('click', function () {
      del(emp);
    });

    tbData.append(tr);
  }
}

// 换算部门编号成部门名称的方法
function getDeptName(deptId) {
  // 遍历所有的部门，比对编号是否相等
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    if (dept.deptId == deptId) {
      return dept.deptName;
    }
  }
  return '无部门信息';
}

let spPre = document.getElementById('spPre');
let spPageInfo = document.getElementById('spPageInfo');
let spNext = document.getElementById('spNext');

// 显示分页信息
function showPageInfo() {
  spPageInfo.innerHTML =
    '当前页/总页数/记录数：' +
    page.pageNumber +
    '/' +
    page.pageCount +
    '/' +
    page.total;
}

// 下一页
spNext.addEventListener('click', function () {
  page.pageNumber++;
  if (page.pageNumber > page.pageCount) {
    page.pageNumber = page.pageCount;
    return;
  }
  query();
});

// 上一页
spPre.addEventListener('click', function () {
  page.pageNumber--;
  if (page.pageNumber < 1) {
    page.pageNumber = 1;
    return;
  }
  query();
});

// 查询参数处理部分
let selQDept = document.getElementById('selQDept');
let txtQName = document.getElementById('txtQName');
let txtQPhone = document.getElementById('txtQPhone');
let btnQuery = document.getElementById('btnQuery');
let btnReset = document.getElementById('btnReset');
let btnShowAdd = document.getElementById('btnShowAdd');

btnQuery.addEventListener('click', query);

btnReset.addEventListener('click', function () {
  selQDept.value = -1;
  txtQPhone.value = '';
  txtQName.value = '';
  queryInfo = {};
  query();
});

// 添加信息的部分
let divDialog = document.getElementById('divDialog');
let selDept = document.getElementById('selDept');
let txtName = document.getElementById('txtName');
let txtPhone = document.getElementById('txtPhone');
let btnAdd = document.getElementById('btnAdd');
let btnClose = document.getElementById('btnClose');

btnShowAdd.addEventListener('click', function () {
  divDialog.style.display = 'flex';
});

btnClose.addEventListener('click', function () {
  divDialog.style.display = 'none';
  query();
});

btnAdd.addEventListener('click', function () {
  let tbEmployee = {
    deptId: selDept.value,
    employeeName: txtName.value,
    phone: txtPhone.value
  };
  ajax(
    '/manange/employee/add',
    {
      tbEmployee: tbEmployee
    },
    function (data) {
      alert(data.message);
      if (data.success) {
        txtName.value = '';
        txtPhone.value = '';
      }
    }
  );
});

// 修改的部分
let modifyInfo;
let divMDialog = document.getElementById('divMDialog');
let selMDept = document.getElementById('selMDept');
let txtMName = document.getElementById('txtMName');
let txtMPhone = document.getElementById('txtMPhone');
let btnModify = document.getElementById('btnModify');
let btnMClose = document.getElementById('btnMClose');

function showModify(info) {
  modifyInfo = info;
  selMDept.value = info.deptId;
  txtMName.value = info.employeeName;
  txtMPhone.value = info.phone;
  divMDialog.style.display = 'flex';
}

btnMClose.addEventListener('click', function () {
  divMDialog.style.display = 'none';
  query();
});

btnModify.addEventListener('click', function () {
  modifyInfo.deptId = selMDept.value;
  modifyInfo.employeeName = txtMName.value;
  modifyInfo.phone = txtMPhone.value;
  ajax(
    '/manange/employee/update',
    {
      tbEmployee: modifyInfo
    },
    function (data) {
      alert(data.message);
    }
  );
});

// 显示部门信息
function showDeptList() {
  selQDept.innerHTML = '';
  // 查询的要有请选择的选项，表示不区分部门
  let sd = document.createElement('option');
  sd.append('====请选择部门====');
  sd.setAttribute('value', -1);
  selQDept.append(sd);
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let op = document.createElement('option');
    op.append(dept.deptName);
    op.setAttribute('value', dept.deptId);
    selQDept.append(op);
  }
  // 要记住用户选中的部门值
  if (queryInfo.deptId) {
    selQDept.value = queryInfo.deptId;
  }
  // 添加的部门列表
  selDept.innerHTML = '';
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let op = document.createElement('option');
    op.setAttribute('value', dept.deptId);
    op.append(dept.deptName);
    selDept.append(op);
  }

  // 修改的部门列表
  selMDept.innerHTML = '';
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let op = document.createElement('option');
    op.setAttribute('value', dept.deptId);
    op.append(dept.deptName);
    selMDept.append(op);
  }
}

// 删除员工信息
function del(info) {
  if (confirm('是否删除：' + info.employeeName)) {
    ajax(
      '/manange/employee/delete',
      {
        'tbEmployee.employeeId': info.employeeId
      },
      function (data) {
        alert(data.message);
        query();
      }
    );
  }
}

query();

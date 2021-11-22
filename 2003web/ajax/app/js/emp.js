// 查询的分页参数
let page = {
  pageNumber: 1,
  pageSize: 5
};
// 查询的过滤条件参数
let queryInfo = {};
// 员工的数组
let list = [];
// 部门的数组
let deptList = [];

let selQDept = document.getElementById('selQDept');
let txtQName = document.getElementById('txtQName');
let txtQPhone = document.getElementById('txtQPhone');
let btnQuery = document.getElementById('btnQuery');
let btnReset = document.getElementById('btnReset');
let btnShowAdd = document.getElementById('btnShowAdd');

// 添加的部分
let divDialog = document.getElementById('divDialog');
let selDept = document.getElementById('selDept');
let txtName = document.getElementById('txtName');
let txtPhone = document.getElementById('txtPhone');
let btnAddInfo = document.getElementById('btnAddInfo');
let btnClose = document.getElementById('btnClose');

btnShowAdd.addEventListener('click', function () {
  divDialog.style.display = 'flex';
});

btnClose.addEventListener('click', function () {
  divDialog.style.display = 'none';
  query();
});

btnAddInfo.addEventListener('click', function () {
  let tbEmployee = {
    deptId: selDept.value,
    employeeName: txtName.value,
    phone: txtPhone.value
  };
  ajaxRequest(
    '/manange/employee/add',
    {
      tbEmployee: tbEmployee
    },
    function (data) {
      alert(data.message);
    }
  );
});

// 显示部门的列表
function showDeptInfo() {
  // 查询参数的部门列表
  // 查询需要一个假的部门信息作为查询全部部门的标志
  selQDept.innerHTML = '';
  let dinfo = document.createElement('option');
  dinfo.setAttribute('value', -1);
  dinfo.append('===请选择部门===');
  selQDept.append(dinfo);

  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let op = document.createElement('option');
    op.setAttribute('value', dept.deptId);
    op.append(dept.deptName);
    selQDept.append(op);
  }
  // 记住上一次选中的部门值
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

btnQuery.addEventListener('click', query);

btnReset.addEventListener('click', function () {
  queryInfo = { deptId: -1 };
  selQDept.value = -1;
  txtQName.value = '';
  txtQPhone.value = '';
  query();
});

function query() {
  // 获取查询参数
  queryInfo = {
    deptId: selQDept.value,
    employeeName: txtQName.value,
    phone: txtQPhone.value
  };

  ajaxRequest(
    '/manange/employee/query',
    {
      page: page,
      tbEmployee: queryInfo
    },
    function (data) {
      console.log('员工的信息', data);
      // 如果服务器返回失败，就不用处理数据,直接显示错误原因
      if (!data.success) {
        alert(data.message);
        return;
      }
      // 处理服务器数据
      page = data.resultData.page;
      list = data.resultData.list;
      deptList = data.resultData.deptList;
      // 显示数据
      showInfo();
      showPageInfo();
      showDeptInfo();
    }
  );
}

// 显示的部分
let tbData = document.getElementById('tbData');
function showInfo() {
  // 显示员工列表
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
    // 最后修改时间
    td = document.createElement('td');
    td.append(formatDate(emp.lastupdate));
    tr.append(td);
    // 操作按钮
    td = document.createElement('td');
    // 修改按钮
    let btnModify = document.createElement('button');
    btnModify.append('修改');
    td.append(btnModify);
    btnModify.addEventListener('click', function () {
      showModify(emp);
    });
    // 删除按钮
    let btnDel = document.createElement('button');
    btnDel.append('删除');
    td.append(btnDel);
    btnDel.addEventListener('click', function () {
      del(emp);
    });

    tr.append(td);

    tbData.append(tr);
  }
}

// 处理部门编号转换成对应的部门名称的方法
function getDeptName(deptId) {
  // 最简单的方式，就是逐项查找匹配值
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    // 相等就是找到了
    if (deptId == dept.deptId) {
      return dept.deptName;
    }
  }
  return '无对应的部门';
}

// 分页相关
let spPre = document.getElementById('spPre');
let spPage = document.getElementById('spPage');
let spNext = document.getElementById('spNext');

function showPageInfo() {
  // 显示分页信息
  spPage.innerHTML =
    '当前页/总页数/记录数：' +
    page.pageNumber +
    '/' +
    page.pageCount +
    '/' +
    page.total;
}

// 下一页
spNext.addEventListener('click', function () {
  page.pageNumber = page.pageNumber + 1;
  // 不能超过总页数
  if (page.pageNumber > page.pageCount) {
    page.pageNumber = page.pageCount;
    return;
  }
  query();
});

// 上一页
spPre.addEventListener('click', function () {
  page.pageNumber--;
  // 页码不能小于1
  if (page.pageNumber < 1) {
    page.pageNumber = 1;
    return;
  }
  query();
});

// 修改的部分
let divMDialog = document.getElementById('divMDialog');
let selMDept = document.getElementById('selMDept');
let txtMName = document.getElementById('txtMName');
let txtMPhone = document.getElementById('txtMPhone');
let btnModifyInfo = document.getElementById('btnModifyInfo');
let btnMClose = document.getElementById('btnMClose');
let modifyInfo; // 记住要修改的值

function showModify(info) {
  modifyInfo = info;
  console.log('被修改信息：', modifyInfo);
  // 显示修改值
  selMDept.value = modifyInfo.deptId;
  txtMName.value = modifyInfo.employeeName;
  txtMPhone.value = modifyInfo.phone;
  // 显示对话框
  divMDialog.style.display = 'flex';
}

btnMClose.addEventListener('click', function () {
  divMDialog.style.display = 'none';
  query();
});

btnModifyInfo.addEventListener('click', function () {
  modifyInfo.deptId = selMDept.value;
  modifyInfo.employeeName = txtMName.value;
  modifyInfo.phone = txtMPhone.value;
  // 提交数据
  ajaxRequest(
    '/manange/employee/update',
    {
      tbEmployee: modifyInfo
    },
    function (data) {
      alert(data.message);
    }
  );
});

// 删除的功能！！！！
function del(info) {
  if (confirm('是否删除：' + info.employeeName)) {
    ajaxRequest(
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

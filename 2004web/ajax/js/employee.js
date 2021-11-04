let waitDialog = document.getElementById('waitDialog');

let deptList = []; //部门列表
let list = []; // 员工列表
let page = { pageNumber: 1, pageSize: 5 }; // 分页信息
let queryInfo = {}; //查询条件

// 查询员工信息
function query() {
  // 显示等待对话框
  waitDialog.style.display = 'flex';
  ajaxRequest(
    '/manange/employee/query',
    {
      page: page,
      tbEmployee: queryInfo
    },
    function (data) {
      // 请求回来后要关闭等待对话框
      waitDialog.style.display = 'none';
      if (data.success) {
        deptList = data.resultData.deptList;
        list = data.resultData.list;
        page = data.resultData.page;
        // 显示列表
        showEmpInfo();
        // 显示部门下拉列表
        showDeptList();
      } else {
        alert(data.message);
      }
    }
  );
}

query();

let tbData = document.getElementById('tbData');

function showEmpInfo() {
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
    // 修改时间
    td = document.createElement('td');
    td.append(formatTimestamp(emp.lastupdate));
    tr.append(td);

    tbData.append(tr);
  }
}

// 添加员工的部分
let btnAdd = document.getElementById('btnAdd');
let divAddDiglog = document.getElementById('divAddDiglog');
let selDept = document.getElementById('selDept');
let txtName = document.getElementById('txtName');
let txtPhone = document.getElementById('txtPhone');
let btnAddEmp = document.getElementById('btnAddEmp');
let btnCloseAdd = document.getElementById('btnCloseAdd');

btnAdd.addEventListener('click', function () {
  divAddDiglog.style.display = 'flex';
});

btnCloseAdd.addEventListener('click', function () {
  divAddDiglog.style.display = 'none';
  query();
});

btnAddEmp.addEventListener('click', function () {
  let addinfo = {
    deptId: selDept.value,
    employeeName: txtName.value,
    phone: txtPhone.value
  };
  ajaxRequest(
    '/manange/employee/add',
    {
      tbEmployee: addinfo
    },
    function (data) {
      if (data.success) {
        txtPhone.value = '';
        txtName.value = '';
      }
      alert(data.message);
    }
  );
});

// 显示部门列表
function showDeptList() {
  selDept.innerHTML = '';
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let op = document.createElement('option');
    // 值是编号！！！
    op.setAttribute('value', dept.deptId);
    op.append(dept.deptName);
    selDept.append(op);
  }
}

// 转换部门编号成名称
function getDeptName(deptId) {
  // 查找算法
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    // id匹配就返回名称
    if (dept.deptId == deptId) {
      return dept.deptName;
    }
  }

  return '部门不存在';
}

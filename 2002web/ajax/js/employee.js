// 查询过滤条件
let queryInfo = {};
// 分页参数
let page = {
  pageNumber: 1,
  pageSize: 5
};

// 查询结果记录
let deptList = [];
let list = [];

// 查询的表单
let selQDept = document.getElementById('selQDept');
let txtQName = document.getElementById('txtQName');
let txtQPhone = document.getElementById('txtQPhone');
let btnQuery = document.getElementById('btnQuery');
let btnReset = document.getElementById('btnReset');

btnQuery.addEventListener('click', query);

btnReset.addEventListener('click', function () {
  // 查询条件重置
  queryInfo = {};
  page.pageNumber = 1;
  // 表单重置
  selQDept.value = -1;
  txtQName.value = '';
  txtQPhone.value = '';
  // 数据重查
  query();
});

// 查询数据
function query() {
  // 处理参数
  queryInfo.deptId = selQDept.value;
  queryInfo.employeeName = txtQName.value;
  queryInfo.phone = txtQPhone.value;

  ajaxRequest(
    '/manange/employee/query',
    {
      page: page,
      tbEmployee: queryInfo
    },
    function (data) {
      console.log('员工的信息：', data);
      // 服务器应答错误就显示原因，不要获取数据
      if (!data.success) {
        alert(data.message);
        return;
      }
      // 成功就记录并显示结果
      deptList = data.resultData.deptList;
      list = data.resultData.list;
      page = data.resultData.page;
      // 显示信息表格
      showEmpInfo();
      // 显示分页信息
      showPageInfo();
      // 初始化部门列表
      showDept();
    }
  );
}

query();

// 显示员工列表
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
    // 功能
    td = document.createElement('td');
    // 修改功能
    let btnModify = document.createElement('button');
    btnModify.append('修改');
    td.append(btnModify);
    btnModify.addEventListener('click', function () {
      showModify(emp);
    });
    // 删除功能
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

// 删除的部分
function del(info) {
  if (confirm('是否删除:' + info.employeeName)) {
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

// 修改的部分
let modifyInfo = {};
let divModifyDialog = document.getElementById('divModifyDialog');
let selMDept = document.getElementById('selMDept');
let txtMName = document.getElementById('txtMName');
let txtMPhone = document.getElementById('txtMPhone');
let btnSaveModify = document.getElementById('btnSaveModify');
let btnCloseModify = document.getElementById('btnCloseModify');

function showModify(info) {
  modifyInfo = info;
  console.log('要修改的信息：', modifyInfo);
  // 显示修改值
  selMDept.value = modifyInfo.deptId;
  txtMName.value = modifyInfo.employeeName;
  txtMPhone.value = modifyInfo.phone;
  // 显示对话框
  divModifyDialog.style.display = 'flex';
}

btnCloseModify.addEventListener('click', function () {
  divModifyDialog.style.display = 'none';
  query();
});

btnSaveModify.addEventListener('click', function () {
  // 获取修改的值
  modifyInfo.deptId = selMDept.value;
  modifyInfo.employeeName = txtMName.value;
  modifyInfo.phone = txtMPhone.value;
  // 保存修改
  ajaxRequest(
    '/manange/employee/update',
    {
      tbEmployee: modifyInfo
    },
    function (data) {
      alert(data.message);
      if (data.success) {
        // 成功就关闭对话框
        btnCloseModify.click();
      }
    }
  );
});

// 显示部门列表
function showDept() {
  // 查询的部门
  selQDept.innerHTML = '';
  // 伪造一个请选择的部门
  let mop = document.createElement('option');
  mop.append('请选择部门');
  //值是不存在的，方便服务器端判定
  mop.setAttribute('value', -1);
  selQDept.append(mop);

  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let op = document.createElement('option');
    op.append(dept.deptName);
    op.setAttribute('value', dept.deptId);
    selQDept.append(op);
  }
  // 如果有部门查询条件就要选中
  if (queryInfo.deptId) {
    selQDept.value = queryInfo.deptId;
  }

  // 添加的部门
  selDept.innerHTML = '';

  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let op = document.createElement('option');
    op.append(dept.deptName);
    op.setAttribute('value', dept.deptId);
    selDept.append(op);
  }

  // 修改的部门
  selMDept.innerHTML = '';

  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let op = document.createElement('option');
    op.append(dept.deptName);
    op.setAttribute('value', dept.deptId);
    selMDept.append(op);
  }
}

// 换算部门的编号为部门名称
function getDeptName(id) {
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    // 比对传入的id是否匹配
    if (id == dept.deptId) {
      return dept.deptName;
    }
  }
  return '部门未知';
}

// 分页的部分
let spPre = document.getElementById('spPre');
let spPage = document.getElementById('spPage');
let spNext = document.getElementById('spNext');

function showPageInfo() {
  spPage.innerHTML =
    '当前页/总页数/记录数：' +
    page.pageNumber +
    '/' +
    page.pageCount +
    '/' +
    page.total;
}

// 下一页功能
spNext.addEventListener('click', function () {
  page.pageNumber = page.pageNumber + 1;
  // 不要超过总页数
  if (page.pageNumber > page.pageCount) {
    page.pageNumber = page.pageCount;
    return;
  }
  // 更改页码要重新查询
  query();
});

// 上一页
spPre.addEventListener('click', function () {
  page.pageNumber = page.pageNumber - 1;
  if (page.pageNumber < 1) {
    page.pageNumber = 1;
    return;
  }
  query();
});

// 添加相关
let btnAdd = document.getElementById('btnAdd');
let divAddDialog = document.getElementById('divAddDialog');
let txtName = document.getElementById('txtName');
let txtPhone = document.getElementById('txtPhone');
let btnAddInfo = document.getElementById('btnAddInfo');
let btnCloseAdd = document.getElementById('btnCloseAdd');
let selDept = document.getElementById('selDept');

btnAdd.addEventListener('click', function () {
  divAddDialog.style.display = 'flex';
});

btnCloseAdd.addEventListener('click', function () {
  divAddDialog.style.display = 'none';
  query();
});

btnAddInfo.addEventListener('click', function () {
  // 收集信息
  let info = {
    deptId: selDept.value,
    employeeName: txtName.value,
    phone: txtPhone.value
  };
  // 添加信息
  ajaxRequest(
    '/manange/employee/add',
    {
      tbEmployee: info
    },
    function (data) {
      alert(data.message);
    }
  );
});

// 两个星期之内完成，上课会展示
// 仿造上课的部门员工管理，完成班级和学生的信息管理
// 附件条件：需要美化界面效果
// 最晚11.14号上交

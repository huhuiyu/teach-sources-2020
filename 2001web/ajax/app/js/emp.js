let deptList = []; // 部门列表
let list = []; // 员工列表
let page = { pageNumber: 1, pageSize: 5 }; // 分页信息
let queryInfo = {}; // 查询条件！！！！！

// 查询员工信息
function query() {
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
}

query();

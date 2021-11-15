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

function query() {
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

query();

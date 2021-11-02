let tbData = document.getElementById('tbData');

let list = [];
let page = {
  pageNumber: 1,
  pageSize: 5
};

// 查询部门信息
function queryDept() {
  ajaxRequest(
    '/manange/dept/query',
    {
      page: page
    },
    function (data) {
      console.log('部门信息', data);
      // 成功获取就记录数据
      if (data.success) {
        list = data.resultData.list;
        page = data.resultData.page;
        showDeptList();
        showPageInfo();
      } else {
        alert(data.message);
      }
    }
  );
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
  // 添加的功能
  let tbDept = {
    deptName: txtName.value,
    deptInfo: txtInfo.value
  };
  ajaxRequest(
    '/manange/dept/add',
    {
      tbDept: tbDept
    },
    function (data) {
      alert(data.message);
      // 添加部门后要重新查询
      queryDept();
    }
  );
});

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
  queryDept();
});

// 上一页
spPre.addEventListener('click', function () {
  page.pageNumber--;
  // 页码不能小于1
  if (page.pageNumber < 1) {
    page.pageNumber = 1;
    return;
  }
  queryDept();
});

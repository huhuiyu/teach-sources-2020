let txtDeptName = document.getElementById('txtDeptName');
let txtDeptInfo = document.getElementById('txtDeptInfo');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');

// 添加部门的部分
btnReset.addEventListener('click', function () {
  // 重置表单
  txtDeptName.value = '';
  txtDeptInfo.value = '';
  txtDeptName.focus();
});

btnAdd.addEventListener('click', function () {
  // 添加部门（名称和格式看后端文档）
  let tbDept = {
    deptName: '',
    deptInfo: ''
  };
  tbDept.deptName = txtDeptName.value;
  tbDept.deptInfo = txtDeptInfo.value;
  ajaxRequest(
    '/manange/dept/add',
    {
      tbDept: tbDept
    },
    function (data) {
      alert(data.message);
      // 添加完成后重新查询
      query();
    }
  );
});

// 数据显示部分
let tdData = document.getElementById('tdData');

let deptList = [];
// 分页信息处理
let page = {
  // 当前页面
  pageNumber: 1,
  // 分页大小
  pageSize: 5
};

function query() {
  // 查询部门
  ajaxRequest(
    '/manange/dept/query',
    {
      page: page
    },
    function (data) {
      console.log('部门信息：', data);
      deptList = data.resultData.list;
      page = data.resultData.page;
      showDeptList();
      showPageInfo();
    }
  );
}

function showDeptList() {
  // 显示部门列表
  tdData.innerHTML = '';
  for (let i = 0; i < deptList.length; i++) {
    let dept = deptList[i];
    let tr = document.createElement('tr');
    // 编号
    let td = document.createElement('td');
    td.append(dept.deptId);
    tr.appendChild(td);
    // 名称
    td = document.createElement('td');
    td.append(dept.deptName);
    tr.append(td);
    // 描述
    td = document.createElement('td');
    td.append(dept.deptInfo);
    tr.appendChild(td);
    // 信息最后修改时间（服务器返回的时间戳）
    td = document.createElement('td');
    td.append(formatTimestamp(dept.lastupdate));
    tr.appendChild(td);

    tdData.appendChild(tr);
  }
}

query();

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

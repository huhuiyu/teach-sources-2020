let txtDeptName = document.getElementById('txtDeptName');
let txtDeptInfo = document.getElementById('txtDeptInfo');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');
let divInfo = document.getElementById('divInfo');

// 重置按钮
btnReset.addEventListener('click', function () {
  txtDeptName.value = '';
  txtDeptInfo.value = '';
  txtDeptName.focus();
});

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
      // btnReset.click();
      query();
    }
  );
}

btnAdd.addEventListener('click', add);

// 查询的部分
let tbData = document.getElementById('tbData');
let page = {
  // 当前页码
  pageNumber: 1,
  // 分页大小
  pageSize: 10
};
function query() {
  ajaxRequest(
    '/manange/dept/query',
    {
      page: page
    },
    function (data) {
      console.log('查询的结果', data);
      // 数据除了数组还有分页的信息，也就是数据不会全部返回！！
      if (data.success) {
        let list = data.resultData.list;
        // 分页信息以服务器返回的为准
        page = data.resultData.page;
        console.log('部门列表和分页信息', list, page);
        showInfo(list);
        showPageInfo();
      } else {
        divInfo.innerHTML = data.message;
      }
    }
  );
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
    td = document.createElement('td');
    td.append(d.deptInfo);
    tr.appendChild(td);
    // 修改时间
    td = document.createElement('td');
    td.append(formatTimestamp(d.lastupdate));
    tr.appendChild(td);
    // 操作相关
    // 删除按钮
    td = document.createElement('td');
    let btnDel = document.createElement('button');
    btnDel.append('删除');
    btnDel.addEventListener('click', function () {
      del(d);
    });
    td.append(btnDel);

    tr.append(td);

    tbData.appendChild(tr);
  }
}

// 删除的部分
function del(info) {
  console.log('要删除的信息：', info);
  let result = confirm('是否删除：' + info.deptName);
  if (!result) {
    return;
  }
  ajaxRequest(
    '/manange/dept/delete',
    {
      'tbDept.deptId': info.deptId
    },
    function (data) {
      alert(data.message);
      // 删除了要通过查询更新数据
      query();
    }
  );
}

// 分页的部分
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
  page.pageNumber++;
  // 不能超过总页数
  if (page.pageNumber > page.pageCount) {
    page.pageNumber = page.pageCount;
    return;
  }
  // 查询新页码的数据
  query();
});

// 上一页
spPre.addEventListener('click', function () {
  page.pageNumber--;
  // 不能小于1
  if (page.pageNumber < 1) {
    page.pageNumber = 1;
    return;
  }
  query();
});

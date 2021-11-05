let tbData = document.getElementById('tbData');

// 服务器查询结果有两个重要信息
let list = []; //一个是部门的列表
//一个分页的信息
let page = {
  pageNumber: 1,
  pageSize: 5
};

// 查询部门信息
function queryDept() {
  ajax(
    '/manange/dept/query',
    {
      page: page
    },
    function (data) {
      console.log('部门信息：', data);
      if (data.success) {
        // 成功就获取数据并显示
        list = data.resultData.list;
        page = data.resultData.page;
        showDeptList();
        showPageInfo();
      } else {
        // 失败就显示原因
        alert(data.message);
      }
    }
  );
}

// 显示部门信息
function showDeptList() {
  tbData.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let dept = list[i];
    let tr = document.createElement('tr');
    // 编号
    let td = document.createElement('td');
    td.append(dept.deptId);
    tr.append(td);
    // 部门名称
    td = document.createElement('td');
    td.append(dept.deptName);
    tr.append(td);
    // 部门描述
    td = document.createElement('td');
    td.append(dept.deptInfo);
    tr.append(td);
    // 修改时间
    td = document.createElement('td');
    td.append(formatTimestamp(dept.lastupdate));
    tr.append(td);

    // 操作部分
    td = document.createElement('td');
    // 删除按钮
    let btnDel = document.createElement('button');
    btnDel.append('删除');
    td.append(btnDel);
    btnDel.addEventListener('click', function () {
      toDel(dept);
    });

    tr.append(td);
    tbData.append(tr);
  }
}

// 删除的部分
function toDel(info) {
  if (confirm('是否删除：' + info.deptName)) {
    ajax(
      '/manange/dept/delete',
      {
        'tbDept.deptId': info.deptId
      },
      function (data) {
        alert(data.message);
        queryDept();
      }
    );
  }
}

queryDept();

// 添加部门信息的部分 ==========================
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
  // 按照服务端的格式收集数据
  let tbDept = {
    deptName: txtName.value,
    deptInfo: txtInfo.value
  };
  // 添加部门
  ajax(
    '/manange/dept/add',
    {
      tbDept: tbDept
    },
    function (data) {
      alert(data.message);
      // 添加后要重新查询
      queryDept();
    }
  );
});

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
  queryDept();
});

// 上一页
spPre.addEventListener('click', function () {
  page.pageNumber--;
  if (page.pageNumber < 1) {
    page.pageNumber = 1;
    return;
  }
  queryDept();
});

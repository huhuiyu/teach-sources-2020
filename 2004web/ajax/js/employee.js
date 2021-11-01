let waitDialog = document.getElementById('waitDialog');

let deptList = []; //部门列表
let list = []; // 员工列表
let page = {}; // 分页信息

// 查询员工信息
function query() {
  // 显示等待对话框
  waitDialog.style.display = 'flex';
  ajaxRequest('/manange/employee/query', {}, function (data) {
    // 请求回来后要关闭等待对话框
    waitDialog.style.display = 'none';
    if (data.success) {
      deptList = data.resultData.deptList;
      list = data.resultData.list;
      page = data.resultData.page;
    } else {
      alert(data.message);
    }
  });
}

query();

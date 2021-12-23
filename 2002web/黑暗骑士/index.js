// 查询数据 =================================
let page = {};
let tbStudent = {};
let classList = [];
let list = [];
function query() {
  ajaxRequest(
    '/manage/student/queryAll',
    {
      page: page,
      tbStudent: tbStudent
    },
    function (data) {
      if (data.success) {
        page = data.resultData.page;
        classList = data.resultData.classList;
        list = data.resultData.list;
        showClassList();
      } else {
        alert(data.message);
      }
    }
  );
}

let sel01 = document.getElementById('sel01');

function showClassList() {
  sel01.innerHTML = '';
  for (let i = 0; i < classList.length; i++) {
    let d = classList[i];
    let op = document.createElement('option');
    op.setAttribute('value', d.cid);
    op.append(d.cinfo);
    sel01.append(op);
  }
}

query();

// 查询数据===>显示到页面
// 调用接口（增删改）=====>显示结果
// ajax + document.createElement append

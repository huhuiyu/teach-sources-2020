// 页面元素的部分 ===========================================
let divMessages = document.getElementById('divMessages');
let apre = document.getElementById('apre');
let apage = document.getElementById('apage');
let anext = document.getElementById('anext');

let addDialog = document.getElementById('addDialog');
let txtTitle = document.getElementById('txtTitle');
let txtInfo = document.getElementById('txtInfo');
let btnPublish = document.getElementById('btnPublish');

// 查询的部分 ===============================================
let page = {};
let list = [];
let tbUserMessage = {};

function query() {
  ajaxRequest(
    '/userMessage/queryAllBasic',
    {
      page: page,
      tbUserMessage: tbUserMessage
    },
    function (data) {
      if (data.success) {
        page = data.resultData.page;
        list = data.resultData.list;
        console.log('留言数据：', list);

        showData();
        showPage();
      } else {
        alert(data.message);
      }
    }
  );
}

// 显示数据的部分 =============================================
function showData() {
  divMessages.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let data = list[i];
    // 对照页面模板完成数据的呈现
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    // 头是用户名
    let divHeader = document.createElement('div');
    divHeader.classList.add('card-header');
    divCard.append(divHeader);
    divHeader.append('发帖人：' + data.user.username);
    // body是标题
    let divBody = document.createElement('div');
    divBody.classList.add('card-body');
    divBody.append(data.title);
    divCard.append(divBody);
    // 跳转详细页，必须要传递主键umid信息
    divBody.addEventListener('click', function () {
      location = 'detail.html?umid=' + data.umid;
    });

    // 脚是发帖时间和评论数
    let divFooter = document.createElement('div');
    divFooter.classList.add('card-footer');
    let spTime = document.createElement('span');
    spTime.append('发帖时间：' + formatTimestamp(data.lastupdate));
    let spReply = document.createElement('span');
    spReply.append('评论数：' + data.replyCount);
    divFooter.append(spTime);
    divFooter.append(spReply);
    divCard.append(divFooter);

    divMessages.append(divCard);
  }
}

// 分页的部分 ==============================
function showPage() {
  apage.innerHTML =
    '当前页/总页数/记录数:' +
    page.pageNumber +
    '/' +
    page.pageCount +
    '/' +
    page.total;
}

apre.addEventListener('click', function () {
  page.pageNumber--;
  query();
});

anext.addEventListener('click', function () {
  page.pageNumber++;
  query();
});

// 发帖功能 =======================================
addDialog.addEventListener('shown.bs.modal', function () {
  txtInfo.value = '';
  txtTitle.value = '';
  txtTitle.focus();
});

addDialog.addEventListener('hidden.bs.modal', function () {
  query();
});

btnPublish.addEventListener('click', function () {
  ajaxRequest(
    '/userMessage/add',
    {
      tbUserMessage: {
        title: txtTitle.value,
        info: txtInfo.value
      }
    },
    function (data) {
      // 服务器code为1000是特殊标志，表示必须是对应角色登录才能访问
      // 所以一定是跳转到登录页面！！！！！
      if (data.code == 1000) {
        alert(data.message);
        location = 'login.html';
        return;
      }
      alert(data.message);
      if (data.success) {
        txtTitle.value = '';
        txtInfo.value = '';
      }
    }
  );
});

query();

// 应用管理员 app-admin admin

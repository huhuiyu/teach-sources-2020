// 页面元素开始 =============================
let constainer = document.getElementById('constainer');

let apre = document.getElementById('apre');
let apage = document.getElementById('apage');
let anext = document.getElementById('anext');

let divError = document.getElementById('divError');
let addDialog = document.getElementById('addDialog');
let txtTitle = document.getElementById('txtTitle');
let txtInfo = document.getElementById('txtInfo');
let btnAdd = document.getElementById('btnAdd');

// 页面元素结束 =============================

// 查询留言信息 ===============================
let page = {};
let tbUserMessage = {};
let list = [];

function query() {
  ajax(
    '/userMessage/queryAllBasic',
    {
      page: page,
      tbUserMessage: tbUserMessage
    },
    function (data) {
      page = data.resultData.page;
      list = data.resultData.list;
      console.log('留言数据', page, list);

      showList();
      showPageInfo();
    }
  );
}

// 显示数据的部分
function showList() {
  constainer.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let data = list[i];
    // 顶级div是card
    let divCard = document.createElement('div');
    divCard.classList.add('card', 'm-1');
    // card的头---发帖人信息
    let divHeader = document.createElement('div');
    divHeader.classList.add('card-header');
    divHeader.append('发帖人：' + data.user.username);
    divCard.append(divHeader);
    // card的身体-----留言标题
    let divBody = document.createElement('div');
    divBody.classList.add('card-body');
    divBody.append(data.title);
    divCard.append(divBody);
    // 点击标题跳转到详情页查看
    divBody.addEventListener('click', function () {
      location = 'detail.html?umid=' + data.umid;
    });

    // card的脚部------发帖时间和回帖数
    let divFooter = document.createElement('div');
    divFooter.classList.add('card-footer');
    divCard.append(divFooter);
    // 时间
    let span = document.createElement('span');
    span.append(formatTimestamp(data.lastupdate));
    divFooter.append(span);
    // 回帖数
    span = document.createElement('span');
    span.append('回帖数：', data.replyCount);
    divFooter.append(span);

    // 添加card到容器
    constainer.append(divCard);
  }
}

// 分页功能 ==========================================
function showPageInfo() {
  apage.innerHTML =
    '当前页/总页数/记录数：' +
    page.pageNumber +
    '/' +
    page.pageCount +
    '/' +
    page.total;
}

anext.addEventListener('click', function () {
  page.pageNumber++;
  query();
});

apre.addEventListener('click', function () {
  page.pageNumber--;
  query();
});

// 发帖功能 =========================================
addDialog.addEventListener('shown.bs.modal', function () {
  divError.innerHTML = '';
  txtTitle.value = '';
  txtInfo.value = '';
  txtTitle.focus();
});

addDialog.addEventListener('hidden.bs.modal', function () {
  query();
});

btnAdd.addEventListener('click', function () {
  ajax(
    '/userMessage/add',
    {
      tbUserMessage: {
        title: txtTitle.value,
        info: txtInfo.value
      }
    },
    function (data) {
      // 服务器端如果返回code为1000，铁定就是没有登录！！！
      if (data.code == 1000) {
        location = 'login.html';
        return;
      }
      divError.innerHTML = data.message;
      if (data.success) {
        txtTitle.value = '';
        txtInfo.value = '';
      }
    }
  );
});

// 最后调用查询
query();

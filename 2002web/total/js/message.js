// 页面元素的部分 ========================
let container = document.getElementById('container');
let spPage = document.getElementById('spPage');
let btnPre = document.getElementById('btnPre');
let btnNext = document.getElementById('btnNext');

// 查询留言数据的部分 =====================
let page = {};
let tbUserMessage = {};
let list = [];

function query() {
  ajaxRequest(
    '/userMessage/queryAllBasic',
    {
      page: page,
      tbUserMessage: tbUserMessage
    },
    function (data) {
      console.log('留言数据：', data);
      list = data.resultData.list;
      page = data.resultData.page;

      showData();
      showPage();
    }
  );
}

query();

// 显示留言信息的部分(对照页面的模板生成) ====================
function showData() {
  container.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let data = list[i];
    // 最外层是card
    let divCard = document.createElement('div');
    // 追加class值
    divCard.classList.add('card', 'm-3');
    // 头是用户名
    let divHeader = document.createElement('div');
    divHeader.classList.add('card-header');
    divHeader.append('发帖人：' + data.user.username);
    // 头追加到card
    divCard.append(divHeader);
    // body的内容是标题
    let divBody = document.createElement('div');
    divBody.classList.add('card-body');
    divBody.append(data.title);
    divCard.append(divBody);
    // 点击标题跳转页面并传递umid的值
    divBody.addEventListener('click', function () {
      location = 'detail.html?umid=' + data.umid;
    });

    // 脚里面是时间和回帖数
    let divFooter = document.createElement('div');
    divFooter.classList.add('card-footer');
    divCard.append(divFooter);
    let span = document.createElement('span');
    span.append(formatTimestamp(data.lastupdate));
    divFooter.append(span);
    divFooter.append('---');
    span = document.createElement('span');
    span.append('评论数量：' + data.replyCount);
    divFooter.append(span);
    // 追加到容器
    container.append(divCard);
  }
}

// 显示分页信息的部分 ===================================
function showPage() {
  spPage.innerHTML = page.pageNumber + '/' + page.pageCount + '/' + page.total;
}

btnPre.addEventListener('click', function () {
  page.pageNumber--;
  query();
});

btnNext.addEventListener('click', function () {
  page.pageNumber++;
  query();
});

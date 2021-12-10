// 页面元素开始 =============================
let constainer = document.getElementById('constainer');

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

// 最后调用查询
query();

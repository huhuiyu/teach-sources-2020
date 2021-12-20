// 获取地址栏中umid信息====================================
let search = location.search;
console.log('查询字符串信息：', search);
let umid = search.replace('?umid=', '');
console.log('umid的值：', umid);
// 页面元素部分===========================================
let eltitle = document.getElementById('title');
let elmessage = document.getElementById('message');
let elinfo = document.getElementById('info');
let elreplys = document.getElementById('replys');

let addDialog = document.getElementById('addDialog');
let txtInfo = document.getElementById('txtInfo');
let btnAdd = document.getElementById('btnAdd');

// 分页元素
let spans = document.querySelectorAll('#divPage span');
console.log('分页元素：', spans);
// 查询数据 =============================================
// 留言的详情
let tbUserMessage = {};
// 分页信息
let page = {};
// 评论列表
let list = [];

function query() {
  ajaxRequest(
    '/userMessage/queryUserMessageDetail',
    {
      page: page,
      tbUserMessageReply: {
        umid: umid
      }
    },
    function (data) {
      if (data.success) {
        page = data.resultData.page;
        // 加载更多模式，应该叠加，而不是更新
        list = list.concat(data.resultData.list);
        tbUserMessage = data.resultData.tbUserMessage;
        console.log('留言详情：', tbUserMessage, list);
        // 分页的判断
        if (page.pageNumber >= page.pageCount) {
          spans[0].style.display = 'none';
          spans[1].style.display = 'inline-block';
        } else {
          spans[1].style.display = 'none';
          spans[0].style.display = 'inline-block';
        }
        showDetail();
        showReplys();
      } else {
        alert(data.message);
      }
    }
  );
}

// 显示帖子详情============================================
function showDetail() {
  eltitle.innerHTML = tbUserMessage.title;
  elinfo.innerHTML = tbUserMessage.info;
  elmessage.innerHTML =
    '发帖人：' +
    tbUserMessage.user.username +
    ' 发帖时间：' +
    formatTimestamp(tbUserMessage.lastupdate) +
    ' 评论数：' +
    page.total;
}

// 评论列表显示部分================================
function showReplys() {
  elreplys.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let data = list[i];
    // 按照页面评论模板编写
    let div = document.createElement('div');
    let divUser = document.createElement('div');
    divUser.innerHTML = data.user.username;
    div.append(divUser);
    // 内容和时间
    let div02 = document.createElement('div');
    div.append(div02);

    let divReplyInfo = document.createElement('div');
    divReplyInfo.append(data.info);
    div02.append(divReplyInfo);

    let divReplyTime = document.createElement('div');
    divReplyTime.append(formatTimestamp(data.lastupdate));
    div02.append(divReplyTime);

    elreplys.append(div);
  }
}

// 评论的部分 ===========================================
addDialog.addEventListener('hidden.bs.modal', function () {
  refresh();
});

addDialog.addEventListener('shown.bs.modal', function () {
  txtInfo.value = '';
  txtInfo.focus();
});

btnAdd.addEventListener('click', function () {
  ajaxRequest(
    '/userMessage/addReply',
    {
      tbUserMessageReply: {
        umid: umid,
        info: txtInfo.value
      }
    },
    function (data) {
      // 如果是code是1000，表示没有登录！！！！！
      if (data.code == 1000) {
        alert('评论需要登录！');
        location = 'login.html';
        return;
      }
      alert(data.message);
      if (data.success) {
        txtInfo.value = '';
      }
    }
  );
});

// 刷新页面
function refresh() {
  list = [];
  page.pageNumber = 1;
  query();
}

// 加载更多（另一种分页模式）
let nomore = false; // 判定是否还有记录
function moreInfo() {
  nomore = page.pageNumber >= page.pageCount;
  if (nomore) {
    return;
  }

  page.pageNumber++;
  query();
}

query();

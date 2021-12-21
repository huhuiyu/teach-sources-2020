// 获取页面传递的umid信息
let search = location.search;
let umid = search.replace('?umid=', '');
console.log('umid信息：', search, umid);

if (!umid) {
  alert('没有获取到帖子信息');
  location = 'message.html';
}

// 页面元素 ========================================
let divTitle = document.getElementById('divTitle');
let divInfo = document.getElementById('divInfo');
let divMessage = document.getElementById('divMessage');

let divReplies = document.getElementById('divReplies');

let addDialog = document.getElementById('addDialog');
let txtInfo = document.getElementById('txtInfo');
let btnPublish = document.getElementById('btnPublish');

// 查询数据 ========================================
let page = {};
let list = []; // 帖子的评论列表
let tbUserMessage = {}; // 帖子详情

function query() {
  ajaxRequest(
    '/userMessage/queryUserMessageDetail',
    {
      page: page,
      tbUserMessageReply: { umid: umid }
    },
    function (data) {
      if (data.success) {
        page = data.resultData.page;
        list = data.resultData.list;
        tbUserMessage = data.resultData.tbUserMessage;
        console.log('帖子详情：', tbUserMessage, list);

        showDetail();
        showReplies();
      } else {
        alert(data.message);
      }
    }
  );
}

// 显示详情
function showDetail() {
  divTitle.innerHTML = tbUserMessage.title;
  divInfo.innerHTML = tbUserMessage.info;
  divMessage.innerHTML =
    tbUserMessage.user.username +
    ':' +
    formatTimestamp(tbUserMessage.lastupdate);
}

// 显示评论
function showReplies() {
  divReplies.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    let data = list[i];
    // 对照页面模板完成显示
    let div = document.createElement('div');
    // 姓名
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

    divReplies.append(div);
  }
}

// 评论 =================================
addDialog.addEventListener('shown.bs.modal', function () {
  txtInfo.value = '';
  txtInfo.focus();
});

addDialog.addEventListener('hidden.bs.modal', function () {
  query();
});

btnPublish.addEventListener('click', function () {
  ajaxRequest(
    '/userMessage/addReply',
    {
      tbUserMessageReply: {
        info: txtInfo.value,
        umid: umid
      }
    },
    function (data) {
      if (data.code == 1000) {
        alert(data.message);
        location = 'login.html';
        return;
      }
      alert(data.message);
      if (data.success) {
        txtInfo.value = '';
        txtInfo.focus();
      }
    }
  );
});

query();

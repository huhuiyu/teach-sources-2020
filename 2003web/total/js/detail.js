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

    divReplies.append(div);
  }
}

query();

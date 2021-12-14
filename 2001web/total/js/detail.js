// 获取umid的信息
let search = location.search;
let umid = search.replace('?umid=', '');
console.log(search, umid);
// 这个可以没有，但是写了可以保证页面没有umid就无法进入
if (!umid) {
  location = 'message.html';
}

// 页面元素部分 =========================================
let divTitle = document.getElementById('divTitle');
let divInfo = document.getElementById('divInfo');
let divMessage = document.getElementById('divMessage');
let divReplies = document.getElementById('divReplies');

// 查询 ===============================================
let page = {}; // 分页
let list = []; // 回帖列表
let tbUserMessageReply = { umid: umid }; // 查询条件
let tbUserMessage = {}; // 帖子详情
function query() {
  ajax(
    '/userMessage/queryUserMessageDetail',
    {
      page: page,
      tbUserMessageReply: tbUserMessageReply
    },
    function (data) {
      page = data.resultData.page;
      list = data.resultData.list;
      tbUserMessage = data.resultData.tbUserMessage;
      console.log('帖子和评论', tbUserMessage, list);
      showDetail();
      showReplies();
    }
  );
}

// 显示帖子的信息
function showDetail() {
  divTitle.innerHTML = tbUserMessage.title;
  divInfo.innerHTML = tbUserMessage.info;
  divMessage.innerHTML =
    tbUserMessage.user.username +
    '-' +
    formatTimestamp(tbUserMessage.lastupdate);
}

// 显示评论列表 =========================================
function showReplies() {
  divReplies.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let data = list[i];
    let div = document.createElement('div');
    // 第一行用户
    let divUser = document.createElement('div');
    divUser.append(data.user.username);
    div.append(divUser);
    // 第二行内容和时间
    let div02 = document.createElement('div');
    div.append(div02);

    
    let divReplyInfo = document.createElement('div');
    divReplyInfo.innerHTML = data.info;
    div02.append(divReplyInfo);
    
    let divReplyTime = document.createElement('div');
    divReplyTime.innerHTML = formatTimestamp(data.lastupdate);
    div02.append(divReplyTime);

    divReplies.append(div);
  }
}

query();

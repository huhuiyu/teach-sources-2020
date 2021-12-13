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
        list = data.resultData.list;
        tbUserMessage = data.resultData.tbUserMessage;
        console.log('留言详情：', tbUserMessage, list);

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

    elreplys.append(div);
  }
}

query();

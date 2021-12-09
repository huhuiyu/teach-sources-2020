// 获取查询字符串中的umid，如果不是正常跳转到本页面，将无法工作
let umid = -1;
let queryString = location.search.replace('?', '');
umid = queryString.replace('umid=', '');
console.log(queryString, umid);

// 查询
let page = {};
// 评论列表
let list = [];
// 帖子内容
let detail = {};

function query() {
  ajaxRequest(
    '/userMessage/queryUserMessageDetail',
    {
      page: page,
      tbUserMessageReply: { umid: umid }
    },
    function (data) {
      console.log('帖子详情', data);
      page = data.resultData.page;
      list = data.resultData.list;
      detail = data.resultData.tbUserMessage;
      console.log('detail：', detail);
    }
  );
}

query();

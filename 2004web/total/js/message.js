let page = {}; //分页信息
let list = []; //留言列表
let tbUserMessage = {}; //查询过滤

// laoding对话框相关=====================
let divLoading = document.getElementById('divLoading');
// 显示加载对话框
function showLoading(info) {
  // 没有传递参数就显示页面加载中。。。
  info = info ? info : '页面加载中';
  divLoading.innerHTML = info;
  divLoading.style.display = 'flex';
}

function hideLoading() {
  divLoading.style.display = 'none';
}

// laoding对话框相关=====================

// 查询留言板信息
function query() {
  // 调用长时间任务之前，显示加载
  showLoading();
  ajaxRequest(
    '/userMessage/queryAll',
    {
      page: page,
      tbUserMessage: tbUserMessage
    },
    function (data) {
      // 长时间任务完成之后，隐藏加载
      hideLoading();
      console.log('留言板数据', data);
      page = data.resultData.page;
      list = data.resultData.list;
      console.log('分页和数据', page, list);
    }
  );
}

query();

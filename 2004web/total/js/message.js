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

      showData();
      // 显示分页信息
      let spPage = document.getElementById('spPage');
      spPage.innerHTML =
        page.pageNumber + '/' + page.pageCount + '/' + page.total;
    }
  );
}

query();

// 显示数据的部分 ===================================
let container = document.getElementById('container');

function showData() {
  container.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let data = list[i];
    // 对照页面模板完成数据显示
    let divCard = document.createElement('div');
    // 追加样式
    divCard.classList.add('card', 'm-3');
    // 头---用户信息
    let divHeader = document.createElement('div');
    divHeader.append('发帖人：' + data.user.username);
    divHeader.classList.add('card-header');
    divCard.append(divHeader);
    // 身体----标题
    let divBody = document.createElement('div');
    divBody.classList.add('card-body');
    divBody.append(data.title);
    divCard.append(divBody);
    // 点击标题要跳转到详细页
    divBody.addEventListener('click', function () {
      // 通过查询字符串传递umid到详细页！！！！！
      location.href = 'message-detail.html?umid=' + data.umid;
    });

    // 脚---时间和评论数
    let divFooter = document.createElement('div');
    divFooter.classList.add('card-footer');
    divCard.append(divFooter);
    // 时间
    let span = document.createElement('span');
    span.append(formatTimestamp(data.lastupdate));
    divFooter.append(span);
    // 评论数
    span = document.createElement('span');
    span.append('评论数：' + data.replyCount);
    divFooter.append(span);
    // 追加到容器
    container.append(divCard);
  }
}

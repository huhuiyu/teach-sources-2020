// ajax封装
// 服务器的根地址
const BASE_URL = 'https://huhuiyu.top/teach_project_service';
// token保存的本地名称
const LOCAL_TOKEN_KEY = 'huhuiyu.teach.token';

// 保存服务器应答token信息
function saveToken(data) {
  if (data && data.token) {
    localStorage.setItem(LOCAL_TOKEN_KEY, data.token);
  }
}
// 读取本地保存的token
function loadToken() {
  let token = localStorage.getItem(LOCAL_TOKEN_KEY);
  return token ? token : '';
}

// ajax的关键要素
// 1:api的url地址
// 2:请求参数
// 3:应答数据的处理回调函数
// 4:请求的方式(method)，可以省略，默认为post
function ajax(path, params, cb, method) {
  // 完整的url路径
  let url = BASE_URL + path;
  // 参数的处理(allowDots: true表示可以多级json)
  let data = Qs.stringify(params, { allowDots: true });
  // 请求的方式，默认为post
  method = method ? method : 'post';
  // get请求要通过url传递数据
  if ('get' == method) {
    // 拼接数据到url
    url = url + '?' + data;
    // 不在需要data传递
    data = '';
  }
  // 通过axios发起请求
  let promise = axios({
    url: url,
    data: data,
    method: method,
    // 请求头中的token
    headers: {
      token: loadToken()
    }
  });
  // 处理应答结果
  promise
    .then(function (resp) {
      console.log('应答结果', resp);
      // 保存token
      saveToken(resp.data);
      // 回调只需要服务器应答的数据
      cb(resp.data);
    })
    // 箭头函数格式 function(err){}
    .catch((err) => {
      console.error(err);
      // 伪造应答结果
      cb({ code: 500, success: false, message: '请求异常' });
    });
}

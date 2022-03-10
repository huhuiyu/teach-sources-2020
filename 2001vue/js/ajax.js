// 封装ajax
// 后端接口的服务器基础地址
const SERVER_BASE_URL = 'https://huhuiyu.top/teach_project_service';
// 本地存储token的名称
const SERVER_TOKEN_KEY = 'huhuiyu.teach.token';

// 保存服务器token信息
function saveToken(data) {
  if (data && data.token) {
    localStorage.setItem(SERVER_TOKEN_KEY, data.token);
  }
}

// 加载本地存储的token信息
function loadToken() {
  let token = localStorage.getItem(SERVER_TOKEN_KEY);
  return token ? token : '';
}

// ajax请求对象
// ajax的要素：1：后端api的path，2：请求的参数
// 3：应答结果的处理回调function，4：请求的方式（可选，默认为post）
let ajax = function (path, params, cb, method) {
  // 完整的请求路径
  let url = SERVER_BASE_URL + path;
  // 请求参数的处理（需要qs）
  let data = Qs.stringify(params, { allowDots: true });
  // method的默认处理
  method = method ? method : 'post';
  if (method == 'get') {
    url = url + '?' + data;
    data = '';
  }
  console.log('请求的参数信息', url, data, method);
  // 通过axios发起ajax请求
  let promise = axios({
    url: url,
    data: data,
    method: method,
    // token需要通过头信息传递
    headers: {
      token: loadToken()
    }
  });
  // 应答结果的处理
  promise
    .then(function (resp) {
      console.log('ajax请求结果：', resp);
      // 保存token
      saveToken(resp.data);
      // 回调只需要应答的服务器端数据，不需要完整的resp信息
      cb(resp.data);
    })
    // es6的箭头函数
    .catch((error) => {
      console.error('请求异常：', error);
      // 定制错误请求信息
      cb({ code: 500, success: false, message: '请求异常' });
    });
};
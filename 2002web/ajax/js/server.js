// ajax访问数据的核心点
// 1：请求的url，不同url带来不同的功能
// 2：请求的method（方式），由服务器端决定
// 3：请求的数据
// 4：应答的结果，正确或者错误
// https://huhuiyu.top/teach-service/docs.html
const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';

// 处理服务器token凭证
const SERVER_TOKEN_KEY = 'huhuiyu.top.token';
function saveToken(data) {
  // 保存服务端应答数据中的token
  if (data && data.token) {
    localStorage.setItem(SERVER_TOKEN_KEY, data.token);
  }
}
function loadToken() {
  // 读取本地保存的token
  let token = localStorage.getItem(SERVER_TOKEN_KEY);
  return token ? token : '';
}

// 封装标准的ajax请求
// 参数1就是请求的url,参数2是请求的数据
// 参数3就是应答结果的处理function，参数4就是请求的方式
function ajaxRequest(url, params, cb, method) {
  let promise = axios({
    url: SERVER_BASE_URL + url,
    //{ allowDots: true }表示可以传入多级json对象
    data: Qs.stringify(params, { allowDots: true }),
    // method可以省略，默认就是post
    method: method ? method : 'post',
    // 通过header信息传递token
    headers: {
      token: loadToken()
    }
  });
  // 应答结果处理
  promise
    .then(function (resp) {
      // 保存token
      saveToken(resp.data);
      // 切记，cb参数应答的处理function
      cb(resp.data);
    })
    .catch(function (err) {
      console.error(err);
      // 统一错误的应答
      cb({
        code: 500,
        message: '请求失败',
        success: false
      });
    });
}

// 处理服务器端时间是一串数（时间戳）的问题
function formatTimestamp(ts) {
  let date = new Date();
  date.setTime(ts);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let mm = date.getMinutes();
  let s = date.getSeconds();
  return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
}

// 封装ajax请求

// 服务器根地址
const BASE_URL = 'https://huhuiyu.top/teach_project_service';
// 本地保存token的名称
const TOKEN_KEY = 'huhuiyu.teach.token';

function saveToken(data) {
  // 保存服务器的token信息
  if (data && data.token) {
    localStorage.setItem(TOKEN_KEY, data.token);
  }
}

function loadToken() {
  // 获取本地存储的token信息
  let token = localStorage.getItem(TOKEN_KEY);
  return token ? token : '';
}

// ajax的要素
// 1,接口的url地址
// 2,请求的参数数据
// 3,请求的方式（method）(可以省略，默认为post)
// 4,应答结果的处理回调function
function ajax(url, params, cb, method) {
  // url要带上根地址
  url = BASE_URL + url;
  // 参数的处理(Qs进行转换)
  let data = Qs.stringify(params, { allowDots: true });
  // method的判断
  method = method ? method : 'post';
  // get请求的处理(必须是url?查询字符串传递参数)
  if ('get' == method) {
    url = url + '?' + data;
    data = '';
  }
  // 通过axiso发起请求
  let promise = axios({
    url: url,
    data: data,
    method: method,
    // token要通过请求头传递
    headers: {
      token: loadToken(),
    },
  });
  // 应答的回调处理
  promise
    .then(function (resp) {
      // 成功调用的情况
      console.log('ajax应答结果', resp);
      // 保存token，data字段是服务器应答的数据
      saveToken(resp.data);
      // 回调处理
      cb(resp.data);
    })
    .catch((err) => {
      console.error('请求失败', err);
      // 伪造错误应答回调
      cb({ code: 500, success: false, message: '请求错误' });
    });
}

// ajax的文件上传,1:文件，2：请求参数(只能是一级的json)，3：回调
function upload(file, params, cb) {
  // 文件上传需要FormData处理
  let data = new FormData();
  data.append('file', file);
  for (let key in params) {
    data.append(key, params[key]);
  }
  // 文件上传请求
  let promise = axios({
    url: BASE_URL + '/user/file/upload',
    data: data,
    method: 'post',
    headers: {
      token: loadToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  // 应答的回调处理
  promise
    .then(function (resp) {
      // 成功调用的情况
      console.log('ajax应答结果', resp);
      // 保存token，data字段是服务器应答的数据
      saveToken(resp.data);
      // 回调处理
      cb(resp.data);
    })
    .catch((err) => {
      console.error('请求失败', err);
      // 伪造错误应答回调
      cb({ code: 500, success: false, message: '请求错误' });
    });
}

// 获取下载的链接地址
function getDownloadUrl(fid) {
  return BASE_URL + '/user/file/download?fid=' + fid;
}

// ajax请求的封装
// 请求url，后端定义的，在文档中Path，不同的值是不同功能
// 请求参数data，后端定义的，在文档中Parameters
// 请求的方式method，后端文档中最开始的地方定义的
// 应答的结果在回调参数data属性中获取，后端文档中的Responses

// https://huhuiyu.top/teach-service/docs.html
// 后端api接口的访问根地址
const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';

// ajax请求的function
// path参数就是url，params参数就是data，cb是回调处理的function
// method是可选参数，不给就是post
function ajax(path, params, cb, method) {
  let promise = axios({
    url: SERVER_BASE_URL + path,
    //  { allowDots: true }表示接受多级的json格式
    data: Qs.stringify(params, { allowDots: true }),
    method: method ? method : 'post'
  });
  promise
    .then(function (resp) {
      // 正确获取就回调处理
      cb(resp.data);
    })
    .catch(function (err) {
      console.error(err);
      // 错误就伪造一个错误的信息回调
      cb({
        code: 500,
        success: false,
        message: '请求失败，请稍后重试'
      });
    });
}

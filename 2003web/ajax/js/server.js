// 对ajax请求的封装
// 请求方式method，这个在文档最上方
// 请求的地址url，就是文档中的Path，不同的地址就是不同功能
// 请求的参数data，文档中的Parameters
// 应答的结果在成功回调的data属性里面，文档中的Responses
// 文档地址
// https://huhuiyu.top/teach-service/docs.html
// 服务器接口地址
const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';
// ajax请求的function
// path就是接口地址，params是请求的参数,cb是应答处理的function
// method是请求方式，不传的就是post
function ajaxRequest(path, params, cb, method) {
  let promise = axios({
    url: SERVER_BASE_URL + path,
    // allowDots表示接受多级的json对象
    data: Qs.stringify(params, { allowDots: true }),
    method: method ? method : 'post'
  });
  // 应答结果处理
  promise
    .then(function (resp) {
      // 请求正常就回调数据
      cb(resp.data);
    })
    .catch(function (err) {
      console.error(err);
      cb({
        code: 500,
        success: false,
        message: '请求失败，请稍后重试'
      });
    });
}

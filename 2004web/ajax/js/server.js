// ajax请求的几个关键点！！！！
// 1：请求的url，这个就是后端的服务地址，不同url代表功能
// 2：需要发送到服务器的数据
// 3：请求的method（请求方式），一定是后端确定的（看文档）
// 4：应答结果的处理（俩个function，正确错误各一个）

const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';
// 封装ajax请求的公用代码
// path就是api接口地址,params就是发送到服务器的数据
// cb就是应答结果的处理function,method就是请求方式
function ajaxRequest(path, params, cb, method) {
  let promise = axios({
    url: SERVER_BASE_URL + path,
    // {allowDots:true}是允许传入多级json
    // {'a.b':134} {a:{b:134}}
    data: Qs.stringify(params, { allowDots: true }),
    // method如果不传入就是post
    method: method ? method : 'post'
  });
  // 应答结果处理
  promise
    .then(function (resp) {
      // cb是function，传递的只有服务器数据
      cb(resp.data);
    })
    .catch(function (err) {
      console.error(err);
      cb({
        code: 500,
        success: false,
        message: '请求失败！'
      });
    });
}

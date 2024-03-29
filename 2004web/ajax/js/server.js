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
    method: method ? method : 'post',
    // 通过头信息发送token
    headers: {
      token: localStorage.getItem('huhuiyu.server.token')
    }
  });
  // 应答结果处理
  promise
    .then(function (resp) {
      // 保存服务端的token信息(服务器追踪客户端的凭证)
      if (resp.data && resp.data.token) {
        localStorage.setItem('huhuiyu.server.token', resp.data.token);
      }
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

// 通用处理服务器时间的function
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

// md5加密
function md5(info) {
  return SparkMD5.hash(info);
}

// 完成班级和学生信息的联动效果
// 要求班级信息和上课一样是select
// 但是学习信息要显示两种格式，一个是select，一个是table
// select只要显示学生姓名
// table要显示所有的学生的信息

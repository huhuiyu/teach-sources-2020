// 测试两个第三方包是否导入正确
console.log('axios和qs的导入验证\r\n', axios, '\r\n', Qs);

// 服务器文档地址
// https://huhuiyu.top/teach-service/docs.html
// 服务器接口地址
const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';
// 利用axios发起对服务器的api接口调用
let promise = axios({
  url: SERVER_BASE_URL + '/',
  data: 'echo=黑暗骑士',
  method: 'post'
});
// ajax请求有两种情况，正常应答和错误
promise
  .then(function (resp) {
    console.log('服务器应答结果', resp.data);
  })
  .catch(function (err) {
    console.error('请求发生错误', err);
  });

// axios的参数说明
// url就是请求的服务器地址,对应着服务器文档中Path
// data是发送给服务器的请求数据,对应文档中的Parameters小节
// method是请求方式，对应文档最上方的描述

// 请求结果分为两种，正常的回调then里面的function
// 发生错误是回调catch里面的function
// 正常应答会通过参数传入应答结果,data属性就是服务器数据
// 服务器数据对应文档中的Responses小节

// Qs库的作用是在json格式和查询字符串格式之间转换
let jsonInfo = { username: '黑暗骑士', sex: 'm' };
console.log('Qs转换json的结果', Qs.stringify(jsonInfo));
let queryInfo = 'username=zhangsan&sex=f';
console.log('Qs转换查询字符串的结果', Qs.parse(queryInfo));

// 带界面的ajax请求
let txtEcho = document.getElementById('txtEcho');
let btnSend = document.getElementById('btnSend');
let preResult = document.getElementById('preResult');

let info = { echo: '' };
btnSend.addEventListener('click', function () {
  // 用json收集界面数据
  info.echo = txtEcho.value;
  // ajax请求
  // url就是服务器文档中的path
  // method就是请求方式，后端决定的，看文档就能确定
  // data是发送给后端服务的数据，看文档中的Parameters
  let promise = axios({
    url: SERVER_BASE_URL + '/',
    method: 'post',
    data: Qs.stringify(info)
  });
  // 请求的结果处理
  // 应答的结果可以在控制台里面查看，也可以在network中看
  // 最详细的结果描述在文档中看Responses
  promise
    .then(function (resp) {
      console.log(resp.data);
      // 显示在页面上
      preResult.innerHTML = JSON.stringify(resp.data, null, 2);
    })
    .catch(function (err) {
      console.error(err);
    });
});

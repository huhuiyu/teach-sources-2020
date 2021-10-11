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

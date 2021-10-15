// 验证axios和qs的库导入
console.log('axios:\r\n', axios, '\r\nqs\r\n', Qs);

// 后端api接口的文档地址
// https://huhuiyu.top/teach-service/docs.html
// 后端api接口的访问根地址
const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';

// 第一次ajax请求，回声服务
// url的值就是文档中的Path，表示后端api的接口地址
// 不同的地址可以完成不同的功能
// method是请求的方式，后端决定，参考文档
// data是后端接口需要的数据，在后端的Parameters小节定义
let promise = axios({
  url: SERVER_BASE_URL + '/',
  method: 'post',
  data: 'echo=黑暗骑士'
});
// 应答结果的部分，服务器的数据是data属性值
// 应答数据的格式参考服务器文档的Responses小节
promise
  .then(function (resp) {
    console.log('服务器回应：', resp.data);
  })
  .catch(function (err) {
    console.log('请求发生错误：', err);
  });

// qs的作用是在json和查询字符串之间做转换
let jsonInfo = {
  username: '程瀚',
  age: 18
};
console.log('Qs转换json：', Qs.stringify(jsonInfo));
let qsInfo = 'useranme=abc&age=25';
console.log('Qs转换查询字符串：', Qs.parse(qsInfo));

// 带界面的ajax请求
let txtEcho = document.getElementById('txtEcho');
let btnSend = document.getElementById('btnSend');
let preResult = document.getElementById('preResult');
let info = { echo: '' };

btnSend.addEventListener('click', function () {
  // 用json获取数据
  info.echo = txtEcho.value;
  // ajax请求
  let promise = axios({
    url: SERVER_BASE_URL + '/',
    method: 'post',
    data: Qs.stringify(info)
  });
  promise
    .then(function (resp) {
      let data = resp.data;
      console.log('应答结果', data);
      preResult.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(function (err) {
      console.error(err);
    });
});

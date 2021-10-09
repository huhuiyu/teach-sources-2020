console.log('ajax相关第三方库：', Qs, '\r\n====\r\n', axios);

// 后端接口文档地址
// https://huhuiyu.top/teach-service/docs.html
// 后端接口服务根地址
const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';

// axios请求参数说明
// url是后端api接口的地址，请查看后端文档中的path
// 不同的url提供不同的接口服务
// method是请求方式，请查看后端文档说明
// data是请求参数，也就是发送给服务器的数据
// 请查看后端文档中的Parameters小节
let promise = axios({
  url: SERVER_BASE_URL + '/',
  method: 'post',
  data: 'echo=huhuiyu'
});
// 请求Promise结果是两种情况
// then里面是服务器正确应答，应答的结果会通过参数传入
// 其中data属性就是服务器应答的数据
// 格式请查看后端文档中的Responses小节
// catch里面是请求失败的情况，错误的原有会通过参数传入
promise
  .then(function (resp) {
    console.log('服务器应答结果：', resp.data);
  })
  .catch(function (err) {
    console.error(err);
  });

// queryString查询字符串是http协议提交数据格式
// ?参数1=值1&参数2=值2....
// 不可以有中文或者特殊符号
// 而qs库提供了json和查询字符串直接的转换
let jsonInfo = { name: '刘光辉', age: 20 };
let queryInfo = Qs.stringify(jsonInfo);
console.log('qs转换json的结果：', jsonInfo, queryInfo);

// 完整的回声请求测试
let txtEcho = document.getElementById('txtEcho');
let btnSend = document.getElementById('btnSend');
let preResult = document.getElementById('preResult');
let divEcho = document.getElementById('divEcho');
let info = { echo: '' };

btnSend.addEventListener('click', function () {
  info.echo = txtEcho.value;
  promise = axios({
    url: SERVER_BASE_URL + '/',
    method: 'POST',
    data: Qs.stringify(info)
  });
  promise
    .then(function (resp) {
      preResult.innerHTML = JSON.stringify(resp.data, null, 2);
      // 服务器应答结果是一个json，可以直接使用属性
      let data = resp.data;
      // 应答结果要看服务器文档说明，格式可以直接在network中查看
      divEcho.innerHTML = '回声结果：' + data.message
        +'，应答是否成功：'+data.success;
    })
    .catch(function (err) {
      console.error(err);
    });
});

let txtLocal = document.getElementById('txtLocal');
let btnLocal = document.getElementById('btnLocal');
let btnLoadLocal = document.getElementById('btnLoadLocal');
let spLocal = document.getElementById('spLocal');
let btnDelLocal = document.getElementById('btnDelLocal');

// 保存信息到本地储存
btnLocal.addEventListener('click',function(){
  let local = txtLocal.value.trim();
  if(local=='') {
    spLocal.innerHTML='没有输入信息';
    return;
  }
  // 本地存储的信息在浏览器不清除信息的情况下会永久保留
  // localStorage.setItem('保存到本地的名称',要保存的值)
  localStorage.setItem('mylocalinfo',local);
  spLocal.innerHTML='保存信息成功！';
});

// 读取保存到本地存储中的信息
btnLoadLocal.addEventListener('click',function(){
  // 获取指定名称的本地存储信息
  // localStorage.getItem('保存到本地的信息的名称')
  let local = localStorage.getItem('mylocalinfo');
  if(local) {
    // 存在就显示到文本框
    txtLocal.value=local;
    spLocal.innerHTML='读取成功！';
  }else{
    spLocal.innerHTML='没有找到对应的本地信息';
  }
});

// 删除本地信息
btnDelLocal.addEventListener('click',function(){
  // localStorage.removeItem('要删除的本地信息的名称')
  localStorage.removeItem('mylocalinfo');
  spLocal.innerHTML='删除信息成功！';
});

// json的部分
let btnJSON =document.getElementById('btnJSON');
let preJSON =document.getElementById('preJSON');
let divJSON =document.getElementById('divJSON');
// json的格式
// { 属性:值,属性1:值一...}
// 值可以是任意类型的数据，包括json
let myjson = {
  name:'曹波',
  sex:'男',
  ts:new Date().getTime(),
  classInfo : {
    cid : 100,
    cname : '计算机2002班'
  }
};

btnJSON.addEventListener('click',function(){
  // json不是简单的数据，不能直接添加到页面
  // JSON.stringify(json对象)是转换json数据成字符串
  // json对象.属性名称可以读取或者设置json对象指定的属性
  preJSON.innerHTML = JSON.stringify(myjson) ;
  divJSON.innerHTML =
    myjson.name+':'+myjson.sex+'-'+myjson.classInfo.cname;
});

// json格式的字符串转换回json对象
let strJson = '{"name":"江鑫","id":100}';
// 字符串没法像json一样访问属性
console.log('错误结果',strJson.id);
// 转换回来
let objJson = JSON.parse(strJson);
console.log('json操作',objJson.id,objJson.name);

// 本地json
let btnLocalJson = document.getElementById('btnLocalJson');
let btnLoadLocalJson = document.getElementById('btnLoadLocalJson');
let preLocalJson = document.getElementById('preLocalJson');
const jsonkey = 'local-json'; //本地存储json的名称

btnLocalJson.addEventListener('click',function(){
  // 本地存储只能保存字符串，json需要转换
  localStorage.setItem(jsonkey,JSON.stringify(myjson));
  preLocalJson.innerHTML='保存json信息成功！';
});

btnLoadLocalJson.addEventListener('click',function(){
  let json = localStorage.getItem(jsonkey);
  if(json) {
    preLocalJson.innerHTML='读取本地json信息成功，控制台查看';
    // 转换回json状态
    let jsonObj = JSON.parse(json);
    console.log(jsonObj.name,jsonObj.sex);
  }
});
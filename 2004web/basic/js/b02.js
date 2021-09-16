let txtLocal = document.getElementById('txtLocal');
let btnLocal = document.getElementById('btnLocal');
let btnLoad = document.getElementById('btnLoad');
let btnDelLocal = document.getElementById('btnDelLocal');
let spLocal = document.getElementById('spLocal');

// 保存本地信息
btnLocal.addEventListener('click',function(){
  let info = txtLocal.value.trim();
  if(info=='') {
    spLocal.innerHTML='没有输入信息';
    return;
  }
  // 本地存储的信息会永久保留，只要浏览器不清除
  // localStorage.setItem('保存到本地的名称','保存的值')
  localStorage.setItem('local-info',info);
  spLocal.innerHTML='保存成功！';
});
// 读取本地存储信息
btnLoad.addEventListener('click',function(){
  // localStorage.getItem('保存到本地的名称')
  let info = localStorage.getItem('local-info');
  if(info) {
    txtLocal.value=info;
    spLocal.innerHTML='读取成功';
  }else{
    spLocal.innerHTML='没有本地信息';
  }
});
// 删除本地信息
btnDelLocal.addEventListener('click',function(){
  localStorage.removeItem('local-info');
  spLocal.innerHTML='删除成功！';
});

//  json的部分
let btnJson = document.getElementById('btnJson');
let preJson = document.getElementById('preJson');
let divJson = document.getElementById('divJson');

// json的格式
// {属性1:值1,属性2:值2...}
// 属性必须是字符串，值是任意类型，包括json自己
let myjson = {
  name:'丁铭',
  sex:'女',
  ts:new Date().getTime(),
  classInfo: {
    cid : 100,
    cname : '计算机2004班'
  }
};

btnJson.addEventListener('click',function(){
  // JSON.stringify(json对象),转换json为字符串
  preJson.innerHTML = JSON.stringify(myjson);
  // json对象.属性名可以读写json对象的对应属性值
  divJson.innerHTML = myjson.name + '-' 
    + myjson.sex + ':' + myjson.classInfo.cname;
});

// 转换json格式的字符串为json对象
let strJson = '{"name":"丁铭","id":1000}';
console.log('json字符串错误操作',strJson.name);
let objJson = JSON.parse(strJson);
console.log('转换json对象',objJson.name,objJson);

// 联合应用部分
let txtId = document.getElementById('txtId');
let txtName = document.getElementById('txtName');
let btnLocalJson = document.getElementById('btnLocalJson');
let btnLoadJson = document.getElementById('btnLoadJson');
let preUser = document.getElementById('preUser');

let user={
  id:'',
  name:''
};
const user_key='user-info'; //本地保存的key
btnLocalJson.addEventListener('click',function(){
  // 收集json信息
  user.id = txtId.value;
  user.name = txtName.value;
  // 保存到本地，需要转换成字符串
  localStorage.setItem(user_key,JSON.stringify(user));
  preUser.innerHTML='保存用户信息成功';
});
// 读取本地的用户信息
btnLoadJson.addEventListener('click',function(){
  let info = localStorage.getItem(user_key);
  if(info) {
    // 转换回来
    user = JSON.parse(info);
    preUser.innerHTML=user.id+'==>'+user.name;
  }else{
    preUser.innerHTML='没有用户信息';
  }
});
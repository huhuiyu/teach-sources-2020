console.log('进入h07.js=====>');
let txtXm = document.getElementById('txtXm');
let selXb = document.getElementById('selXb');
let txtSr = document.getElementById('txtSr');
let btnInfo = document.getElementById('btnInfo');
let btnJson = document.getElementById('btnJson');
let divInfo = document.getElementById('divInfo');
console.log('收集信息相关元素', txtXm, selXb, txtSr, btnInfo, btnJson, divInfo);

btnInfo.addEventListener('click', function () {
  let xm = txtXm.value.trim();
  let xb = selXb.value;
  let sr = txtSr.value.trim();
  divInfo.innerHTML = xm + '<br>性别：' + xb + '<br>生日：' + sr;
});

// json是现在数据传输格式的事实标准
// 可以简单的理解成单一变量可以存放多个命名的数据
// 格式：{属性1:值1,属性2:值2...}
// 整体是在{}中,属性和值用:分割，多个属性用,分割
// 操作单一属性是通过json变量.属性名称
let json01 = {
  name: '李四',
  sex: '女生',
  age: 18
};
console.log('整体显示json数据：', json01);
console.log('部分显示json数据：', json01.name, json01.age);

// 页面数据收集成json格式
let student = {
  xm: '',
  xb: '',
  sr: ''
};
btnJson.addEventListener('click', function () {
  student.xm = txtXm.value.trim();
  student.xb = selXb.value;
  student.sr = txtSr.value.trim();
  console.log('收集的json信息：', student);
});

// 练习：编写用户注册的信息收集页面
// 信息包括：登录名称，登录密码，确认密码，昵称

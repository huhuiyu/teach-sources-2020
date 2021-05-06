console.log('进入h07.js=======>');
// 表单元素信息收集，基础变量版本
let txtName = document.getElementById('txtName');
let selSex = document.getElementById('selSex');
let txtSr = document.getElementById('txtSr');
let btnInfo = document.getElementById('btnInfo');
let btnJson = document.getElementById('btnJson');
let divInfo = document.getElementById('divInfo');
console.log(
  '信息收集相关元素：',
  txtName,
  selSex,
  txtSr,
  btnInfo,
  btnJson,
  divInfo
);

btnInfo.addEventListener('click', function () {
  let name = txtName.value.trim();
  let sex = selSex.value;
  let sr = txtSr.value.trim();

  divInfo.innerHTML =
    '学生信息：' + name + '<br>' + '性别：' + sex + '<br>出生日期：' + sr;
});

// json数据格式(现阶段数据传输的事实标准)
// 简单的理解就是一个变量可以记录多个命名的值
let json01 = {
  name: '程瀚',
  sex: '男',
  age: 18
};
console.log('json格式数据：', json01);

// 练习，模拟用户注册界面，收集用注册信息
// 必须输入如下信息，用户名，密码，确认密码，用户昵称

console.log('进入h07.js========>');
let txtName = document.getElementById('txtName');
let selSex = document.getElementById('selSex');
let txtSr = document.getElementById('txtSr');
let btnInfo = document.getElementById('btnInfo');
let btnJson = document.getElementById('btnJson');
let divInfo = document.getElementById('divInfo');
console.log(
  '收集信息相关元素：',
  txtName,
  selSex,
  txtSr,
  btnInfo,
  btnJson,
  divInfo
);

btnInfo.addEventListener('click', function () {
  // 值为单变量的简单信息收集
  let name = txtName.value.trim();
  let sex = selSex.value;
  let sr = txtSr.value.trim();

  divInfo.innerHTML =
    '收集的学生信息是：' + name + '<br>性别：' + sex + '<br>生日：' + sr;
});
// 练习的部分，编写一个注册的界面，收集相关信息
// 信息包括：登录名称，登录密码，确认密码，用户昵称四项

// json是当前数据传输格式的事实标准
// 可以简单的理解它就是单一变量带有一组命名的值
// json的格式
// { 属性名称:值,属性2:值2... }
// 界定在大括号中，属性和值用:分割，多个属性用,分割
// 可以整体输出，也可以通过json对象.属性名操作单一属性
let json01 = {
  name: '丁铭',
  sex: '女',
  age: 18
};
// 可以是整体的输出
console.log('json信息：', json01);
console.log('获取json信息中的姓名：', json01.name);

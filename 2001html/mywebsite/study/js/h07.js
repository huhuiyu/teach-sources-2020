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
// json格式:{属性1:值1,属性2:值2...}
// 整体是在{}中,属性和值是用:号分隔，多个属性使用,分隔
// 单个属性是通过 json对象.属性名 访问
let json01 = {
  name: '程瀚',
  sex: '男',
  age: 18
};
console.log('json格式数据：', json01, json01.name);

// json数据来自于页面输入
let student = {
  xm: '',
  xb: '',
  sr: ''
};

btnJson.addEventListener('click', function () {
  student.xm = txtName.value.trim();
  student.xb = selSex.value;
  student.sr = txtSr.value.trim();
  console.log('收集的json信息：', student);
  // json对象不能整体输出到页面，必须转换成字符串或者单独调用属性
  // JSON.stringify方法是将json对象转换成字符串
  divInfo.innerHTML = JSON.stringify(student);
});

// 练习，模拟用户注册界面，收集用注册信息
// 必须输入如下信息，用户名，密码，确认密码，用户昵称

// 数组，简单的理解就是一组数据
let html = [80, 60, 100, 45, 89];
// 格式[值1,值2...]
// 可以通过下标来访问其中的一个数据（下标对应位置的）
// 下标是0到数组的长度-1，0是第一个数据，以此类推
console.log('数组信息：', html, html[1]);
// 获取数组的长度，也就是值的数量
console.log('数组的长度：', html.length);

// js切换背景图片的功能
// 背景图片的路径数组
let images = [
  '../images/batman01.jpg',
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img12.jpg'
];
// 记录当前显示的第几张图片
let index = 0;
// 记录背景图片的地址信息
let imgUrl = '';
let mydiv = document.getElementById('mydiv');

setInterval(function () {
  index = index + 1;
  // 下标不能超过图片数组的长度-1
  if (index >= images.length) {
    index = 0; // 回到第一个
  }
  imgUrl = 'url("' + images[index] + '")';
  console.log('背景相关信息：', index, imgUrl);
  // js切换背景
  mydiv.style.backgroundImage = imgUrl;
}, 5 * 1000);

// 页面元素数组！！！！！！！
let spans = document.querySelectorAll('.mybox > span');
console.log('页面元素数组：', spans);

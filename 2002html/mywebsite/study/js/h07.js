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
  // select元素的值是选中option的value
  student.xb = selXb.value;
  student.sr = txtSr.value.trim();
  console.log('收集的json信息：', student);
  // json不能整体添加到页面，需要转换或者分部使用
  // JSON.stringify方法可以将json对象转换成字符串
  divInfo.innerHTML = JSON.stringify(student);
});

// 练习：编写用户注册的信息收集页面
// 信息包括：登录名称，登录密码，确认密码，昵称

// 数组基础入门，是用于相同的一组值
// 例如一组html的考试成绩
let html = [100, 98, 68, 90];
// 数组的长度和数组中指定位置的值
// 数组[下标]可以操作数组中指定位置的值，下标是从0
console.log('数组的长度和第二个值', html.length, html[1]);

// 一组图片的地址
let images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img3.jpg',
  '../images/img4.jpg'
];
let divBg = document.getElementById('divBg');
console.log('图片数组：', images, divBg);
divBg.style.backgroundImage = 'url("' + images[0] + '")';

// 记住当前图片位置
let index = 0;
setInterval(function () {
  // 切换到下一个图片位置
  index = index + 1;
  // 下标位置不能大于或者等于数组的长度
  if (index >= images.length) {
    index = 0; //回到初始位置
  }
  let imgUrl = 'url("' + images[index] + '")';
  console.log('更换的图片为：', imgUrl);
  divBg.style.backgroundImage = imgUrl;
}, 5 * 1000);

// 数组来自于页面的一组元素！！！！！
// document.querySelectorAll('css选择器表达式');
// 是获取页面上所有和css选择器匹配的全部元素
// 返回的结果是元素的数组
let spans = document.querySelectorAll('.span-box > span');
console.log('通过css选择器表达式获取一组页面元素', spans);
console.log('元素的数量：', spans.length, spans[0]);
// 操作其中的某一个元素
spans[1].style.color = '#ff0000';

// 获取页面所有的div元素（元素选择器）
let divs = document.querySelectorAll('div');
console.log('页面上所有的div', divs);

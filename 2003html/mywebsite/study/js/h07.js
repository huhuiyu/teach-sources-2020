console.log('进入h07.js================>');
// 记录学生html成绩
// 数组其实简单的理解就是用一个变量记录一组值
// 格式：[值1,值2...]
// 数组可以通过索引获取对应位置的单个值
// 格式：数组变量[索引值]
// 注意事项：索引的取值范围是0到数组长度-1
let html = [60, 89, 10, 99, 67];
console.log('数组变量：', html, html[1]);
console.log('数组中值的数量：', html.length);

// 数组的应用，背景图片循环更换
// 图片地址的数组
let images = [
  '../images/img2.jpg',
  '../images/img3.jpg',
  '../images/xunlei-bg.jpg',
  '../images/batman01.jpg'
];
// 记录当前图片索引的变量
let index = 0;
let divBg = document.getElementById('divBg');
// 定时切换背景图片
setInterval(function () {
  //  换到下个图片索引
  index = index + 1;
  // 索引如果超出就回到初始的0
  if (index >= images.length) {
    index = 0;
  }
  let url = images[index];
  url = 'url("' + url + '")';
  console.log('图片信息：', index, url);
  // background-image: url('../images/img2.jpg');
  divBg.style.backgroundImage = url;
}, 5 * 1000);

// 页面元素的数组获取
let spans = document.querySelectorAll('.mybox > span');
console.log('页面元素的数组：', spans);
console.log('元素数组操作：', spans.length, spans[2]);
// 页面元素功能调用
spans[2].style.color = '#ff00ff';

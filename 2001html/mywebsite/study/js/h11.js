console.log('in h11.js========>');
let btnRand = document.getElementById('btnRand');
let divRand = document.getElementById('divRand');

btnRand.addEventListener('click', function () {
  // Math.random()：生成一个0-1之间的小数，不包括1
  divRand.append(Math.random() + ' ');
});

let txtCount = document.getElementById('txtCount');
let btnRand1 = document.getElementById('btnRand1');

btnRand1.addEventListener('click', function () {
  // 指定范围随机数
  // 通过骰子数量确定范围
  let count = parseInt(txtCount.value);
  let max = count * 6;
  // 区间随机数公式
  // 随机数*(上届-下届+1) + 下届
  divRand.append(parseInt(Math.random() * (max - count + 1) + count) + ' ');
});

// 图片数组
let images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img12.jpg',
  '../images/xunlei-bg.jpg',
  '../images/batman01.jpg'
];
// 人名的数组要和图片匹配
let names = ['蔡妮娜', '程瀚', '熊泰', '周俊佑', '帅兰珺'];

let myimg = document.getElementById('myimg');
let spName = document.getElementById('spName');
setInterval(function () {
  // 随机索引挑选图片(0到长度减一)
  let index = parseInt(Math.random() * images.length);
  myimg.setAttribute('src', images[index]);
  spName.innerHTML = names[index];
}, 0.05 * 1000);

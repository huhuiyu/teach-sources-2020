console.log('in h11.js======>');
let btnRand1 = document.getElementById('btnRand1');
let divRand = document.getElementById('divRand');

btnRand1.addEventListener('click', function () {
  // (Math.random() 生成随机的0-1之间的小数
  divRand.append(Math.random() + ' ');
});

// 骰子模拟
let txtCount = document.getElementById('txtCount');
let btnRand2 = document.getElementById('btnRand2');

btnRand2.addEventListener('click', function () {
  // 骰子数量，也就是下届
  let count = parseInt(txtCount.value);
  // 上届计算
  let max = count * 6;
  // 范围随机数公式
  // 随机数*(上届-下届+1) + 下届
  divRand.append(parseInt(Math.random() * (max - count + 1) + count) + ' ');
});

// 随机图片数组
let images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img3.jpg',
  '../images/img12.jpg',
  '../images/batman01.jpg'
];
//名称的数组，和图片的数量要一致
let names = ['刘兴', '石桂权', '孙健泰', '戴卓宏', '苏铭子'];

let myimg = document.getElementById('myimg');

setInterval(function () {
  // 挑选一个随机的图片下标（0到数组长度-1）
  let index = parseInt(Math.random() * images.length);
  myimg.setAttribute('src', images[index]);
}, 0.05 * 1000);

console.log('in index.js========>');
// 图片地址的数组
let images = [
  '../../images/img1.jpg',
  '../../images/img2.jpg',
  '../../images/img3.jpg',
  '../../images/img4.jpg'
];
// 记录当前显示的图片索引
let index = 0;
// 背景图片显示元素
let divBg = document.getElementById('divBg');
// 上一张
let divPre = document.getElementById('divPre');
// 下一张
let divNext = document.getElementById('divNext');
// 指示器（数组）
let points = document.querySelectorAll('#divPoint > span');
console.log('相关元素：', divBg, divPre, divNext, points);

// 处理指示器的切换
function changePoint() {
  // 清理掉所有指示器激活样式
  points[0].classList.remove('active');
  points[1].classList.remove('active');
  points[2].classList.remove('active');
  points[3].classList.remove('active');
  // 激活当前指示器
  points[index].classList.add('active');
}

// 下一张的点击事件处理
divNext.addEventListener('click', function () {
  // index++就是index=index+1的意思
  index++;
  if (index >= images.length) {
    index = 0; //超出范围就回到第一张
  }
  divBg.style.backgroundImage = 'url("' + images[index] + '")';
  changePoint();
});

// 上一张的点击事件处理
divPre.addEventListener('click', function () {
  // --是自减一，等同于index=index-1;
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  divBg.style.backgroundImage = 'url("' + images[index] + '")';
  changePoint();
});

// 自动切换功能
setInterval(function () {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  divBg.style.backgroundImage 
    = 'url("' + images[index] + '")';
  changePoint();
}, 10 * 1000);

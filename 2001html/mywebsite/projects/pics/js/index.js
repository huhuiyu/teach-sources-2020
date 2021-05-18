console.log('in index.js=======>');
let divPre = document.getElementById('divPre');
let divNext = document.getElementById('divNext');
let divBg = document.getElementById('divBg');
let points = document.querySelectorAll('#divPoint > span');
console.log('相关页面元素：', divPre, divNext, divBg, points);

let images = [
  '../../images/xunlei-bg.jpg',
  '../../images/img1.jpg',
  '../../images/img2.jpg',
  '../../images/img12.jpg'
];
// 当前显示的图片索引
let index = 0;
// 下一页点击
divNext.addEventListener('click', function () {
  // ++就是自加一，等同于index=index+1
  // index++;
  // if (index >= images.length) {
  //   index = 0; //超出范围回到第一张
  // }
  index = (index + 1) % images.length;
  divBg.style.backgroundImage = 'url("' + images[index] + '")';
  changeActive();
});
// 上一页点击
divPre.addEventListener('click', function () {
  //--自减一
  index--;
  if (index < 0) {
    index = images.length - 1; //超出返回到最后一张
  }
  divBg.style.backgroundImage = 'url("' + images[index] + '")';
  changeActive();
});
// 通用的移动激活样式的function
function changeActive() {
  // 清除所有的激活样式
  points[0].classList.remove('active');
  points[1].classList.remove('active');
  points[2].classList.remove('active');
  points[3].classList.remove('active');
  // 激活当前的样式
  points[index].classList.add('active');
}

// 自动播放的部分
setInterval(function () {
  // index = (index + 1) % images.length;
  // divBg.style.backgroundImage = 'url("' + images[index] + '")';
  // changeActive();
  divNext.click();
}, 10 * 1000);

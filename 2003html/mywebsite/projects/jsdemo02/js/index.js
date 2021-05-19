console.log('in index.js======>');
let divBg = document.getElementById('divBg');
let divPre = document.getElementById('divPre');
let divNext = document.getElementById('divNext');
let points = document.querySelectorAll('#divPoint > span');
console.log('相关元素：', divBg, divPre, divNext, points);
// 用来记录当前图片索引的变量
let index = 0;
// 图片地址的数组
// css中的图片地址是相对于css文件自身
// js中的图片地址是相对于引用js的html文件
let images = [
  '../../images/img1.jpg',
  '../../images/img2.jpg',
  '../../images/img3.jpg',
  '../../images/img12.jpg'
];

// 下一页点击
divNext.addEventListener('click', function () {
  // ++自加一运算符，等同于index=index+1
  index++;
  // 索引不能超出范围
  if (index >= images.length) {
    index = 0;
  }
  divBg.style.backgroundImage = 'url("' + images[index] + '")';
  changeActive();
});

// 上一张点击
divPre.addEventListener('click', function () {
  // --就是自减一
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  divBg.style.backgroundImage = 'url("' + images[index] + '")';
  changeActive();
});

// 更换指示器的function
function changeActive() {
  // 清除所有的指示器状态
  points[0].classList.remove('active');
  points[1].classList.remove('active');
  points[2].classList.remove('active');
  points[3].classList.remove('active');
  // 激活当前指示器
  points[index].classList.add('active');
}

// 自动播放
setInterval(function () {
  // 循环加值的最可靠算法
  index = (index + 1) % images.length;
  divBg.style.backgroundImage = 'url("' + images[index] + '")';
  changeActive();
}, 10 * 1000);

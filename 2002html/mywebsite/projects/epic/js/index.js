console.log('in index.js=====>');
// 获取所有的图片div
// document.querySelectorAll是获取css选择器对应的元素数组
let imgdivs = document.querySelectorAll('.img-box');
console.log('图片div：', imgdivs, imgdivs.length);

// imgdivs[0].style.transform = 'translateX(0%)';
// imgdivs[1].style.transform = 'translateX(100%)';
// imgdivs[2].style.transform = 'translateX(200%)';

// 移动的相关控制变量
let maxmove = -400; //最大移动范围
let speed = 20; //移动的速度，也就是计时器间隔
let move = 0; //当前的移动位置
let step = 0.05; //每次移动的间距
let stopmove = false; //是否停止移动

// 移动图片的功能
function moveimg() {
  // 停止移动的判断
  if (stopmove) {
    return;
  }
  for (let i = 0; i < imgdivs.length; i++) {
    // 计算移动位置
    move = move - step;
    if (move < maxmove) {
      // 超过范围回到原始位置
      move = 0;
    }
    let position = i * 100 + move;
    imgdivs[i].style.transform = 'translateX(' + position + '%)';
  }
}

moveimg();

// 定时移动
setInterval(function () {
  moveimg();
}, speed);

// 点击图片的效果
for (let i = 0; i < imgdivs.length; i++) {
  let divimg = imgdivs[i];
  divimg.addEventListener('click', function () {
    stopmove = true;
    console.log('点击的图片：', divimg, i);
  });
}

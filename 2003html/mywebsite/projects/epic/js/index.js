// style="transform: translateX(0%);"
console.log('in index.js=====>');
// 获取所有的图片容器
//  document.querySelectorAll('css选择器')
let imgDivs = document.querySelectorAll('.image-box');
let closeDivs = document.querySelectorAll('.close-box');
console.log('图片盒子：', imgDivs, closeDivs);

// 图片位置的规律
// imgDivs[0].style.transform = 'translateX(0%)';
// imgDivs[1].style.transform = 'translateX(100%)';
// imgDivs[2].style.transform = 'translateX(200%)';

// 移动速度，也就是移动的时间间隔（毫秒）
let speed = 20;
// 每次移动的距离
let step = 0.05;
// 最大移动值
let maxmove = (imgDivs.length - 3) * 100;
// 记录当前移动的位置
let move = 0;
// 控制移动是否进行的变量
let stopmove = false;

// 图片位置的移动方法
function moveImg() {
  if (stopmove) {
    // 状态为停止移动时直接中断执行
    return;
  }
  for (let i = 0; i < imgDivs.length; i++) {
    // 计算移动的部分
    move = move + step;
    if (move > maxmove) {
      // 超出范围就回到初始位置
      move = 0;
    }
    // 初始位置就是索引乘以100
    let position = i * 100 - move;
    imgDivs[i].style.transform = 'translateX(' + position + '%)';
  }
}

moveImg();

setInterval(function () {
  moveImg();
}, speed);

// 图片点击放大的事件处理
for (let i = 0; i < imgDivs.length; i++) {
  imgDivs[i].addEventListener('click', function () {
    stopmove = true;
    console.log('点击的元素：', imgDivs[i], i);
    // 添加激活的样式
    imgDivs[i].classList.add('active');
    // 移动到初始位置
    imgDivs[i].style.transform = 'translateX(0%)';
  });
}

// 关闭按钮的事件处理
for (let i = 0; i < closeDivs.length; i++) {
  closeDivs[i].addEventListener('click', function (ev) {
    imgDivs[i].classList.remove('active');
    stopmove = false;
    ev.stopPropagation();
  });
}

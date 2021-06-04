console.log('in index.js=======>');
let imgboxs = document.querySelectorAll('.img-box');
let closeboxs = document.querySelectorAll('.close-box');
console.log('图片元素：', imgboxs, closeboxs);

// style="transform: translateX(150%);"
// imgboxs[0].style.transform = 'translateX(0%)';
// imgboxs[1].style.transform = 'translateX(100%)';
// imgboxs[2].style.transform = 'translateX(200%)';

// 移动控制相关变量
let step = 0.05; //每次移动的距离
let move = 0; // 当前移动的位置
let maxmove = (3 - imgboxs.length) * 100; //最大移动范围
let speed = 20; //移动的速度，也就是计时器的间隔时间
let stopmove = false; //是否停止移动

// 移动图片位置的方法
function moveimg() {
  if (stopmove) {
    return;
  }
  for (let i = 0; i < imgboxs.length; i++) {
    move = move - step;
    if (move < maxmove) {
      // 超过范围就回到初始位置
      move = 0;
    }
    // 基础位置就是索引*100的结果
    let position = i * 100 + move;
    imgboxs[i].style.transform = 'translateX(' + position + '%)';
  }
}

moveimg();

// // 移动的计时任务
setInterval(function () {
  moveimg();
}, speed);

// 图片盒子的点击处理
for (let i = 0; i < imgboxs.length; i++) {
  imgboxs[i].addEventListener('click', function () {
    console.log('点击：', imgboxs[i], i);
    stopmove = true;
    // 激活样式
    imgboxs[i].classList.add('active');
    // 移动到0,0位置
    imgboxs[i].style.transform = 'translateX(0%)';
  });
}

// 关闭按钮
for (let i = 0; i < closeboxs.length; i++) {
  closeboxs[i].addEventListener('click', function (ev) {
    imgboxs[i].classList.remove('active');
    stopmove = false;
    ev.stopPropagation();
  });
}

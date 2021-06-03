console.log('in index.js====>');
// style="transform: translateX(100%);"

// 获取图片盒子的div数组
let imgdivs = document.querySelectorAll('.img-box');
console.log('图片盒子：', imgdivs, imgdivs.length);

//图片和位置的关系
// imgdivs[0].style.transform = 'translateX(0%)';
// imgdivs[1].style.transform = 'translateX(100%)';
// imgdivs[2].style.transform = 'translateX(200%)';
// ...
// 移动图片位置的方法
let move = 0.05; //每次移动的数量
let inteval = 20; //移动的时间间隔
let maxmove = -400; //最大移动距离
let moveleft = 0; //当前移动位置

function moveimg() {
  for (let i = 0; i < imgdivs.length; i++) {
    // 不停的移动
    moveleft = moveleft - move;
    if (moveleft < maxmove) {
      // 移动值不能超过最大限制
      moveleft = 0;
    }
    let imgleft = i * 100 + moveleft;
    imgdivs[i].style.transform = 'translateX(' + imgleft + '%)';
  }
}

moveimg();

setInterval(function () {
  moveimg();
}, inteval);

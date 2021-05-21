console.log('in js11.js================>');
let btnRan = document.getElementById('btnRan');
let spRan = document.getElementById('spRan');

btnRan.addEventListener('click', function () {
  // Math.random()生成一个0-1之间的随机小数
  // 通过乘法可以等到大一点的随机数
  // 通过取整可以等到整数的随机数
  spRan.innerHTML = Math.random() + '=====' + parseInt(Math.random() * 100);
});

// 随机骰子效果
let txtCount = document.getElementById('txtCount');
let btnCount = document.getElementById('btnCount');
let divCount = document.getElementById('divCount');

btnCount.addEventListener('click', function () {
  // 通过骰子数量决定最大值和最小值
  let count = parseInt(txtCount.value); //数量
  let max = count * 6;
  console.log('点数范围：', count, max);
  // 随机数公式 随机数*(上届-下届+1)+下届
  divCount.append(parseInt(Math.random() * (max - count + 1) + count));
  // document.createElement('br')
  divCount.append(' ');
});

// 随机变换图片
let myimg = document.getElementById('myimg');
let images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img12.jpg',
  '../images/batman01.jpg',
  '../images/xunlei-bg.jpg'
];

setInterval(function () {
  // 随机挑选一个图片的索引(0到长度减一)
  let index = parseInt(Math.random() * images.length);
  myimg.setAttribute('src', images[index]);
}, 1 * 1000);

// 抽奖程序部分===============
let btnJiang = document.getElementById('btnJiang');
let imgjiang = document.getElementById('imgjiang');
let spName = document.getElementById('spName');
let names = ['丁铭', '陈志豪', '高鹏', '易滋富', '钱思思'];
// 随机次数
let loopcount = 0;
// 计时器
let timer;
// 随机切换的function
function randInfo() {
  // 一旦开始就不让点击开始按钮
  // 极端设置，让按钮消失不见
  btnJiang.style.display = 'none';
  timer = setInterval(function () {
    // 通过计数控制随机的时间
    loopcount++;
    if (loopcount > 40) {
      clearInterval(timer);
      loopcount = 0;
      // 停止后恢复按钮
      btnJiang.style.display = 'inline';
      return;
    }
    // 随机的部分
    let index = parseInt(Math.random() * images.length);
    spName.innerHTML = names[index];
    imgjiang.setAttribute('src', images[index]);
  }, 100);
}

btnJiang.addEventListener('click', function () {
  randInfo();
});

// 写一个漂亮一点的抽奖程序！！！！
// js的随机数是小数，所以需要算法来随机整数
// 随机数公式 随机数*(上届-下届+1)+下届
// 随机可以让页面变得更加生动

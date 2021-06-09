console.log('in index.js=====>');
let dnd = document.getElementById('dnd');

dnd.addEventListener('click', function () {
  console.log('点击事件');
});

// 记录坐标差值的变量
let offsetX = 0;
let offsetY = 0;

dnd.addEventListener('dragstart', function (ev) {
  // 拖放没有位移触发的时点击事件
  console.log('开始拖动', ev);
  // 点击的起点和元素的位置差距=元素位置-点击位置 x=y-z
  // 元素新位置=新点击位置+差距  y=x+z
  offsetX = dnd.offsetLeft - ev.clientX;
  offsetY = dnd.offsetTop - ev.clientY;
});

dnd.addEventListener('dragend', function () {
  console.log('拖放结束');
});

dnd.addEventListener('drag', function (ev) {
  // 拖动事件在拖动中是频繁触发的
  console.log('拖动中', ev);
  // 移动值全是0，不要做计算
  if (ev.clientX == 0 && ev.clientY == 0) {
    return;
  }
  dnd.style.left = offsetX + ev.clientX + 'px';
  dnd.style.top = offsetY + ev.clientY + 'px';
});

// 手机版本
dnd.addEventListener('touchstart', function (ev) {
  // 触摸开始，touches是多点触摸的数组
  let touch = ev.touches[0];
  offsetX = dnd.offsetLeft - touch.clientX;
  offsetY = dnd.offsetTop - touch.clientY;
});

dnd.addEventListener('touchmove', function (ev) {
  // 触摸移动
  let touch = ev.touches[0];
  dnd.style.left = offsetX + touch.clientX + 'px';
  dnd.style.top = offsetY + touch.clientY + 'px';
});

// 弹出层相关
let btnPop = document.getElementById('btnPop');
let maskBox = document.getElementById('maskBox');
let contentBox = document.getElementById('contentBox');
let btnClose = document.getElementById('btnClose');

btnPop.addEventListener('click', function () {
  maskBox.style.display = 'flex';
});
btnClose.addEventListener('click', function () {
  maskBox.style.display = 'none';
});
spClose.addEventListener('click', function () {
  // 触发btnClose的点击事件
  btnClose.click();
});

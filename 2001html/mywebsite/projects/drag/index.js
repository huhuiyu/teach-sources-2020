console.log('in index.js=====>');
let dnd = document.getElementById('dnd');
// 记录移动的位置信息
let offsetX = 0;
let offsetY = 0;

// 电脑版本拖拽事件
dnd.addEventListener('click', function () {
  // 如果拖动开始结束没有位移，触发的是点击事件
  console.log('点击事件');
});

dnd.addEventListener('dragend', function () {
  console.log('拖动结束');
});

dnd.addEventListener('dragstart', function (ev) {
  console.log('开始拖动:', ev);
  // 点击开始的时候记录，拖动的点和元素自身的坐标点的偏移量
  offsetX = dnd.offsetLeft - ev.clientX;
  offsetY = dnd.offsetTop - ev.clientY;
});

// 本事件会在拖动的过程中反复触发！！！
dnd.addEventListener('drag', function (ev) {
  console.log('拖动事件：', ev);
  // 移动为0不要计算
  if (ev.clientX == 0 && ev.clientY == 0) {
    return;
  }
  // 移动的时候保持坐标的差值一致
  dnd.style.top = ev.clientY + offsetY + 'px';
  dnd.style.left = ev.clientX + offsetX + 'px';
});

// 手机版本事件
dnd.addEventListener('touchstart', function (ev) {
  let touch = ev.touches[0];
  offsetX = dnd.offsetLeft - touch.clientX;
  offsetY = dnd.offsetTop - touch.clientY;
});

dnd.addEventListener('touchmove', function (ev) {
  let touch = ev.touches[0];
  dnd.style.top = touch.clientY + offsetY + 'px';
  dnd.style.left = touch.clientX + offsetX + 'px';
});

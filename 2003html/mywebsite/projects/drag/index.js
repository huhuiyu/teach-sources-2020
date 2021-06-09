console.log('in index.js=====>');

let dnd = document.getElementById('dnd');
dnd.addEventListener('click', function () {
  console.log('点击拖放元素');
});

// 记录元素所在位置和拖动开始的点的差值
let offsetX = 0;
let offsetY = 0;

dnd.addEventListener('dragstart', function (ev) {
  // 拖动事件只会在产生位移之后才会触发
  // 否则触发是单击事件！！！！
  console.log('拖动开始：', ev);
  // 位置的差值=元素当前坐标值-拖动点的坐标值
  // 元素当前坐标值=位置的差值+拖动点的坐标值
  offsetX = dnd.offsetLeft - ev.clientX;
  offsetY = dnd.offsetTop - ev.clientY;
});

dnd.addEventListener('dragend', function () {
  console.log('拖动结束');
});

dnd.addEventListener('drag', function (ev) {
  // 拖动中事件在移动中会重复触发
  console.log('拖动中', ev);
  // 如果拖动位移为0的时候，不要计算位置
  if (ev.clientX == 0 && ev.clientY == 0) {
    return;
  }
  dnd.style.left = offsetX + ev.clientX + 'px';
  dnd.style.top = offsetY + ev.clientY + 'px';
});

// 手机版本
dnd.addEventListener('touchstart', function (ev) {
  // 触摸事件只要第一个触摸点
  let touch = ev.touches[0];
  offsetX = dnd.offsetLeft - touch.clientX;
  offsetY = dnd.offsetTop - touch.clientY;
});

dnd.addEventListener('touchmove', function (ev) {
  let touch = ev.touches[0];
  dnd.style.top = offsetY + touch.clientY + 'px';
  dnd.style.left = offsetX + touch.clientX + 'px';
});

// 弹出框部分
let btnPopup = document.getElementById('btnPopup');
let maskBox = document.getElementById('maskBox');
let contentBox = document.getElementById('contentBox');

btnPopup.addEventListener('click', function () {
  maskBox.style.display = 'flex';
});

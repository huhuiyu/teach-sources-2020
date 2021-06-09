console.log('in index.js');

let dnd = document.getElementById('dnd');
// 记录移动点和拖动元素的差距值
let offsetX = 0;
let offsetY = 0;

// 电脑版本拖放事件
dnd.addEventListener('click', function () {
  console.log('点击事件');
});

dnd.addEventListener('dragend', function () {
  console.log('拖动结束');
});
dnd.addEventListener('dragstart', function (ev) {
  console.log('拖动开始：', ev);
  // 拖动开始使用减法获取坐标的差距值
  // 元素左距离减去拖动起点的x坐标
  offsetX = dnd.offsetLeft - ev.clientX;
  offsetY = dnd.offsetTop - ev.clientY;
});
// 拖动中事件，会反复的触发
dnd.addEventListener('drag', function (ev) {
  console.log('拖动中：', ev);
  // 如果拖动值为0不要移动
  if (ev.clientX == 0 && ev.clientY == 0) {
    return;
  }
  // 拖动时通过加法计算元素的新位置
  dnd.style.left = ev.clientX + offsetX + 'px';
  dnd.style.top = ev.clientY + offsetY + 'px';
});

// 手机版本
dnd.addEventListener('touchstart', function (ev) {
  let touch = ev.touches[0];
  console.log('触摸开始：', touch);
  // 计算点击位置和元素位置的差值
  offsetX = dnd.offsetLeft - touch.clientX;
  offsetY = dnd.offsetTop - touch.clientY;
});
dnd.addEventListener('touchend', function () {
  console.log('触摸结束');
});
// 触摸移动事件也是会反复触发
dnd.addEventListener('touchmove', function (ev) {
  let touch = ev.touches[0];
  console.log('触摸移动：', touch);
  dnd.style.left = touch.clientX + offsetX + 'px';
  dnd.style.top = touch.clientY + offsetY + 'px';
});

// 弹出层相关部分
let btnOpen = document.getElementById('btnOpen');
let maskBox = document.getElementById('maskBox');
let contentBox = document.getElementById('contentBox');
let btnClose = document.getElementById('btnClose');
let spClose = document.getElementById('spClose');

btnOpen.addEventListener('click', function () {
  maskBox.style.display = 'flex';
  contentBox.classList.remove('moveout');
  contentBox.classList.add('movein');
});

btnClose.addEventListener('click', function () {
  contentBox.classList.remove('movein');
  contentBox.classList.add('moveout');
  // 需要动画完成之后再关闭！！！
  setTimeout(function () {
    maskBox.style.display = 'none';
  }, 0.5 * 1000);
});

spClose.addEventListener('click', function () {
  //元素.click()表示直接触发元素的点击动作
  btnClose.click();
});

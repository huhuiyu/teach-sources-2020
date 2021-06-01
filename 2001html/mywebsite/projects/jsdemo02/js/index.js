console.log('in index.js====>');
let myimg = document.getElementById('myimg');
// 初始位置记录（对应到css中样式初始位置）
let imgleft = 10;
let imgtop = 10;
document.body.addEventListener('keyup', function (event) {
  console.log('按键是：', event.key);

  if ('s' == event.key || 'ArrowDown' == event.key) {
    // s键和方向键下为向下移动
    imgtop = imgtop + 10;
    myimg.style.top = imgtop + 'px';
  } else if ('w' == event.key || 'ArrowUp' == event.key) {
    // w键和方向键上为向上移动
    imgtop = imgtop - 10;
    myimg.style.top = imgtop + 'px';
  } else if ('a' == event.key || 'ArrowLeft' == event.key) {
    // a键和方向键左为向左移动
    imgleft = imgleft - 10;
    myimg.style.left = imgleft + 'px';
  } else if ('d' == event.key || 'ArrowRight' == event.key) {
    // d键和方向键右为向右移动
    imgleft = imgleft + 10;
    myimg.style.left = imgleft + 'px';
  }
});

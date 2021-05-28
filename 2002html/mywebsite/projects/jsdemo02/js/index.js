console.log('in index.js=====>');

let myimg = document.getElementById('myimg');
// 默认位置
let imgtop = 10;
let imgleft = 10;
// 对页面做按键操作监听
document.body.addEventListener('keyup', function (event) {
  console.log('按键：', event.key);
  // s和下箭头键是向下移动
  if ('s' == event.key || 'ArrowDown' == event.key) {
    imgtop = imgtop + 10;
    myimg.style.top = imgtop + 'px';
  }
  // 向上移动
  if ('w' == event.key || 'ArrowUp' == event.key) {
    imgtop = imgtop - 10;
    myimg.style.top = imgtop + 'px';
  }
  // 向右移动
  if ('d' == event.key || 'ArrowRight' == event.key) {
    imgleft = imgleft + 10;
    myimg.style.left = imgleft + 'px';
  }
  // 向左移动
  if ('a' == event.key || 'ArrowLeft' == event.key) {
    imgleft = imgleft - 10;
    myimg.style.left = imgleft + 'px';
  }
});

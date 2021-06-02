console.log('in index.js====>');
let myimg = document.getElementById('myimg');

// 记录初始位置(和css中一致)
let imgtop = 10;
let imgleft = 10;

document.body.addEventListener('keyup', function (ev) {
  console.log('按键：', ev.key);
  if (ev.key == 's' || ev.key == 'ArrowDown') {
    // s和下箭头都是下移
    imgtop = imgtop + 15;
    myimg.style.top = imgtop + 'px';
  } else if (ev.key == 'w' || ev.key == 'ArrowUp') {
    // w和上箭头都是上移
    imgtop = imgtop - 15;
    myimg.style.top = imgtop + 'px';
  } else if (ev.key == 'a' || ev.key == 'ArrowLeft') {
    // a和左箭头都是左移
    imgleft = imgleft - 15;
    myimg.style.left = imgleft + 'px';
  } else if (ev.key == 'd' || ev.key == 'ArrowRight') {
    // d和右箭头都是右移
    imgleft = imgleft + 15;
    myimg.style.left = imgleft + 'px';
  }
});

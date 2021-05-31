console.log('in index.js====>');
let myimg = document.getElementById('myimg');
// 初始位置记录（对应到css中样式初始位置）
let imgleft = 10;
let imgtop = 10;
document.body.addEventListener('keyup', function (event) {
  console.log('按键是：', event.key);
});
// 爸爸的爸爸是爷爷

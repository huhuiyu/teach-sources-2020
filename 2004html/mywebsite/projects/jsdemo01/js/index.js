console.log('进入index.js=====>');
let menu01 = document.getElementById('menu01');
let menu02 = document.getElementById('menu02');
let menu03 = document.getElementById('menu03');
let menu04 = document.getElementById('menu04');
let line = document.getElementById('line');
console.log('相关元素', menu01, menu02, menu03, menu04, line);

menu04.addEventListener('click', function () {
  // 移除线条的所有移动样式
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  // 再添加自己的移动样式
  line.classList.add('move04');
});

menu03.addEventListener('click', function () {
  // 移除线条的所有移动样式
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  // 再添加自己的移动样式
  line.classList.add('move03');
});

menu02.addEventListener('click', function () {
  // 移除线条的所有移动样式
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  // 再添加自己的移动样式
  line.classList.add('move02');
});

menu01.addEventListener('click', function () {
  // 移除线条的所有移动样式
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  // 再添加自己的移动样式
  line.classList.add('move01');
});

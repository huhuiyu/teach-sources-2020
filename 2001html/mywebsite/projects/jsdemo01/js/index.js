console.log('进入index.js=========>');
let menu01 = document.getElementById('menu01');
let menu02 = document.getElementById('menu02');
let menu03 = document.getElementById('menu03');
let menu04 = document.getElementById('menu04');
let line = document.getElementById('line');
let divBg = document.getElementById('divBg');

console.log('菜单相关：', menu01, menu02, menu03, menu04, line, divBg);

menu01.addEventListener('click', function () {
  // remove一次移除多个class
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  line.classList.add('move01');
  // 背景切换代码
  divBg.classList.remove('bg01', 'bg02', 'bg03', 'bg04');
  divBg.classList.add('bg01');
});

menu02.addEventListener('click', function () {
  // remove一次移除多个class
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  line.classList.add('move02');
  // 背景切换代码
  divBg.classList.remove('bg01', 'bg02', 'bg03', 'bg04');
  divBg.classList.add('bg02');
});

menu03.addEventListener('click', function () {
  // remove一次移除多个class
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  line.classList.add('move03');
  // 背景切换代码
  divBg.classList.remove('bg01', 'bg02', 'bg03', 'bg04');
  divBg.classList.add('bg03');
});

menu04.addEventListener('click', function () {
  // remove一次移除多个class
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  line.classList.add('move04');
  // 背景切换代码
  divBg.classList.remove('bg01', 'bg02', 'bg03', 'bg04');
  divBg.classList.add('bg04');
});


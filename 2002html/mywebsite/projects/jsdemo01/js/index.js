console.log('进入index.js======>');
let m01 = document.getElementById('m01');
let m02 = document.getElementById('m02');
let m03 = document.getElementById('m03');
let m04 = document.getElementById('m04');
let line = document.getElementById('line');
let bgDiv = document.getElementById('bgDiv');
console.log('页面元素', m01, m02, m03, m04, line, bgDiv);

m04.addEventListener('click', function () {
  // 一次移除多个class
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  line.classList.add('move04');

  bgDiv.classList.remove('bg01', 'bg02', 'bg03', 'bg04');
  bgDiv.classList.add('bg04');
});

m03.addEventListener('click', function () {
  // 一次移除多个class
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  line.classList.add('move03');

  bgDiv.classList.remove('bg01', 'bg02', 'bg03', 'bg04');
  bgDiv.classList.add('bg03');
});

m02.addEventListener('click', function () {
  // 一次移除多个class
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  line.classList.add('move02');

  bgDiv.classList.remove('bg01', 'bg02', 'bg03', 'bg04');
  bgDiv.classList.add('bg02');
});

m01.addEventListener('click', function () {
  // 一次移除多个class
  line.classList.remove('move01', 'move02', 'move03', 'move04');
  line.classList.add('move01');

  bgDiv.classList.remove('bg01', 'bg02', 'bg03', 'bg04');
  bgDiv.classList.add('bg01');
});

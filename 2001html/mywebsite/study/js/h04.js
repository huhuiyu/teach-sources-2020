console.log('进入h04.js=======>');
// 切换class的相关元素
let divButtons = document.getElementById('divButtons');
let sp01 = document.getElementById('sp01');
let sp02 = document.getElementById('sp02');
let sp03 = document.getElementById('sp03');
console.log('class切换相关元素', divButtons, sp01, sp02, sp03);

sp01.addEventListener('click', function () {
  // 页面元素.classList.add('css中的class名称')
  // 给对应的页面元素添加指定的class属性值
  divButtons.classList.remove('btn2');
  divButtons.classList.add('btn1');
});

sp02.addEventListener('click', function () {
  divButtons.classList.remove('btn1');
  divButtons.classList.remove('btn2');
});

sp03.addEventListener('click', function () {
  divButtons.classList.remove('btn1');
  divButtons.classList.add('btn2');
});

// add方法不论添加多少次同名，js都只会加一次，不会出错
// remove方法不论移除多少次，或者不存在，也不会出错
// 上面多套样式切换需要移除与添加的无关的其它样式，避免层叠

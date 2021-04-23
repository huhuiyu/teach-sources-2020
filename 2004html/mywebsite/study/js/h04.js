console.log('进入h04.js=====>');
// 样式切换相关页面元素
let divButtons = document.getElementById('divButtons');
let sp01 = document.getElementById('sp01');
let sp02 = document.getElementById('sp02');
let sp03 = document.getElementById('sp03');
console.log('样式切换元素：', divButtons, sp01, sp02, sp03);

// 样式一按钮的单击事件
sp01.addEventListener('click', function () {
  // 页面元素.classList.add('css的class名称')
  // 是给页面元素的class添加指定的class名称属性值
  divButtons.classList.remove('btn2');
  divButtons.classList.add('btn1');
});

// 样式二的单击事件
sp02.addEventListener('click', function () {
  // 页面元素.classList.remove('css的class名称')
  // 是将页面元素的指定class名称的属性值移除
  divButtons.classList.remove('btn1');
  divButtons.classList.remove('btn2');
});

// add方法添加多次同一个class值并不会出错，也不会反复的加
// remove方法移除多次或者不存在的class值也不会出错

sp03.addEventListener('click', function () {
  // 多套样式切换，要清楚掉原有的样式
  divButtons.classList.remove('btn1');
  divButtons.classList.add('btn2');
});

// 修改style的部分==================================
let divStyle = document.getElementById('divStyle');
console.log('要修改style的元素：', divStyle);

divStyle.addEventListener('click', function () {
  // 页面元素.style.样式名称='样式值'
  // 直接修改元素的style
  // 样式名称是css名称转换成js名称
  // css:background-color
  // js:backgroundColor
  divStyle.style.backgroundColor = '#ff00ff';
});

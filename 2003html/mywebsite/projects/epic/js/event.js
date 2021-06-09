console.log('in event.js=====>');
let divTop = document.getElementById('divTop');
let div01 = document.getElementById('div01');
let div02 = document.getElementById('div02');
let div0201 = document.getElementById('div0201');
let div0202 = document.getElementById('div0202');
console.log('事件冒泡元素：', divTop, div01, div02, div0201, div0202);

divTop.addEventListener('click', function () {
  console.log('divTop点击事件');
});

div01.addEventListener('click', function () {
  console.log('div01点击事件');
});

div02.addEventListener('click', function () {
  console.log('div02点击事件');
});

div0201.addEventListener('click', function () {
  console.log('div0201点击事件');
});

div0202.addEventListener('click', function (event) {
  console.log('div0202点击事件');
  // 事件对象.stopPropagation()方法可以阻止事件冒泡
  // 也就是父元素不在接收该事件
  event.stopPropagation();
});

// js事件冒泡：
// 当页面元素触发js事件的时候，会由内到外
// （也就是向父元素/上层元素）依次触发该事件
// 一直到顶级元素

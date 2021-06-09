console.log('in event.js=======>');
let divTop = document.getElementById('divTop');
let div01 = document.getElementById('div01');
let div02 = document.getElementById('div02');
let div0201 = document.getElementById('div0201');
let div0202 = document.getElementById('div0202');
console.log('冒泡元素：', divTop, div01, div02, div0201, div0202);

divTop.addEventListener('click', function () {
  console.log('点击divTop');
});

div01.addEventListener('click', function () {
  console.log('点击div01');
});

div02.addEventListener('click', function () {
  console.log('点击div02');
});

div0201.addEventListener('click', function () {
  console.log('点击div0201');
});

// js事件冒泡的意思
// 当元素触发事件的时候，会依次又内到外（也就是向父元素）
// 触发相同的事件，一直传播到顶级的元素
// 简单的说就是，元素触发事件后，它的父元素也触发事件
// 父元素的父元素也触发事件，一直到body这种顶级的元素

div0202.addEventListener('click', function (event) {
  console.log('点击div0202');
  // 事件对象.stopPropagation()方法可以阻止事件冒泡
  // 也就是只有当前元素响应事件
  event.stopPropagation();
});

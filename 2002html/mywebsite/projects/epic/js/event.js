console.log('in event.js=======>');
let divTop = document.getElementById('divTop');
let div01 = document.getElementById('div01');
let div02 = document.getElementById('div02');
let div0201 = document.getElementById('div0201');
let div0202 = document.getElementById('div0202');

divTop.addEventListener('click', function () {
  console.log('divTop被点击');
});
div01.addEventListener('click', function () {
  console.log('div01被点击');
});
div02.addEventListener('click', function () {
  console.log('div02被点击');
});
div0201.addEventListener('click', function () {
  console.log('div0201被点击');
});
div0202.addEventListener('click', function (ev) {
  console.log('div0202被点击');
  // 事件对象..stopPropagation();
  // 意思是阻止事件冒泡
  // 简单的说就是只有触发事件的元素会相应动作
  // 它外层元素都不会触发事件动作
  ev.stopPropagation();
});

// js中的事件冒泡机制
// 从事件触发的最里层的元素开始，每一级上层元素都会触发同样的事件
// 一直传递到顶级body元素
// 次序是从最里层的元素逐渐向上传播

console.log('进入h03.js====>');
// 第一步获取按钮元素
let btn01 = document.getElementById('btn01');
console.log('获取时间的按钮：', btn01);
// 第二步监听点击的事件
// 页面元素.addEventListener('click',function(){
// 点击后要执行的js代码
// });
let count = 0;
let spNow = document.getElementById('spNow');
console.log('用于显示时间的span:', spNow);
btn01.addEventListener('click', function () {
  // 计数加1
  count = count + 1;
  console.log('点击了获取时间的按钮，次数为：', count);
  // 元素.innerHTML用于获取或者设置元素里面的内容
  // 下面的代码会将spNow里面的内容替换成当前的时间
  spNow.innerHTML = new Date();
});

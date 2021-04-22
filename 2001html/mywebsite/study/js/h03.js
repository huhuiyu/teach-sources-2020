console.log('进入h03.js=====>');
// 获取相关的页面元素
let btnNow = document.getElementById('btnNow');
let spNow = document.getElementById('spNow');
let spTime = document.getElementById('spTime');
console.log('时间相关元素', btnNow, spNow, spTime);

// 记录点击次数的变量
let count = 0;
// 单击事件代码格式：
// 页面元素.addEventListener('click',function(){
// 点击页面元素时要执行的js代码
// });
btnNow.addEventListener('click', function () {
  // 计数器加一
  count = count + 1;
  // 获取当前时间
  let now = new Date();
  console.log('点击了获取时间的按钮,次数：', count, now);
  // 将时间显示在spNow里面
  // 页面元素.innerHTML是获取或者设置元素里面的内容
  spNow.innerHTML = now;
  // 自定义时间日期显示方式（Date类型的特有方法）
  // 目标显示格式:2021年4月22日 12:13:14
  let year = now.getFullYear();
  // 月份是0-11,所以需要加一
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  console.log('分部时间信息：', year, month, day, h, m, s);
  spTime.innerHTML =
    year + '年' + month + '月' + day + '日 ' + h + ':' + m + ':' + s;
});

console.log('进入index.js=====>');
let menu01 = document.getElementById('menu01');
let menu02 = document.getElementById('menu02');
let menu03 = document.getElementById('menu03');
let menu04 = document.getElementById('menu04');
let line = document.getElementById('line');
let divMain = document.getElementById('divMain');
console.log('菜单效果相关元素', menu01, menu02, menu03, menu04, line, divMain);

menu04.addEventListener('click', function () {
  // 先删除掉所有的移动样式
  line.classList.remove('move01');
  line.classList.remove('move02');
  line.classList.remove('move03');
  line.classList.remove('move04');
  // 再加自己想要移动位置
  line.classList.add('move04');
  // 切换主区域的背景图片
  divMain.classList.remove('bg01');
  divMain.classList.remove('bg02');
  divMain.classList.remove('bg03');
  divMain.classList.remove('bg04');
  divMain.classList.add('bg04');
});

menu03.addEventListener('click', function () {
  // 先删除掉所有的移动样式
  line.classList.remove('move01');
  line.classList.remove('move02');
  line.classList.remove('move03');
  line.classList.remove('move04');
  // 再加自己想要移动位置
  line.classList.add('move03');
  // 切换主区域的背景图片
  divMain.classList.remove('bg01');
  divMain.classList.remove('bg02');
  divMain.classList.remove('bg03');
  divMain.classList.remove('bg04');
  divMain.classList.add('bg03');
});

menu02.addEventListener('click', function () {
  // 先删除掉所有的移动样式
  line.classList.remove('move01');
  line.classList.remove('move02');
  line.classList.remove('move03');
  line.classList.remove('move04');
  // 再加自己想要移动位置
  line.classList.add('move02');
  // 切换主区域的背景图片
  divMain.classList.remove('bg01');
  divMain.classList.remove('bg02');
  divMain.classList.remove('bg03');
  divMain.classList.remove('bg04');
  divMain.classList.add('bg02');
});

menu01.addEventListener('click', function () {
  // 先删除掉所有的移动样式
  line.classList.remove('move01');
  line.classList.remove('move02');
  line.classList.remove('move03');
  line.classList.remove('move04');
  // 再加自己想要移动位置
  line.classList.add('move01');
  // 切换主区域的背景图片
  divMain.classList.remove('bg01');
  divMain.classList.remove('bg02');
  divMain.classList.remove('bg03');
  divMain.classList.remove('bg04');
  divMain.classList.add('bg01');
});

// 第一步：编写页面内容
// 第二步：基本的页面样式
// 第三步：要变化的页面样式
// 第四步：js获取相关页面元素
// 第五步：js通过相关事件处理页面样式变化
// 两个错误的重灾区，第一是页面元素获取错误（id不匹配）
// 第二个，css名称错误或者是css本身就有错
// 第三个，搞清楚作用的页面元素和动作产生的元素

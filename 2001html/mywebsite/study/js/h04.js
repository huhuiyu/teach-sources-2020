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

// js修改style的部分===================
let divStyle = document.getElementById('divStyle');
console.log('要修改style的元素：', divStyle);

divStyle.addEventListener('click', function () {
  // 页面元素.style.样式名称='样式的值';
  // 直接修改页面元素指定样式！！！！
  // 样式名称是由css格式对应的js格式
  // css格式：background-color
  // js格式：backgroundColor
  divStyle.style.backgroundColor = '#ff00ff';
  divStyle.style.color = '#ffffff';
});

// 激活图标效果部分 =========================
let wx01 = document.getElementById('wx01');
let wx02 = document.getElementById('wx02');
let wx03 = document.getElementById('wx03');
let wx04 = document.getElementById('wx04');
console.log('激活样式相关元素：', wx01, wx02, wx03, wx04);

wx01.addEventListener('click', function () {
  // 不管原来激活的是哪一个，我全部移除掉！！！
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 然后再给当前的元素加上激活

  wx01.classList.add('active');
});

wx02.addEventListener('click', function () {
  // 不管原来激活的是哪一个，我全部移除掉！！！
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 然后再给当前的元素加上激活
  wx02.classList.add('active');
});

wx03.addEventListener('click', function () {
  // 不管原来激活的是哪一个，我全部移除掉！！！
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 然后再给当前的元素加上激活
  wx03.classList.add('active');
});

wx04.addEventListener('click', function () {
  // 不管原来激活的是哪一个，我全部移除掉！！！
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 然后再给当前的元素加上激活
  wx04.classList.add('active');
});

// js，css配合修改页面效果的步骤
// 第一步：编写html页面，完成基本元素的添加
// 第二步：编写基本的css样式（变化前）
// 第三步：编写变化后的css样式并测试
// 第四步：js获取页面元素，通过事件控制css样式变化

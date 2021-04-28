console.log('进入h04.js======>');
let divButtons = document.getElementById('divButtons');
let btnStyle01 = document.getElementById('btnStyle01');
let btnStyle02 = document.getElementById('btnStyle02');
let btnStyle03 = document.getElementById('btnStyle03');
console.log(
  '按钮样式相关元素：',
  divButtons,
  btnStyle01,
  btnStyle02,
  btnStyle03
);

// 样式一点击事件
btnStyle01.addEventListener('click', function () {
  // 通过切换容器的class属性就可以达成换肤的效果
  // 页面元素.classList.add(css的class值)
  // 的效果是将页面元素添加对应的class属性值
  // 该功能可以完美的和css配合达到切换页面样式的能力
  divButtons.classList.add('btn01');
  divButtons.classList.remove('btn02');
});

// 样式二点击事件
btnStyle02.addEventListener('click', function () {
  // 页面元素.classList.remove(css的class值)
  // 是将页面的元素对应的class值移除掉
  divButtons.classList.remove('btn01');
  divButtons.classList.remove('btn02');

  // 多次添加同一个class值，并不会出错，结果只会添加一次
  // 多次移除同一个class值，或者不存在的class值
  // 也不会出错，只会确保该class值不存在了
});

btnStyle03.addEventListener('click', function () {
  // 先去掉同类的样式
  divButtons.classList.remove('btn01');
  divButtons.classList.add('btn02');
});

// 直接修改style样式部分===========================
console.log('==================================');
let divStyle = document.getElementById('divStyle');
console.log('直接修改样式的元素：', divStyle);
divStyle.addEventListener('click', function () {
  // 页面元素.style.样式名称可以直接修改元素的对应样式
  // 样式名称会由css风格转换为js风格
  // css风格：background-color
  // js风格：backgroundColor
  divStyle.style.backgroundColor = '#ffff00';
});

// 激活样式切换部分
let wx01 = document.getElementById('wx01');
let wx02 = document.getElementById('wx02');
let wx03 = document.getElementById('wx03');
let wx04 = document.getElementById('wx04');

wx04.addEventListener('click', function () {
  // 先清除所有元素的激活状态
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 再添加当前元素的激活状态
  wx04.classList.add('active');
});

wx03.addEventListener('click', function () {
  // 先清除所有元素的激活状态
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 再添加当前元素的激活状态
  wx03.classList.add('active');
});

wx02.addEventListener('click', function () {
  // 先清除所有元素的激活状态
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 再添加当前元素的激活状态
  wx02.classList.add('active');
});

wx01.addEventListener('click', function () {
  // 先清除所有元素的激活状态
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 再添加当前元素的激活状态
  wx01.classList.add('active');
});

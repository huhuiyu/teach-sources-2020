console.log('进入h04.js========>');
// 练习：再添加两套按钮风格已经对应的切换功能
// 思考题：页面提供一个表单输入元素，和一个确认按钮
// 用户输入颜色值后点击确认按钮，将页面的背景颜色切换成输入的颜色值

// css样式切换相关元素
let divButtons = document.getElementById('divButtons');
let btn01 = document.getElementById('btn01');
let btn02 = document.getElementById('btn02');
let btn03 = document.getElementById('btn03');

console.log('css样式相关元素：', divButtons, btn01, btn02, btn03);

btn01.addEventListener('click', function () {
  // 页面元素.classList.add('class名称');
  // 给元素添加指定class名称的样式（动态修改class属性）
  // 多次添加不会出错，会自动判断只添加一次
  divButtons.classList.add('btn01');
  divButtons.classList.remove('btn02');
});

btn02.addEventListener('click', function () {
  // 页面元素..classList.remove('class名称')
  // 删除页面元素class名称指定的样式
  // 多次删除或者删除不存在的class名称不会出错
  divButtons.classList.remove('btn01');
  divButtons.classList.remove('btn02');
});

btn03.addEventListener('click', function () {
  // 多套样式切换，需要移除其它的样式，避免层叠
  divButtons.classList.remove('btn01');
  divButtons.classList.add('btn02');
});

// add和remove方法都有一个多参数的版本
// add('class','class2')，可以添加多个class
// remove('class','class2')，可以移除多个class

// style修改的部分
let divStyle = document.getElementById('divStyle');
console.log('要修改style的元素', divStyle);

divStyle.addEventListener('click', function () {
  // 页面元素.style.样式名称='样式值';
  // 直接修改页面元素的样式
  // 样式名称是js风格，效果是css风格
  // css：background-color
  // js：backgroundColor
  divStyle.style.backgroundColor = '#ff00ff';
  divStyle.style.color = '#ffffff';
});

// 切换点击元素样式（active）的部分
let wx01 = document.getElementById('wx01');
let wx02 = document.getElementById('wx02');
let wx03 = document.getElementById('wx03');
let wx04 = document.getElementById('wx04');
console.log('焦点样式元素:', wx01, wx02, wx03, wx04);

wx01.addEventListener('click', function () {
  // 不论前面点的是哪一个，全部移除掉
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 然后当前的元素添加active

  wx01.classList.add('active');
});

wx02.addEventListener('click', function () {
  // 不论前面点的是哪一个，全部移除掉
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 然后当前的元素添加active

  wx02.classList.add('active');
});

wx03.addEventListener('click', function () {
  // 不论前面点的是哪一个，全部移除掉
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 然后当前的元素添加active

  wx03.classList.add('active');
});

wx04.addEventListener('click', function () {
  // 不论前面点的是哪一个，全部移除掉
  wx01.classList.remove('active');
  wx02.classList.remove('active');
  wx03.classList.remove('active');
  wx04.classList.remove('active');
  // 然后当前的元素添加active

  wx04.classList.add('active');
});

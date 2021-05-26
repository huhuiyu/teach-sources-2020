console.log('in h10.js===========>');
let btn01 = document.getElementById('btn01');
let btn02 = document.getElementById('btn02');
let div01 = document.getElementById('div01');
console.log('动态创建部分：', btn01, div01, btn02);

btn01.addEventListener('click', function () {
  // document.createElement('页面标记名称');
  // 动态创建一个对应名称的页面元素
  // 下面是创建一个h1（一级标题）元素
  let ele01 = document.createElement('h1');
  // 元素.append(内容或者元素)
  // 表示在元素中追加内容或者元素
  // 下面是在动态创建的h1中追加内容
  ele01.append('动态创建的一级标签');
  // 把动态创建的h1追加到div01中
  div01.append(ele01);
  // 动态创建的元素和页面元素毫无区别
  ele01.style.color = '#ff0000';
  ele01.addEventListener('click', function () {
    alert('点击动态创建元素');
  });
});

btn02.addEventListener('click', function () {
  // 修改div01的属性
  // title属性的作用是当鼠标悬停在元素上的时候显示信息
  div01.setAttribute('title', '动态修改属性' + new Date());
  div01.setAttribute('style', 'text-align:center;');
});

// 混合创建部分
let btn03 = document.getElementById('btn03');
let txt01 = document.getElementById('txt01');

btn03.addEventListener('click', function () {
  let type = txt01.value.trim();
  let input = document.createElement('input');
  input.setAttribute('type', type);

  div01.append(input);
});

// 年份和月份的选项处理
// <option value="1950">1950年</option>
let sel01 = document.getElementById('sel01');

// 循环的格式
// for(变量初始化;循环是否继续的逻辑判断表达式;每次循环之后要执行的){
//  要循环执行的代码
// }
let nowy = new Date().getFullYear();
for (let i = 1950; i <= nowy; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', i);
  op.append(i + '年');
  sel01.append(op);
}

let sel02 = document.getElementById('sel02');

for (let i = 1; i < 13; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', i);
  op.append(i + '月');
  sel02.append(op);
}

// 指示器控制图片切换的功能
let divPoint = document.getElementById('divPoint');
let myimg = document.getElementById('myimg');
let images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img3.jpg',
  '../images/img4.jpg'
];

// 由图片决定指示器数量，循环生成
for (let i = 0; i < images.length; i++) {
  let sp = document.createElement('span');
  divPoint.append(sp);
  sp.addEventListener('click', function () {
    console.log('单击的指示器：', i, images[i]);
    myimg.setAttribute('src', images[i]);
  });
}

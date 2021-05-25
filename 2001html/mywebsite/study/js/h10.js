console.log('in h10.js======>');
let div01 = document.getElementById('div01');
let btn01 = document.getElementById('btn01');

btn01.addEventListener('click', function () {
  // document.createElement('页面标记的名称')
  // 表示创建一个对应标记的页面元素!!!
  // 下面一句表示创建一个一级标题元素
  let ele = document.createElement('h1');
  // 元素.append(元素或者内容);
  // 表示向元素中追加元素或者内容
  // 下面一行表示在动态创建的一级标题中追加文字信息
  ele.append('动态创建的一级标题！！！！');
  // 这一行表示向div01中追加动态创建的一级标题元素
  div01.append(ele);
  // 动态创建的元素和页面编写的元素毫无区别
  ele.style.color = '#ff0000';
  ele.addEventListener('click', function () {
    alert('点击动态创建的对象');
  });
});

let btn02 = document.getElementById('btn02');
btn02.addEventListener('click', function () {
  // 元素.setAttribute('属性名称','属性值');
  // 表示动态修改元素的指定属性为指定的值
  div01.setAttribute('title', '属性修改:' + new Date());
  div01.setAttribute('style', 'text-align:center;');
});

let txt01 = document.getElementById('txt01');
let btn03 = document.getElementById('btn03');
btn03.addEventListener('click', function () {
  let type = txt01.value;
  let input = document.createElement('input');
  input.setAttribute('type', type);
  div01.append(input);
});

// 动态创建年份的选择项
// <option value="1950">1950年</option>
let sel01 = document.getElementById('sel01');
// for循环格式和语言
// for(变量初始化;循环是否继续的逻辑表达式;每次循环后要执行的){
// 循环要执行的代码
// }

let start = new Date().getTime();
let year = new Date().getFullYear();
for (let i = 1950; i <= year; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', i);
  op.append(i + '年');
  sel01.append(op);
}
let end = new Date().getTime();
console.log('循环时间（毫秒）', end - start);

let sel02 = document.getElementById('sel02');
for (let i = 1; i < 13; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', i);
  op.append(i + '月');
  sel02.append(op);
}

// 图片指示器点击效果
let images = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img12.jpg',
  '../images/xunlei-bg.jpg',
  '../images/batman01.jpg'
];
let divPoint = document.getElementById('divPoint');
let myimg = document.getElementById('myimg');
// 循环生成指示器元素，以确保指示器数量和图片数量一致
for (let i = 0; i < images.length; i++) {
  let sp = document.createElement('span');
  divPoint.append(sp);
  sp.addEventListener('click', function () {
    console.log('点击的指示器对应的i值', i, images[i]);
    // 通过修改src属性来切换图片！！！
    myimg.setAttribute('src', images[i]);
  });
}

console.log('in h10.js=========>');

let div01 = document.getElementById('div01');
let btn01 = document.getElementById('btn01');
let btn02 = document.getElementById('btn02');
console.log('动态创建元素一阶段：', div01, btn01, btn02);

btn01.addEventListener('click', function () {
  // document.createElement('要创建的标记名称')
  // 用于创建一个html元素，元素的类型由参数html标记名称决定
  // 创建出来的元素和写在html页面中的元素毫无区别！！！！
  // 下面的代码，表示创建一个h1（一级标题）元素
  let ele01 = document.createElement('h1');
  // 元素.append(内容或元素)
  // 表示向元素中追加内容或者元素
  // 下面的代码，对创建的一级标题元素里面追加内容
  ele01.append('我是动态创建出来的一级标题元素');
  // 下面的代码，将创建的元素追加到页面上的div01中
  div01.append(ele01);
  // 和页面元素毫无区别
  ele01.style.color = '#ff0000';
  ele01.addEventListener('click', function () {
    alert(new Date());
  });
});

btn02.addEventListener('click', function () {
  div01.append('动态修改属性');
  // 元素.setAttribute('属性名称',属性值);
  // 是动态修改（添加）元素的属性
  // title属性是鼠标悬停在元素上之后的提示信息
  div01.setAttribute('title', '属性修改' + new Date());
  div01.setAttribute('style', 'text-align:center;');
});

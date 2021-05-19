console.log('in h10.js===========>');
let btn01 = document.getElementById('btn01');
let div01 = document.getElementById('div01');
console.log('动态创建部分：', btn01, div01);

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
});

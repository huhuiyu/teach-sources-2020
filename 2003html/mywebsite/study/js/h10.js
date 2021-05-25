console.log('in h10.js=====>');
let btn01 = document.getElementById('btn01');
let div01 = document.getElementById('div01');

btn01.addEventListener('click', function () {
  // document.createElement('页面标记名称')
  // 表示创建一个页面标记名称对应的元素
  // 下面一句表示创建一个一级标题元素
  let ele = document.createElement('h1');
  // 元素.append(元素或者内容);
  // 表示向元素中追加元素或者内容
  // 下面一句表示向动态创建的一级标题元素中添加内容
  ele.append('动态创建的一级标题');
  // 向div01中追加动态创建的一级标题元素
  div01.append(ele);
  // 动态创建的元素和真实的元素，毫无区别！！！！
  ele.style.color = '#ff0000';
  ele.addEventListener('click', function () {
    alert('动态元素的事件');
  });
});

let btn02 = document.getElementById('btn02');
btn02.addEventListener('click', function () {
  // 元素.setAttribute('属性名称','属性的值');
  // 表示将元素对应的属性修改成新的值
  div01.setAttribute('style', 'text-align:center;');
  // title属性是鼠标悬停在元素上的提示信息
  div01.setAttribute('title', '属性动态修改：' + new Date());
});

// 动态创建混合使用
let txt01 = document.getElementById('txt01');
let btn03 = document.getElementById('btn03');

btn03.addEventListener('click', function () {
  let attr = txt01.value;
  let input = document.createElement('input');
  input.setAttribute('type', attr);
  div01.append(input);
  // radio,checkbox,password,number,date,file
});

// 练习1：输入工资，校验有效范围
// 显示工资为蓝领，白领，金领
// 练习2：输入工资，校验有效范围
// 显示工资对应的应缴所得税

// <option value="1950">1950年</option>
let sel01 = document.getElementById('sel01');
let start = new Date().getTime();

let nowy = new Date().getFullYear();

for (let i = 1950; i <= nowy; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', i);
  op.append(i + '年');
  sel01.append(op);
}

let end = new Date().getTime();
console.log('循环添加花费的时间（毫秒）', end - start);
// 循环格式和语义
// for(变量初始化;循环是否继续的逻辑表达式;每次循环后要执行的){
//   每次循环要执行的代码
// }

let sel02 = document.getElementById('sel02');
for (let i = 1; i < 13; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', i);
  op.append(i + '月');
  sel02.append(op);
}

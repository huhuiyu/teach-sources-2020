// dom：文档对象模型，简单的说就是页面对应的js对象
console.log('dom对象：',document);
// 获取页面元素（通过id）
let btnDom = document.getElementById('btnDom');
let divDom = document.getElementById('divDom');
console.log('id对应的元素',btnDom,divDom);

let txtDom = document.getElementById('txtDom');

// 点击事件
btnDom.addEventListener('click',function(){
  console.log('btnDom点击事件');
  // 动态的修改页面内容
  let info = txtDom.value + '的随机数：'+Math.random()*10000;
  // 动态创建页面元素
  let div = document.createElement('div');
  // 追加文字信息
  div.append(info);
  // 添加到页面元素divDom中
  divDom.appendChild(div);

});


// 简单应用处理部分
let txtName = document.getElementById('txtName');
let txtSex = document.getElementById('txtSex');
let txtClass = document.getElementById('txtClass');
let btnAddInfo = document.getElementById('btnAddInfo');
let tbData = document.getElementById('tbData');

// 编号自动处理
let no = 10000;

btnAddInfo.addEventListener('click',function(){
  // 创建tr元素
  let tr = document.createElement('tr');
  // 编号的td
  let td = document.createElement('td');
  td.append(no);
  // 追加到tr中
  tr.appendChild(td);
  no++;
  // 姓名的td
  td = document.createElement('td');
  td.append(txtName.value);
  tr.appendChild(td);

  // 追加到tbody中
  tbData.appendChild(tr);
});
// dom其实是文档对象模型的意思，简单理解就是html页面的js对象
console.log('dom对象：',document);
// 获取页面的一部分（通过唯一的id）
let btnDom = document.getElementById('btnDom');
let divDom = document.getElementById('divDom');
let txtName = document.getElementById('txtName');
console.log('指定id的元素：',btnDom,divDom,txtName);

// 页面元素的事件处理
btnDom.addEventListener('click',function(){
  console.log('btnDom点击事件');
  // 利用dom创建元素并添加到页面
  let info = txtName.value + '的随机数：'+Math.random()*1000;
  // 创建元素
  let div = document.createElement('div');
  div.append(info);
  // 追加到页面指定的元素中
  divDom.appendChild(div);
});

// 动态表格数据的部分 ===============
let txtUserName =document.getElementById('txtUserName');
let txtClass =document.getElementById('txtClass');
let txtSex =document.getElementById('txtSex');
let btnAddInfo =document.getElementById('btnAddInfo');
let tbData =document.getElementById('tbData');
// 编号自动生成
let no=100;
btnAddInfo.addEventListener('click',function(){
  // 创建tr
  let tr = document.createElement('tr');
  // 编号的td
  let td = document.createElement('td');
  tr.appendChild(td);
  td.append(no);
  no++;
  // 姓名的td(值是页面输入)
  let userName = txtUserName.value;
  td = document.createElement('td');
  tr.appendChild(td);
  td.append(userName);

  // 添加tr到表格中
  tbData.appendChild(tr);
});
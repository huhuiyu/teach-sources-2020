// dom文档对象模型，可以简单的理解成页面对应的js对象
console.log(document);
// 获取页面元素（id方式）
let btnDom = document.getElementById('btnDom');
let divDom = document.getElementById('divDom');
console.log('id元素',btnDom,divDom);
let txtDom = document.getElementById('txtDom');

// 元素的事件
btnDom.addEventListener('click',function(){
  console.log('点击btnDom');
  // 动态创建和添加元素
  let info = txtDom.value + '的随机数：'+Math.random()*1000;
  // 创建元素
  let div = document.createElement('div');
  // 追加文本信息
  div.append(info);
  // 追加元素
  divDom.appendChild(div);

});

// 简单应用部分============================
let tbData = document.getElementById('tbData');
let txtName = document.getElementById('txtName');
let txtSex = document.getElementById('txtSex');
let txtClass = document.getElementById('txtClass');
let txtAddInfo = document.getElementById('txtAddInfo');

// 编号自定义
let no = 100;
txtAddInfo.addEventListener('click',function(){
  // 动态创建表格内容
  // 创建tr
  let tr = document.createElement('tr');
  // 编号的td
  let td = document.createElement('td');
  td.append(no);
  no++;
  tr.appendChild(td);
  // 姓名的td
  let name = txtName.value;
  td = document.createElement('td');
  td.append(name);
  tr.appendChild(td);

  // 添加到表格
  tbData.appendChild(tr);
  resetForm();
});

// 重置表单信息
function resetForm() {
  txtName.value='';
  txtSex.value='';
  txtClass.value='';
  // 元素获取焦点
  txtName.focus();
}

resetForm();


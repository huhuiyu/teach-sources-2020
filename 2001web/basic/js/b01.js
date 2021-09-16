// dom 文档对象模型 document,object,model
// 简单的理解成html页面对应的js对象
console.log(document);

// 获取页面的元素（id方式）
let btnDom = document.getElementById('btnDom');
let divDom = document.getElementById('divDom');
console.log('id对应的元素',btnDom,divDom);

let txtDom = document.getElementById('txtDom');

// 添加事件（单击）
btnDom.addEventListener('click',function(){
  console.log('点击事件');
  let info = txtDom.value + '的随机数：'+Math.random()*10000;
  // 创建元素并且添加到页面
  let div = document.createElement('div');
  // 追加内容
  div.append(info);
  // 追加元素
  divDom.appendChild(div);

});


// 简单应用的部分
let txtName = document.getElementById('txtName');
let txtSex = document.getElementById('txtSex');
let txtClass = document.getElementById('txtClass');
let btnAddInfo = document.getElementById('btnAddInfo');
let tbData = document.getElementById('tbData');

let no =10000;
btnAddInfo.addEventListener('click',function(){
  let tr = document.createElement('tr');
  // 编号的td
  let td = document.createElement('td');
  td.append(no);
  no++;
  // 追加到tr中
  tr.appendChild(td);
  // 姓名的td
  td = document.createElement('td');
  td.append(txtName.value);
  tr.appendChild(td);

  // 追加tr到tbody
  tbData.appendChild(tr);
});


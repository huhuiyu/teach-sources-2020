let selType = document.getElementById('selType');
let txtName = document.getElementById('txtName');
let txtPrice = document.getElementById('txtPrice');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');
let tbData = document.getElementById('tbData');

// 数据的部分,const声明常量
const GOODS_KEY = 'goods-info-list'; //本地保存的名称
// 商品的分类
let types = ['饮料', '零食', '电器', '虚拟物品'];
// 商品的数组
let goodsList = [];

// 初始化商品分类
function initTypes() {
  selType.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let type = types[i];
    let op = document.createElement('option');
    op.setAttribute('value', type);
    op.append(type);
    selType.appendChild(op);
  }
}

initTypes();

// 添加商品
btnAdd.addEventListener('click', function () {
  let goods = {
    type: '',
    name: '',
    price: 0
  };
  // 获取商品信息
  goods.type = selType.value;
  goods.name = txtName.value;
  goods.price = parseFloat(txtPrice.value);
  // 添加到数组中
  goodsList.push(goods);
  console.log('商品列表', goodsList);
  saveData();
  showGoodsList();
});

// 显示商品列表
function showGoodsList() {
  tbData.innerHTML = '';
  for (let i = 0; i < goodsList.length; i++) {
    let goods = goodsList[i];
    let tr = document.createElement('tr');
    // 序号
    let td = document.createElement('td');
    td.append(i + 1);
    tr.appendChild(td);
    // 分类
    td = document.createElement('td');
    td.append(goods.type);
    tr.appendChild(td);
    // 名称
    td = document.createElement('td');
    td.append(goods.name);
    tr.appendChild(td);
    // 售价
    td = document.createElement('td');
    td.append(goods.price);
    tr.appendChild(td);

    tbData.appendChild(tr);
  }
}

// 保存数据
function saveData() {
  let data = JSON.stringify(goodsList);
  localStorage.setItem(GOODS_KEY, data);
}

// 读取数据
function loadData() {
  let data = localStorage.getItem(GOODS_KEY);
  if (data) {
    goodsList = JSON.parse(data);
  }
  showGoodsList();
}

loadData();
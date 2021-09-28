let selType = document.getElementById('selType');
let txtName = document.getElementById('txtName');
let txtPrice = document.getElementById('txtPrice');
let btnAdd = document.getElementById('btnAdd');
let btnReset = document.getElementById('btnReset');
let tbData = document.getElementById('tbData');

// 数据的部分 const是常量声明
const GOODS_KEY = 'goods_info_2001';
let types = ['饮料', '虚拟物品', '数码', '食品']; //类型
let goodsList = []; //商品

// 初始化商品类型
function initType() {
  selType.innerHTML = '';
  for (let i = 0; i < types.length; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', types[i]);
    op.append(types[i]);
    selType.appendChild(op);
  }
}

initType();

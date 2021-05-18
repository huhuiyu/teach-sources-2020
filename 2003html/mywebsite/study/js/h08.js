console.log('in h08.js=========>');

let divNow = document.getElementById('divNow');
console.log('时间显示元素：', divNow);

// function最简单的理解就是用一个名称表示一段代码
// 格式：
// function 名称(){
//   调用function时要执行的js代码
// }
// 调用方式：
// function的名称();
function showNow() {
  let now = new Date();
  let h = now.getHours();
  let mm = now.getMinutes();
  let s = now.getSeconds();
  //?:三元表达式
  //如果?前面的逻辑表达式为真就执行:前面的代码
  //如果为假就执行:后面的代码
  h = h < 10 ? '0' + h : h;
  mm = mm < 10 ? '0' + mm : mm;
  s = s < 10 ? '0' + s : s;

  divNow.innerHTML = h + ':' + mm + ':' + s;
}

showNow();

setInterval(function () {
  showNow();
}, 1000);

let divTime = document.getElementById('divTime');
console.log('外部function显示时间元素', divTime);
// 调用common.js中的function
let result = getFormatNow();
divTime.innerHTML = result;

setInterval(function () {
  divTime.innerHTML = getFormatNow();
}, 1000);
// 熵增定律

// 整数判断
let txtNumb1 = document.getElementById('txtNumb1');
let txtNumb2 = document.getElementById('txtNumb2');
let btnNumb = document.getElementById('btnNumb');
console.log('整数判断元素：', txtNumb1, txtNumb2, btnNumb);

btnNumb.addEventListener('click', function () {
  let num1 = txtNumb1.value;
  let num2 = txtNumb2.value;
  console.log('输入的是否为整数：', isInt(num1), isInt(num2));
});

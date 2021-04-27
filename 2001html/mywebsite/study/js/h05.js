console.log('进入h05.js====>');
let txtNumb = document.getElementById('txtNumb');
let btnNumb = document.getElementById('btnNumb');
let spNumb = document.getElementById('spNumb');
console.log('数值输入验证相关元素', txtNumb, btnNumb, spNumb);

btnNumb.addEventListener('click', function () {
  // 进入判断前清理信息
  spNumb.innerHTML = '';
  // 第一步：获取输入的信息
  // trim是字符串特有的方法，表示去掉头尾的空白字符
  let numb = txtNumb.value.trim();
  console.log('输入的值是：', numb);
  // 第二步，判断是否有输入信息
  // 表单的输入值类型都是字符串
  // if流程判断的格式
  // if(逻辑判断表达式){
  //    逻辑判断表达式为true（真）时要执行的js代码
  // }
  // 逻辑判断表达式只能是true,false两个结果
  // ==是用于判断符号前后的两个值是否相等
  // 下面的表达式意思是，numb是否为空字符串
  if ('' == numb) {
    spNumb.innerHTML = '请输入信息！！！！';
    return;
  }
  console.log('必须输入的检查通过。。。。');
  // 第三步，判断是否为数值
  // isNaN(值) 用于判断值是否不是数
  // 不是的返回true，是的返回假
  // isNaN是 is not a number的缩写
  if (isNaN(numb)) {
    spNumb.innerHTML = '输入的必须是数！';
    return;
  }
  // return关键字表示无条件中断当前方法的执行！！！
  console.log('校验通过。。。');
});

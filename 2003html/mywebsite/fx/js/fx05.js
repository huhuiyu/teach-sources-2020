let txtnum = document.getElementById('txtnum');
let btnfor = document.getElementById('btnfor');
let divfor = document.getElementById('divfor');

btnfor.addEventListener('click', function () {
  let num = parseInt(txtnum.value);
  // for(变量初始化;循环是否继续的逻辑表达式;每次循环完执行)
  for (let i = 0; i < num; i++) {
    divfor.append('我爱你' + (i + 1) + '次 ');
  }
});

let div99 = document.getElementById('div99');
for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    let span = document.createElement('span');
    span.append(j + '×' + i + '=' + j * i + ' ');
    div99.append(span);
  }
  let br = document.createElement('br');
  div99.append(br);
}

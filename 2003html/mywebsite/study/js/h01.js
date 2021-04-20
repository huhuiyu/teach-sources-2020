console.log('外部的js文件');
// JavaScript获取页面信息的能力
let txtdemo = document.getElementById('txtdemo');
let spdemo = document.getElementById('spdemo');
txtdemo.addEventListener('keyup', function () {
  spdemo1.innerHTML = txtdemo.value;
});

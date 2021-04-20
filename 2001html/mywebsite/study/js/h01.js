console.log('外部js文件');
// JavaScript可以获取页面的信息
let txtdemo = document.getElementById('txtdemo');
let divdemo = document.getElementById('divdemo');

txtdemo.addEventListener('keyup', function () {
  divdemo.innerHTML = txtdemo.value;
});

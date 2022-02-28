// 验证第三方库是否正常导入
console.log('qs====>', Qs);
console.log('axios====>', axios);
console.log('spark-md5====>', SparkMD5);
console.log('vue====>', Vue);

// 演示效果
let txtInfo = document.getElementById('txtInfo');
let spInfo = document.getElementById('spInfo');

txtInfo.addEventListener('keyup', function () {
  spInfo.innerHTML = txtInfo.value;
});

// vue版本
new Vue({
  el: '#app',
  data: {
    info: ''
  }
});

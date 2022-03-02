// 原生js的部分 ==================
let txtInfo = document.getElementById('txtInfo');
let spInfo = document.getElementById('spInfo');

txtInfo.addEventListener('keyup', function () {
  spInfo.innerHTML = txtInfo.value;
});

// vue的部分 =======================
new Vue({
  el: '#app',
  data: {
    info: ''
  }
});

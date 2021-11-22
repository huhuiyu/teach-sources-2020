// document.querySelector('css选择器')，获取css选择器匹配的页面元素
// document.querySelectorAll('css选择器')，可以匹配多个，返回的是数组
let divAlert = document.querySelector('#div-alert');
let btnAlert = document.getElementById('btnAlert');

btnAlert.addEventListener('click', function () {
  divAlert.style.display = 'block';
  setTimeout(function () {
    // 通过bs的js方法延时自动关闭对话框
    bootstrap.Alert.getOrCreateInstance(divAlert).close();
  }, 3000);
});

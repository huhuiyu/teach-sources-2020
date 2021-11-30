let divDialog = document.getElementById('divDialog');

// bs5特定元素的特定事件
divDialog.addEventListener('shown.bs.modal', function () {
  console.log('对话框已经打开！');
});

divDialog.addEventListener('hidden.bs.modal', function () {
  console.log('对话框已经关闭！');
});

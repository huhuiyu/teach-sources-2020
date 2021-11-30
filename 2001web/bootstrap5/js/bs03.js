let mydialog = document.getElementById('mydialog');

// bootstrap特有的元素的特有事件
mydialog.addEventListener('shown.bs.modal', function () {
  console.log('对话框显示完毕');
});

mydialog.addEventListener('hidden.bs.modal', function () {
  console.log('对话框关闭完成');
});

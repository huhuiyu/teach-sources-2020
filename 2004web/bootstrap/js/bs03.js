let btnClose = document.getElementById('btnClose');

// 对已有功能按钮添加事件不影响原有动作
btnClose.addEventListener('click', function () {
  console.log('点击了打开对话框按钮');
});

let divDialog = document.getElementById('div-dialog');
// bs5对话框自定义事件
divDialog.addEventListener('shown.bs.modal', function () {
  console.log('对话框已经显示完成');
  document.querySelector('.modal-body input:first-of-type').focus();
});
divDialog.addEventListener('hidden.bs.modal', function () {
  console.log('对话框已经关闭完成');
});

// 通过js控制显示和关闭对话框
// 转换页面对话框元素为bootstrap对象，方便调用相应的功能
let bsDialog = bootstrap.Modal.getOrCreateInstance(divDialog);

setTimeout(function () {
  // 显示对话框
  bsDialog.show();
}, 2000);

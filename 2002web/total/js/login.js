let btnLogin = document.getElementById('btnLogin');
let txtPwd = document.getElementById('txtPwd');
let txtName = document.getElementById('txtName');
let divInfo = document.getElementById('divInfo');
// 这个是对话框的页面元素
let divDialog = document.getElementById('divDialog');
// 这个是转换成bs5的对话框对象，拥有js控制对话框的方法
let bsDialog = bootstrap.Modal.getOrCreateInstance(divDialog);

btnLogin.addEventListener('click', function () {
  ajaxRequest(
    '/user/login',
    {
      tbAdmin: {
        username: txtName.value,
        password: SparkMD5.hash(txtPwd.value)
      }
    },
    function (data) {
      console.log(data);
      if (data.success) {
        // 跳转到首页
        location = 'main.html';
      } else {
        divInfo.innerHTML = data.message;
        // js控制对话框显示
        bsDialog.show();
      }
    }
  );
});

// 用户名，密码，登录，重置，昵称

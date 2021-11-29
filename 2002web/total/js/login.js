let btnLogin = document.getElementById('btnLogin');
let txtPwd = document.getElementById('txtPwd');
let txtName = document.getElementById('txtName');
let divInfo = document.getElementById('divInfo');
let divDialog = document.getElementById('divDialog');

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
      } else {
        divInfo.innerHTML = data.message;
        bsDialog.show();
      }
    }
  );
});

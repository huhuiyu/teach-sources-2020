let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let divError = document.getElementById('divError');
let btnLogin = document.getElementById('btnLogin');

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
      if (data.success) {
        divError.innerHTML = '';
        // 成功要跳首页
      } else {
        divError.innerHTML = data.message;
      }
    }
  );
});

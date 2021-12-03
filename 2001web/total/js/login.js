let btnLogin = document.getElementById('btnLogin');
let divError = document.getElementById('divError');
let txtPwd = document.getElementById('txtPwd');
let txtName = document.getElementById('txtName');

btnLogin.addEventListener('click', function () {
  ajax(
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
        // 成功跳转到用户首页
        location = 'main.html';
      } else {
        divError.innerHTML = data.message;
      }
    }
  );
});

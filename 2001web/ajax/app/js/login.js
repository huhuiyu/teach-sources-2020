// 登录功能
let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function () {
  let tbAdmin = {
    username: txtName.value,
    password: SparkMD5.hash(txtPwd.value)
  };
  ajax(
    '/user/login',
    {
      tbAdmin: tbAdmin
    },
    function (data) {
      if (data.success) {
        alert('登录成功');
      } else {
        alert(data.message);
      }
    }
  );
});

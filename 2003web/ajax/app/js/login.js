let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function () {
  let tbAdmin = {
    username: txtName.value,
    password: SparkMD5.hash(txtPwd.value)
  };

  ajaxRequest(
    '/user/login',
    {
      tbAdmin: tbAdmin
    },
    function (data) {
      // 通过success判断登录是否成功
      if (data.success) {
        // 成功就跳转到首页
        location = 'main.html';
      } else {
        // 不成功就显示原因
        alert(data.message);
      }
    }
  );
});

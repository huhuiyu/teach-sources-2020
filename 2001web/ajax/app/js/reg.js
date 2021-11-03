// 测试md5加密
console.log(SparkMD5.hash('abc'));
// 注册功能
let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let txtNickname = document.getElementById('txtNickname');
let btnReg = document.getElementById('btnReg');

btnReg.addEventListener('click', function () {
  let tbAdmin = {
    username: txtName.value,
    password: SparkMD5.hash(txtPwd.value),
    nickname: txtNickname.value
  };
  ajax(
    '/user/reg',
    {
      tbAdmin: tbAdmin
    },
    function (data) {
      alert(data.message);
    }
  );
});

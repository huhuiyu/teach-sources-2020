// 测试md5加密
let md5info = 'abc';
console.log('md5加密', md5info, md5(md5info));

// 用户注册
let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let txtNickname = document.getElementById('txtNickname');
let btnReg = document.getElementById('btnReg');

btnReg.addEventListener('click', function () {
  // 按照服务器格式收集数据
  let tbAdmin = {
    username: txtName.value,
    password: md5(txtPwd.value),
    nickname: txtNickname.value
  };
  // 注册
  ajaxRequest(
    '/user/reg',
    {
      tbAdmin: tbAdmin
    },
    function (data) {
      alert(data.message);
    }
  );
});

document.getElementById('btnLogin').addEventListener('click', function () {
  location = 'login.html';
});

// 作业2：完成班级信息管理功能，要求和部门管理功能同进度
// 作业3：美化所有上课和练习的界面

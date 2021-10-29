// 图片校验（需要token认证）
let imgCode = document.getElementById('imgCode');

function laodImgCode() {
  ajaxRequest(
    '/test/imageCode',
    {},
    function (data) {
      console.log('图片验证码：', data);
      imgCode.setAttribute('src', data.message);
    },
    'get'
  );
}

laodImgCode();

imgCode.addEventListener('click', laodImgCode);

let txtCode = document.getElementById('txtCode');
let btnCode = document.getElementById('btnCode');

btnCode.addEventListener('click', function () {
  ajaxRequest(
    '/test/checkImageCode',
    {
      imageCode: txtCode.value
    },
    function (data) {
      alert(data.message);
    }
  );
});
// 作业：班级和学生信息的联动
// 模式一：双select
// 模式二：select触发table

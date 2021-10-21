let imgCode = document.getElementById('imgCode');
let aimg = document.getElementById('aimg');
let txtCode = document.getElementById('txtCode');
let btnCheck = document.getElementById('btnCheck');

// 加载图片校验码功能
function loadImgCode() {
  ajaxRequest(
    '/test/imageCode',
    {},
    function (data) {
      console.log(data);
      // 如果服务正确应答，那么message就是图片，设置成src属性
      if (data.success) {
        imgCode.setAttribute('src', data.message);
      } else {
        alert(data.message);
      }
    },
    'get'
  );
}

loadImgCode();

// 更换图片
aimg.addEventListener('click', loadImgCode);
imgCode.addEventListener('click', loadImgCode);

// 校验图片码是否正确
btnCheck.addEventListener('click', function () {
  let code = txtCode.value;
  ajaxRequest(
    '/test/checkImageCode',
    {
      imageCode: code
    },
    function (data) {
      alert(data.message);
    }
  );
});

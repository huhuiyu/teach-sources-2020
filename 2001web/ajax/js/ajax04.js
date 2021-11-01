// 获取图片校验码
let imgCode = document.getElementById('imgCode');

function loadImageCode() {
  ajax(
    '/test/imageCode',
    {},
    function (data) {
      console.log('图片校验码信息：', data);
      if (data.success) {
        imgCode.setAttribute('src', data.message);
      }
    },
    'get'
  );
}

loadImageCode();

imgCode.addEventListener('click', loadImageCode);

// 校验的部分
let txtCode = document.getElementById('txtCode');
let btnCode = document.getElementById('btnCode');

btnCode.addEventListener('click', function () {
  ajax(
    '/test/checkImageCode',
    {
      imageCode: txtCode.value
    },
    function (data) {
      alert(data.message);
    }
  );
});

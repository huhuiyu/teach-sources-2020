// 图片校验（需要token认证）

function laodImgCode() {
  ajaxRequest('/test/imageCode',{},function(data){
    console.log('图片验证码：',data)
  },'get');
}

laodImgCode();
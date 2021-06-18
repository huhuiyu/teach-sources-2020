let btnMusic = document.getElementById('btnMusic');
let chkPlay = document.getElementById('chkPlay');
let myaudio = document.getElementById('myaudio');

let audios = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1111&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=12&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=13&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=8&tbOssInfo.obid=1'
];

btnMusic.addEventListener('click', function () {
  // 随机挑选
  let index = parseInt(Math.random() * audios.length);
  // 元素.setAttribute('属性名称',属性值)
  // 用于设置元素的属性
  // 媒体（视频，音频，图片）元素的src属性值
  // 是指向要显示的媒体文件地址
  // 所以更换该属性值就会更换显示的媒体文件
  myaudio.setAttribute('src', audios[index]);
  myaudio.play();
  myaudio.loop = true;
});

chkPlay.addEventListener('change', function () {
  console.log('控制播放状态的复选框是否选中', chkPlay.checked);
  chkPlay.checked ? myaudio.play() : myaudio.pause();
});

// 监听音频文件是否已经加载完成
myaudio.addEventListener('loadeddata', function () {
  console.log('音频文件已经加载完毕');
});
// img元素是否加载完毕是监听load事件

let videos = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1109&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1110&tbOssInfo.obid=3'
];

let images = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=3&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=98&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=631&tbOssInfo.obid=1'
];

let btnVideo = document.getElementById('btnVideo');
let myvideo = document.getElementById('myvideo');

let indexv = 0;

btnVideo.addEventListener('click', function () {
  indexv = (indexv + 1) % videos.length;
  myvideo.setAttribute('src', videos[indexv]);
});
myvideo.addEventListener('loadeddata', function () {
  myvideo.play();
});

let btnImage = document.getElementById('btnImage');
let myimage = document.getElementById('myimage');
let indexm = 0;

btnImage.addEventListener('click', function () {
  indexm = (indexm + 1) % images.length;
  myimage.setAttribute('src', images[indexm]);
});

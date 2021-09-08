let myvideo = document.getElementById('myvideo');
let btnvideo = document.getElementById('btnvideo');

let videos = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1109&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1110&tbOssInfo.obid=3'
];
let audios = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1111&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=12&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=8&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=1112&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=8&tbOssInfo.obid=1'
];

let images = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=3&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=98&tbOssInfo.obid=3',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=631&tbOssInfo.obid=1'
];

let vindex = 0;
btnvideo.addEventListener('click', function () {
  vindex = (vindex + 1) % videos.length;
  // setAttribute表示修改元素的属性值
  // 而视频的src属性决定了视频的地址
  myvideo.setAttribute('src', videos[vindex]);
  myvideo.currentTime = 0;
  myvideo.play();
});

document.getElementById('btnpause').addEventListener('click', function () {
  myvideo.pause();
});

let btnMusic = document.getElementById('btnMusic');
let chkMusic = document.getElementById('chkMusic');
let myaudio = document.getElementById('myaudio');

btnMusic.addEventListener('click', function () {
  let index = parseInt(Math.random() * audios.length);
  myaudio.setAttribute('src', audios[index]);
});

// loadeddata事件，音频和视频元素特别的事件，表示内容已经加载
myaudio.addEventListener('loadeddata', function () {
  myaudio.play();
});

chkMusic.addEventListener('change', function () {
  console.log('选中状态变化：', chkMusic.checked);

  chkMusic.checked ? myaudio.play() : myaudio.pause();
});

//  https://huhuiyu.top/teach-demo-service/docs.html
// https://myoss.huhuiyu.top/#!/route/page/main
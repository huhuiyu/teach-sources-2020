// 全局过滤器定义
// 格式化时间的过滤器
// filter的格式
/*
Vue.filter('filter的名称',处理filte数据的function(){
  function的第一个参数是过滤器前面数据
  第二个参数开始才是传递给过滤器的其它参数
  过滤器要有返回值供页面显示
});
调用方式（页面），任意注入值表达式里面使用
例如 {{vue的值表达式  | filter名称([参数列表...]) }}
表示将vue的值传入对应filter进行处理
属性注入也可以使用filter 例如 :title="vue的值表达式  | filter名称"
*/
Vue.filter('formatDate', function (value, format) {
  console.log('formatDate的数据：', value, format);
  if (!value) {
    return '';
  }
  // 处理时间格式
  format = format ? format : 'yyyy-MM-dd hh:mm:ss';
  let date = new Date();
  date.setTime(value);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  // 自己做前导补零
  let result = format.replace(/yyyy/g, year);
  result = result.replace(/MM/g, month);
  result = result.replace(/dd/g, day);
  result = result.replace(/hh/g, hour);
  result = result.replace(/mm/g, minute);
  result = result.replace(/ss/g, second);
  return result;
});

// 复制jsona的数据到jsonb
function copyJsonInfo(jsona, jsonb) {
  // 副本复制，不要原值复制
  jsona = JSON.parse(JSON.stringify(jsona));
  console.log('传入json：', jsona, jsonb);
  for (let key in jsona) {
    console.log('jsona信息', key, jsona[key]);
    jsonb[key] = jsona[key];
  }
}

// 性别相关
const SEX_LIST = [
  { value: 'm', text: '男生' },
  { value: 'f', text: '女生' },
  { value: 'n', text: '保密' },
];

// 性别显示的filter
Vue.filter('sex', function (value) {
  for (let i = 0; i < SEX_LIST.length; i++) {
    let data = SEX_LIST[i];
    if (data.value == value) {
      return data.text;
    }
  }
  return '性别数据错误';
});

// 文件选择方法封装，第一个参数是文件选择后的回调
// 第二个参数（可选）文件类型过滤
function openFile(cb, accept) {
  let file = document.createElement('input');
  file.setAttribute('type', 'file');
  if (accept) {
    file.setAttribute('accept', accept);
  }
  file.addEventListener('change', function () {
    cb(file.files[0]);
  });
  file.click();
}

// 复制文本到剪贴板
function copyText(text) {
  // 创建文本框并设置内容
  let input = document.createElement('input');
  input.value = text;
  // input.readOnly = 'readonly';
  // 添加到页面并全选
  document.body.appendChild(input);
  input.focus();
  input.select();
  input.setSelectionRange(0, input.value.length); //兼容苹果
  // 调用浏览器的复制功能并移除文本框
  document.execCommand('Copy');
  document.body.removeChild(input);
}

// 预览图片（获取图片信息）,参数一是文件对象，参数二是读取完成后的回调
function loadImageData(file, cb) {
  if (!file) {
    cb('');
    return;
  }
  if (file.type.substr(0, 6) != 'image/') {
    cb('');
    return;
  }
  // 读取图片文件内容
  let fr = new FileReader();
  // 监听文件读取完成事件
  fr.addEventListener('load', function () {
    cb(fr.result);
  });
  // 读取
  fr.readAsDataURL(file);
}

// 文件类型过滤
const FILE_TYPES = [
  { value: '', text: '全部类型' },
  { value: 'image/', text: '图片' },
  { value: 'audio/', text: '音频' },
  { value: 'video/', text: '视频' },
  { value: 'text/', text: '文本' },
];

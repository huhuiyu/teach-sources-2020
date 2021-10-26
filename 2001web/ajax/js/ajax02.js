let selProvince = document.getElementById('selProvince');
let selCity = document.getElementById('selCity');
let btnOk = document.getElementById('btnOk');
let spInfo = document.getElementById('spInfo');
let plist = []; //省份列表
let clist = []; //城市列表

// 后端api接口的访问根地址
const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';

// 省份信息查询
// url就是后端文档中Path
// data就是后端文档中Parameters
// method就是后端文件最开始的地方声明的
function queryProvince() {
  let promise = axios({
    url: SERVER_BASE_URL + '/linkinfo/queryAllProvince',
    data: Qs.stringify({}),
    method: 'post'
  });
  // 应答的结果看后端文档中的Responses
  promise
    .then(function (resp) {
      console.log('请求省份信息的结果：', resp.data);
      plist = resp.data.resultData.list;
      console.log('省份的数组：', plist);
      showProvince();
    })
    .catch(function (err) {
      console.error(err);
    });
}

queryProvince();
// 显示省份信息
function showProvince() {
  for (let i = 0; i < plist.length; i++) {
    let p = plist[i];
    console.log('循环省份信息：', p);
    let op = document.createElement('option');
    op.setAttribute('value', p.pid);
    op.append(p.province);
    selProvince.appendChild(op);
  }
  // 设置默认选中中间值
  selProvince.selectedIndex = parseInt(plist.length / 2);
  // 立即查询城市
  queryCity();
}

// 查询城市的信息
function queryCity() {
  // 需要选中的省份的id
  let pid = selProvince.value;
  let promise = axios({
    url: SERVER_BASE_URL + '/linkinfo/queryCityByProvince',
    data: Qs.stringify({
      'tbCity.pid': pid
    }),
    method: 'post'
  });
  promise
    .then(function (resp) {
      clist = resp.data.resultData.list;
      console.log('城市的数组：', clist);
      showCity();
    })
    .catch(function (err) {
      console.error(err);
    });
}

function showCity() {
  selCity.innerHTML = '';
  for (let i = 0; i < clist.length; i++) {
    let c = clist[i];
    let op = document.createElement('option');
    op.setAttribute('value', c.cid);
    op.append(c.city);
    selCity.appendChild(op);
  }
}

// 联动事件
selProvince.addEventListener('change', queryCity);
// 作业：完成班级和学生信息联动
// 两种模式都要完成
// 也就是学生信息要呈现成select和table两种

btnOk.addEventListener('click', function () {
  let pindex = selProvince.selectedIndex;
  let cindex = selCity.selectedIndex;
  let p = plist[pindex];
  let c = clist[cindex];
  spInfo.innerHTML = '确定：' + p.province + c.city;
});

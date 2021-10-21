let selProvince = document.getElementById('selProvince');
let selCity = document.getElementById('selCity');
let btnOk = document.getElementById('btnOk');
let spInfo = document.getElementById('spInfo');

// 服务器接口地址
const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';

// 省份信息查询
function queryProvince() {
  let promise = axios({
    url: SERVER_BASE_URL + '/linkinfo/queryAllProvince',
    data: Qs.stringify({}),
    method: 'post'
  });
  promise
    .then(function (resp) {
      console.log('省份信息：', resp.data);
      // 获取省份的列表
      let list = resp.data.resultData.list;
      console.log('省份列表：', list);
      // 循环处理省份数组
      for (let i = 0; i < list.length; i++) {
        let p = list[i];
        console.log('具体信息：', p);
        // 生成下拉选项
        let op = document.createElement('option');
        op.setAttribute('value', p.pid);
        op.append(p.province);
        selProvince.appendChild(op);
      }
      selProvince.selectedIndex = parseInt(list.length / 2);
      // 立即查询对应的城市信息
      queryCity();
      // alt + shift + F
    })
    .catch(function (err) {
      console.error(err);
    });
}

queryProvince();

// 联动城市的信息
function queryCity() {
  let pid = selProvince.value;
  let promise = axios({
    url: SERVER_BASE_URL + '/linkinfo/queryCityByProvince',
    data: Qs.stringify({ 'tbCity.pid': pid }),
    method: 'post'
  });
  promise
    .then(function (resp) {
      console.log('城市信息：', resp.data);
      let list = resp.data.resultData.list;
      selCity.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        let c = list[i];
        let op = document.createElement('option');
        op.append(c.city);
        op.setAttribute('value', c.cid);
        selCity.appendChild(op);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

// 省份联动
selProvince.addEventListener('change', queryCity);

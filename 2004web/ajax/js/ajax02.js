let selProvince = document.getElementById('selProvince');
let selCity = document.getElementById('selCity');

const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';
// 记住省份城市列表
let provinceList = [];
let cityList = [];

// 数据联动的数据获取
// 获取省份信息
function queryProvince() {
  let promise = axios({
    url: SERVER_BASE_URL + '/linkinfo/queryAllProvince',
    data: Qs.stringify({}),
    method: 'post'
  });
  promise
    .then(function (resp) {
      let data = resp.data;
      console.log('查询省份信息的结果', data);
      // 获取省份信息的数组
      let list = data.resultData.list;
      provinceList = list;

      console.log('省份的数组', list);
      // 生成下拉列表
      selProvince.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        let p = list[i];
        console.log('循环的省份：', p);
        let op = document.createElement('option');
        // 值是省份的编号，服务器查询只需要编号！！
        op.setAttribute('value', p.pid);
        op.append(p.province);
        selProvince.appendChild(op);
      }
      // 设置默认选中中间项
      let index = parseInt(list.length / 2);
      selProvince.selectedIndex = index;
      // 立即查询设置省份的城市信息
      queryCity();
    })
    .catch(function (err) {
      console.error(err);
    });
}

queryProvince();

// 城市信息的查询
function queryCity() {
  let pid = selProvince.value;
  console.log('选中的省份id：', pid);
  let promise = axios({
    url: SERVER_BASE_URL + '/linkinfo/queryCityByProvince',
    data: Qs.stringify({ 'tbCity.pid': pid }),
    method: 'post'
  });
  promise
    .then(function (resp) {
      let data = resp.data;
      console.log('城市查询的结果', data);
      selCity.innerHTML = '';
      let list = data.resultData.list;
      cityList = list;
      for (let i = 0; i < list.length; i++) {
        let c = list[i];
        let op = document.createElement('option');
        op.setAttribute('value', c.cid);
        op.append(c.city);
        selCity.appendChild(op);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

// 联动的核心就是a的数据变化触发b的数据变化
selProvince.addEventListener('change', queryCity);

// 获取选中信息的部分
let btnShow = document.getElementById('btnShow');
let spShow = document.getElementById('spShow');

btnShow.addEventListener('click', function () {
  // 索引
  let pindex = selProvince.selectedIndex;
  let cindex = selCity.selectedIndex;
  // 值
  let pid = selProvince.value;
  let cid = selCity.value;
  console.log('选中的信息：', pindex, cindex, pid, cid);
  //  获取选中具体信息
  let p = provinceList[pindex];
  let c = cityList[cindex];
  console.log('详细信息：', p, c);
  spShow.innerHTML = p.province + '省' + c.city + '市';
});

// 作业：仿造上课的省份城市联动完成班级和学生的联动效果

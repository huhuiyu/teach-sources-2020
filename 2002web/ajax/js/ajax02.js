let selProvince = document.getElementById('selProvince');
let selCity = document.getElementById('selCity');

const SERVER_BASE_URL = 'https://huhuiyu.top/teach-service';
// 记住省份和城市的列表
let provinceList = [];
let cityList = [];

// 通过服务器查询联动数据
// 省份查询
function queryProvice() {
  let promise = axios({
    url: SERVER_BASE_URL + '/linkinfo/queryAllProvince',
    data: Qs.stringify({}),
    method: 'post'
  });
  promise
    .then(function (resp) {
      let data = resp.data;
      console.log('查询省份的结果：', data);
      // 获取服务器返回的省份的数组
      let list = data.resultData.list;
      provinceList = list;
      console.log('省份信息的数组：', list);
      // 显示到下拉列表中
      selProvince.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        let p = list[i];
        console.log('循环获取的省份信息:', p);
        let op = document.createElement('option');
        // 选择值是省份的编号，因为服务器只需要编号
        op.setAttribute('value', p.pid);
        // 显示文本才是省份的名称
        op.append(p.province);
        selProvince.appendChild(op);
      }
      // 设置成选中中间值
      let index = parseInt(list.length / 2);
      selProvince.selectedIndex = index;
      // 立即调用城市查询
      queryCity();
    })
    .catch(function (err) {
      console.error(err);
    });
}

queryProvice();

// 城市信息的查询
function queryCity() {
  // 查询城市需要省份的编号（pid）
  let pid = selProvince.value;
  console.log('选中的省份编号：', pid);
  let promise = axios({
    url: SERVER_BASE_URL + '/linkinfo/queryCityByProvince',
    data: Qs.stringify({ 'tbCity.pid': pid }),
    method: 'post'
  });
  promise
    .then(function (resp) {
      let data = resp.data;
      console.log('城市的信息：', data);
      // 显示城市的信息到列表
      let list = data.resultData.list;
      cityList = list;
      selCity.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        let c = list[i];
        let op = document.createElement('option');
        op.setAttribute('value', c.cid);
        op.append(c.city);
        selCity.appendChild(op);
      }
      selCity.selectedIndex = parseInt(list.length / 2);
    })
    .catch(function (err) {
      console.error(err);
    });
}

// 联动的核心就是a选中的数据变化，出发b的数据变化
selProvince.addEventListener('change', queryCity);

// 获取选中数据的部分
let btnShow = document.getElementById('btnShow');
let spShow = document.getElementById('spShow');

btnShow.addEventListener('click', function () {
  let pindex = selProvince.selectedIndex;
  let cindex = selCity.selectedIndex;
  let pid = selProvince.value;
  let cid = selCity.value;
  console.log('选中的数据', pindex, cindex, pid, cid);
  let province = provinceList[pindex];
  let city = cityList[cindex];
  console.log('选中的详细信息', province, city);
  spShow.innerHTML = province.province + city.city;
});

// 练习：仿造上课的内容完成班级和学生信息的联动查询
// ajax访问数据的核心点
// 1：请求的url，不同url带来不同的功能
// 2：请求的method（方式），由服务器端决定
// 3：请求的数据
// 4：应答的结果，正确或者错误

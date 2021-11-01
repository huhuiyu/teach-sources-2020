ajaxRequest('/', { echo: '作业要是独立的目录' }, function (data) {
  alert(data.message);
});

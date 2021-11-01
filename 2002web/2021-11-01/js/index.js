ajaxRequest('/', { echo: '作业都是独立的' }, function (data) {
  alert(data.message);
});

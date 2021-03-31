let hours = document.querySelector('.center-time > span:nth-child(1)');
let minutes = document.querySelector('.center-time > span:nth-child(3)');
let seconds = document.querySelector('.center-time > span:nth-child(4)');

function showTime() {
  let now = new Date();
  let h = now.getHours();
  hours.innerHTML = h > 9 ? h : '0' + h;
  let m = now.getMinutes();
  minutes.innerHTML = m > 9 ? m : '0' + m;
  let s = now.getSeconds();
  seconds.innerHTML = s > 9 ? s : '0' + s;

  setTimeout(showTime, 1000);
}

showTime();

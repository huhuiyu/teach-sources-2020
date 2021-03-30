let hours = 
  document.querySelector('.time-div > span:nth-child(1)');
let minutes = 
  document.querySelector('.time-div > span:nth-child(3)');
let seconds = 
  document.querySelector('.time-div > span:nth-child(4)');

function showTime() {
  let now = new Date();
  hours.innerHTML = now.getHours()>9?
    now.getHours():'0'+now.getHours();
  minutes.innerHTML=now.getMinutes()>9?
    now.getMinutes():'0'+now.getMinutes();
  seconds.innerHTML=now.getSeconds()>9?
    now.getSeconds():'0'+now.getSeconds();
  setTimeout(showTime, 1000);
}

showTime();

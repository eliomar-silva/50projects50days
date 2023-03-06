const btn = document.getElementById('btn');
const hourEl = document.querySelector('.hours')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ['Sunday','Monday', 'Tuesday', 'Wednesday',  "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

btn.addEventListener('click', (btn) => {
  const html = document.querySelector('html');

  if(html.classList.contains('dark')) {
    html.classList.remove('dark')
    btn.target.innerHTML = 'Dark mode'
  }else {
    html.classList.add('dark');
    btn.target.innerHTML = 'Light mode';
  }
});


function setTime() {
  const time = new Date();
  const hours = time.getHours();
  const hoursForClock = hours >= 13? hours % 12 : hours
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const ampm = hours >= 12 ? 'PM': 'AM';
  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();


  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
  minEl.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 60, 0, 360)}deg)`;
  secEl.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 60, 0, 360)}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${min >= 10 ? min : `0${min}`} ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
} 

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


setTime();

setInterval(setTime, 1000);

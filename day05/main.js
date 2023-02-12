const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading');

let load = 1;

let time = setInterval(loading, 25);

function loading() {
  load++;
  if(load > 99) {
    clearInterval(time);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = 1 - ( load * 0.01)  ;
  bg.style.filter = `blur(${30 - (load * 0.30)}px)`;  
}




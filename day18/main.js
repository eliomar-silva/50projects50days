const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');

let imgActive = 0;


setBgBody();

leftBtn.addEventListener('click', () => {
  imgActive--;
  if(imgActive < 0) {
    imgActive = slides.length -1;
  }

  changeImg();  
  setBgBody();
})
rightBtn.addEventListener('click', () => {
  imgActive++;
  if(imgActive > slides.length - 1) {
    imgActive = 0;
  }

  changeImg();  
  setBgBody();
})


function setBgBody() {
  body.style.backgroundImage  = slides[imgActive].style.backgroundImage;
}

function changeImg() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[imgActive].classList.add('active');
}
const sliderContainer = document.querySelector('.slider-container');
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');
const btnDown = document.querySelector('.down-btn');
const btnUp = document.querySelector('.up-btn');
const slidesLength = slideRight.querySelectorAll('div').length;

btnDown.addEventListener('click',() => changeSlide('down'))
btnUp.addEventListener('click', () => changeSlide('up'))

let slideIdx = 0;

const changeSlide = (direction) => {
  const slideHeight = sliderContainer.clientHeight;
  if(direction === 'up') {
    slideIdx++;
    if(slideIdx > slidesLength - 1) {
      slideIdx = 0;
    }
  }  
  if(direction === 'down') {
    slideIdx--;
    if(slideIdx < 0) {
      slideIdx = slidesLength - 1;
    }
  }   
  
  slideRight.style.transform = `translateY(-${slideIdx * slideHeight }px)`;
  slideLeft.style.transform = `translateY(${slideIdx * slideHeight }px)`;
}
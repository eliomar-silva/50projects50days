const imgcontain = document.querySelector('.img-container');
const img = document.querySelectorAll('.img-container img');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let count = 0;

const changeImg = () => { 
  if(count > img.length - 1) {
    count = 0;  
  } else if( count < 0) {
    count = img.length - 1;
  }
  
  imgcontain.style.transform = `translateX(-${count * 500}px)`; 
}
const resetInterval = () => {
  clearInterval(timeChangeImg);
  timeChangeImg = setInterval(run, 2000);
}

nextBtn.addEventListener('click', () => {
  count++;  
  changeImg();
  resetInterval()
})
prevBtn.addEventListener('click', () => {
  count--;  
  changeImg();
  resetInterval();
})

const run = () => {
  count++;
  changeImg();
};

run();

let timeChangeImg = setInterval(run, 2000);
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');


let circleActive = 1;

next.addEventListener('click', ()=>{
  circleActive++; 
  updateProgress();
})
prev.addEventListener('click', ()=>{
    circleActive--; 
  updateProgress();
})


function updateProgress() {

  circles.forEach((circles, idx) => { 
    if(idx < circleActive) {   
      circles.classList.add('active');
      console.log(idx, circleActive, 'add');
    }else {
      console.log(idx, circleActive, 'remove');
      circles.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');
  progress.style.width =(((actives.length - 1) / (circles.length - 1)) * 100) + '%';

  if(circleActive === 1) {
    prev.disabled = true;
  }else if(circleActive === circles.length){
    next.disabled = true;
  }else {
    prev.disabled = false;
    next.disabled = false;
  } 
}
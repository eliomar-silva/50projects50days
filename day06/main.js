const content = document.querySelectorAll('.content');

window.addEventListener('scroll', moveScroll);

moveScroll();

function moveScroll() {
  const innerHe = window.innerHeight - 200;
  content.forEach(box => {  
    const bound = box.getBoundingClientRect();
    
    if(bound.top < innerHe) {
      box.classList.add('show');      
    }else {
      box.classList.remove('show');
    }    
  })
}


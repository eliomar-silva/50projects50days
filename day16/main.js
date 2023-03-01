const smallGlass = document.querySelectorAll('.glass-small');
const percentage = document.getElementById('percentage');
const emptySpace = document.getElementById('empty-space')
const liters = document.getElementById('liters');

smallGlass.forEach((glass, idx) => {
  glass.addEventListener('click', () => {
    getFullClass(idx);   
    updateBigGlass()
  })
})

const getFullClass = (glassClickIdx) => {
if(glassClickIdx === 7 && smallGlass[glassClickIdx].classList.contains('full')) {
  --glassClickIdx
}
if(smallGlass[glassClickIdx].classList.contains('full') && 
!smallGlass[glassClickIdx].nextElementSibling.classList.contains('full')) {
  --glassClickIdx
}

  smallGlass.forEach((glass, idx) => {    
    if(glassClickIdx >= idx) {
      glass.classList.add('full');
    }else {
      glass.classList.remove('full');
    }
  })
}

const updateBigGlass = () => {
  const fullGlass = document.querySelectorAll('.full').length;
  const totalGlass = smallGlass.length;

  if(fullGlass === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0; 
  }else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullGlass / totalGlass * 330}px`;  
    percentage.innerText = `${(100 * fullGlass )/ totalGlass }%`;  
  }

  if(fullGlass === totalGlass) {
    emptySpace.style.visibility = 'hidden';
    emptySpace.style.height = 0;
  }
  else {
    emptySpace.style.visibility = 'visible';
    liters.innerText = `${2 - (fullGlass * 0.25)}L`;

  }
}

updateBigGlass();
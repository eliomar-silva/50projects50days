const textare = document.getElementById('textare');
const tagsEl = document.getElementById('tags');
let startTime = false;
let intervalo ;
let timeOut ;

textare.focus();

textare.addEventListener('keyup', (e) => {
  const inputValue = e.target.value;    

  if(e.key === 'Enter') {
    e.target.value = '';
  
    rendomPick();
    startTime = true
  } else if(startTime) {
    startTime = false;
    cancelSection();
    console.log('clear');
  } 

  const tag = inputValue.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  tagsEl.innerText = '';

  tag.forEach((tag)=> {
    const newTag = document.createElement('span');
    newTag.innerText = tag;
    newTag.classList.add('tag');
    tagsEl.appendChild(newTag);
  })
 
})

function rendomPick() {
  
  intervalo = setInterval(() => {
    const randomTag = randomSelect();

      randomTag.classList.add('active');      
      setTimeout(() => {       
        randomTag.classList.remove('active');
        
      }, 100);
  }, 100);
  timeOut = setTimeout(() => {
    clearInterval(intervalo);   
    setTimeout(() => {
      const randomTag = randomSelect();
      randomTag.classList.add('active');   
    }, 110);
  }, 3000);
}

function cancelSection() {
  clearTimeout(intervalo);
  clearTimeout(timeOut);
}

function randomSelect() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}
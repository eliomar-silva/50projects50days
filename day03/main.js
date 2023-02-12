const close = document.getElementById('close');
const open = document.getElementById('open');
const container = document.getElementById('container');
 
open.addEventListener('click', () => {
  container.classList.add('show-nav');
})
close.addEventListener('click', () => {
  container.classList.remove('show-nav');
})
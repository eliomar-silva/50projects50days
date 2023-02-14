const ps = document.querySelector('.ps');
const xbox = document.querySelector('.xbox');
const content = document.querySelector('.content');

ps.addEventListener('mouseenter', () => {
  content.classList.add('psIsHover'); 
})
ps.addEventListener('mouseleave', () => {
  content.classList.remove('psIsHover'); 
})
xbox.addEventListener('mouseenter', () => {
  content.classList.add('xboxIsHover');

})
xbox.addEventListener('mouseleave', () => {
  content.classList.remove('xboxIsHover');
})
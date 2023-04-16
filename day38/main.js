const listItems = document.querySelectorAll('ul li');
const imgs = document.querySelectorAll('.conteiner .img img');

listItems.forEach((item, idx) => {
  item.addEventListener('click', ()=>{
    listItems.forEach((item) => item.classList.remove('active'));
    imgs.forEach((item) => item.classList.remove('active'));
    
    item.classList.add('active');
    imgs[idx].classList.add('active');
  });
  
})

console.log(listItems);
const loveME = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let firstClick = 0;
let timeClick = 0;

let offsetTop = 0;
let offsetLeft = 0;

addEventListener('resize', () => {
  offsetHandler();
});

const offsetHandler = () => {
  offsetTop = loveME.offsetTop;
  offsetLeft = loveME.offsetLeft;
};

offsetHandler();

loveME.addEventListener('click', (e) => {
  if(firstClick === 0) {
    firstClick = new Date().getTime();       
  } else {
    if(new Date().getTime() - firstClick < 800) {      
      createHeart(e);
      firstClick = 0;
    } else {     
      firstClick = new Date().getTime();
    }
  }  
})

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fa-solid');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;


  // const offsetLeft = e.target.offsetLeft;
  // const offsetTop = e.target.offsetTop; 
 

  loveME.appendChild(heart);

  heart.style.top = `${y - offsetTop}px`;
  heart.style.left = `${x - offsetLeft}px`;

  times.innerHTML = ++timeClick;


  console.log(offsetLeft);
  setTimeout(() => {
    heart.remove();
  }, 1000);
}
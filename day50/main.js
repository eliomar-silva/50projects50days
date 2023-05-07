const screens = document.querySelectorAll('.screen');
const btn_startGame = document.getElementById('start-btn');
const btn_choose_insect = document.querySelectorAll('.choose-insect-btn');
const game_container = document.getElementById('game-container');
const message = document.getElementById('message');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');

let selected_insect = {};
let score = 0;
let seconds  = 0;

btn_startGame.addEventListener('click', () => screens[0].classList.add('up'));

btn_choose_insect.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    selected_insect = { src, alt};
    screens[1].classList.add('up');
    startGame();    
  })
})

const startGame = () => {
  setTimeout(() => {
    createInsect();
  }, 1000);
  setInterval(() => {
    increaseTime();
  }, 1000);
}
const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}`: m;
  s = s < 10 ? `0${s}`: s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;  
}
const createInsect = () => {
  const insect_create = document.createElement('div');
  insect_create.classList.add('insect');
  const {random_width, random_height} = getRandomLocation();
  insect_create.style.top = `${random_height}px`;
  insect_create.style.left = `${random_width}px`;
  insect_create.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)"></img>`;
  insect_create.addEventListener('click', () => catchInsect(insect_create));
  game_container.appendChild(insect_create);
}

const getRandomLocation = () => {
  const screen_width = window.innerWidth;
  const screen_height = window.innerHeight;
  const random_width = Math.random() * ((screen_width - 80) - 120) + 120;
  const random_height = Math.random() * ((screen_height - 80) - 120) + 120;
  return {random_width, random_height}
}


const catchInsect = (insect) => {
  increasesScore();
  insect.classList.add('caught');
  setTimeout(() => {
    insect.remove();  
  }, 2000);

  addInsects();
}

const addInsects = () => {
  setTimeout(() => {
    createInsect();
  }, 1000);
  setTimeout(() => {
    createInsect();
  }, 1500);
}

const increasesScore = () => {
  score++;

  if(score > 19) {
    message.classList.add('visible')
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
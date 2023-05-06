const btn_startGame = document.getElementById('start-btn');
const screens = document.querySelectorAll('.screen');

btn_startGame.addEventListener('click', () => screens[0].classList.add('up'))
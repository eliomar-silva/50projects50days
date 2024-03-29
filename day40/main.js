const boxes = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click',() => boxes.classList.toggle('active'));

const createBox = () => {
  for(let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `-${x * 125}px -${y * 125}px`;
      boxes.appendChild(box);      
    }   
  }
}

createBox();
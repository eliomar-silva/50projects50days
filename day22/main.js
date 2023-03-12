const canvas = document.getElementById('canvas');
const clearEl = document.getElementById('clear');
const colorEl = document.getElementById('color');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const sizeEl = document.querySelector('.size');
const ctx = canvas.getContext('2d');


let isPressed = false;
let size = 10;
let color = 'black';

let x;
let y;

canvas.addEventListener('mousedown', (e) =>  {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
})
canvas.addEventListener('mouseup', (e) =>  {
  isPressed = false;
})

canvas.addEventListener('mousemove', (e) => {
if(isPressed){  
  const x2 = e.offsetX;
  const y2 = e.offsetY;

  draw(x2,y2);
  drawLine(x,y,x2 ,y2);

  x = x2;
  y = y2;
}

})

const draw = (x, y) => {
  ctx.beginPath();
  ctx.arc(x,y, size, 0,Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
const drawLine = (x, y, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x2,y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}


increaseBtn.addEventListener('click', () => {
  size += 5;

  if(size >= 50) {
    size = 50;
  }

  sizeEl.innerText = size;
})
decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if(size <= 5) {
    size = 5;
  }

  sizeEl.innerText = size;
})


colorEl.addEventListener('change', (e) => {
  color = e.target.value;
})

clearEl.addEventListener('click',() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})
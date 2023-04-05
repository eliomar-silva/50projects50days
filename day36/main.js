const container = document.getElementById('container');

const boxs = 500;

// const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
const colors = ['#00ffff', '#00ff95' ,'#1eff00', '#fbff00' , ' #ff2f2f', '#ff2fba', '#892fff'] ;
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

for (let i = 0; i < boxs; i++) {
  const box = document.createElement('div');
  box.classList.add('box');

  box.addEventListener('mouseover',() => setColor(box))
  
  box.addEventListener('mouseout',() => removeColor(box) )
  
  container.appendChild(box);
}

const setColor = (element) => {
  const bgColor = randomColor();
  element.style.background = `${bgColor}`;  
  element.style.transition = '0s ease';  
  element.style.boxShadow = `0px 0px 10px rgba(255, 255, 255, 0.3),0px 0px 5px ${bgColor}`;  
}

const removeColor = (element) => {
  element.style.background = '#1d1d1d';
  element.style.transition = '2s ease';
  element.style.boxShadow = '0px 0px 2px #000'; 
};

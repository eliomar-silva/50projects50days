const unsplashURL = 'https://source.unsplash.com/random/';
const container = document.querySelector('.container');

const types = ['?city','?nigh','?fruit','?nature', '?animal'];
const row = 15;


const getRandomSize = () => {
  const random = Math.floor(Math.random() * 10) + 900;
  return `${random}x${random}`;
}

const getRandomtypes = () => {
  const random = Math.floor(Math.random() * (types.length - 0) + 0);
  return types[random];
}


for(let i = 0; i < row; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}/${getRandomSize()}/${getRandomtypes()}`;
  container.appendChild(img);  
}






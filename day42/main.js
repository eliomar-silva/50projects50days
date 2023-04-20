
const resultEle = document.getElementById('result');


const getData = async () => {
  const res = await fetch('https://randomuser.me/api?results=50');
  const  {results} = await res.json();

  resultEle.innerHTML = '';
  

  results.forEach(user => {
    const { picture, name, location} = user;

    const userLi = document.createElement('li');

    userLi.innerHTML = `
      <img src="${picture.large}" alt="image of ${name.first} ${name.last}"></img>
      <div class="user-infor">
        <h3>${name.first} ${name.last}</h3>
        <p>${location.city}, ${location.country}</p>
      </div>
    `;   
    
    resultEle.appendChild(userLi);
  })
}

getData();
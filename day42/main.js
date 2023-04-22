const searchEle = document.getElementById('filter');
const resultEle = document.getElementById('result');
const listUser = []

searchEle.addEventListener('input',(e) => searchUser(e.target.value));

const getData = async () => {
  const res = await fetch('https://randomuser.me/api?results=50');
  const  {results} = await res.json(); 

  resultEle.innerHTML = '';  

  results.forEach(user => {
    const { picture, name, location} = user;

    const userLi = document.createElement('li');

    listUser.push(userLi);

    userLi.innerHTML = `
      <img src="${picture.large}" alt="image of ${name.first} ${name.last}"></img>
      <div class="user-infor">
        <h3>${name.first} ${name.last}</h3>
        <p>${location.city}, ${location.country}</p>
      </div>
    `;   
    userLi.classList.remove
    resultEle.appendChild(userLi);
  })
}

const searchUser = (search) => {
  listUser.forEach(item => {
    if(item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove('hide');
    }else {
      item.classList.add('hide');
    }
  })
} 

getData();
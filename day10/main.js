const jokeElem = document.getElementById('joke');
const btn = document.getElementById('button');

btn.addEventListener('click', getJoke);

getJoke();

async function getJoke() {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      'accept': 'application/json'
    }
  });
  const data = await res.json();

  jokeElem.innerText = data.joke;
}
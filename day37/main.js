const container = document.querySelector('.container');
const countPokem = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors);

const getPokemon = async () => {
  for (let i = 1; i <= countPokem; i++) {
    const url = await `https://pokeapi.co/api/v2/pokemon/${i}`;
    const res = await fetch(url);
    const data = await res.json(res);
    
    createPokemonCart(data);     
  }
}

const createPokemonCart = (data) => {
  const cart = document.createElement('div');
  cart.classList.add('cart');

  const name = data.name.toUpperCase();
  const id = data.id.toString().padStart(3,'0');

  const {front_default : pokemon_img} = data.sprites;

  const types = data.types.map(type => type.type.name);
  const color_type = main_types.find(type => types.indexOf(type) > -1)
  const color = colors[color_type];

  cart.style.backgroundColor = color;


  const pokemonInnerHTML = `
  <div class="img">
    <img src="${pokemon_img}" alt="${name}"></img>
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: ${color_type}</small>
  </div>
  `;
  cart.innerHTML = pokemonInnerHTML;

  container.appendChild(cart);
}

getPokemon();
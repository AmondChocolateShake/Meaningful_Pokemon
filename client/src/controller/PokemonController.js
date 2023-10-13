import PokeModel from '../model/PokeModel.js';

const pokeModel = new PokeModel([], [], []);

//모든 포켓몬 가져오기.
function getAllPokemons(req, res) {
  const data = pokeModel.getPokemons();
  console.log(data)
  res.json(data);
}

let pokemonData = [
  { id: 1, name: '피카츄', type: '전기', owned: false, favorite: false },
  { id: 2, name: '파이리', type: '불', owned: true, favorite: false },
  { id: 3, name: '꼬부기', type: '물', owned: true, favorite: true },
];

//포켓몬 데이터 업데이트
function updatePokemon(req, res) {
  const updatedData = req.body;
  pokeModel.pushNewCollection(updatedData);
  console.log(updatedData)
  res.sendStatus(200);
}


function getFavoritePokemons(req, res) {
  const data = pokeModel.getFavoritePokemons();
  console.log(data)
  res.json(data);
}

const addPokemonData = [
  { id: 4, name: '냐옹', type: '노말', owned: false, favorite: true },
]

updatePokemon(pokemonData);
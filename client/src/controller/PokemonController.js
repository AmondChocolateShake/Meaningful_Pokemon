import PokeModel from '../model/PokeModel.js';

const pokeModel = new PokeModel([], [], []);

//모든 포켓몬 가져오기.
export function getAllPokemons(req, res) {
  const data = pokeModel.getPokemons();
  console.log(data)
  res.json(data);
}

//포켓몬 데이터 업데이트
export function updatePokemon(req, res) {
  const updatedData = req.body;
  pokeModel.pushNewCollection(updatedData);
  console.log(updatedData)
  res.sendStatus(200);
}

//좋아요 한 포켓몬 가져오기
export function getFavoritePokemons(req, res) {
  const data = pokeModel.getFavoritePokemons();
  console.log(data)
  res.json(data);
}


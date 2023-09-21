//모든 포켓몬 가져오기.
function getAllPokemons(req,res) {
  const data = getPokemons();
  res.json(data);
}

//포켓몬 데이터 업데이트
function updatePokemonData(updatedData) {
  pokemonData = updatedData;
}
function updatePokemon(req, res) {
  const updatedData = req.body;
  updatePokemonData(updatedData);
  res.sendStatus(200);
}
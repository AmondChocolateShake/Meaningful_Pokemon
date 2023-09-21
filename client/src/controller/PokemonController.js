function getAllPokemons(req,res) {
  const data = getPokemonData();
  res.json(data);
}

function updatePokemonData(updatedData) {
  pokemonData = updatedData;
}

function getAllPokemon(req, res) {
  const data = getPokemonData();
  res.json(data);
}

// 포켓몬을 업데이트하는 컨트롤러 액션
function updatePokemon(req, res) {
  const updatedData = req.body;
  updatePokemonData(updatedData);
  res.sendStatus(200);
}
function getAllPokemons(req,res) {
  const data = getPokemonData();
  res.json(data);
}

function updatePokemonData(updatedData) {
  pokemonData = updatedData;
}

function updatePokemon(req, res) {
  const updatedData = req.body;
  updatePokemonData(updatedData);
  res.sendStatus(200);
}
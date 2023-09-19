function getAllPokemons(req,res) {
  const data = getPokemonData();
  res.json(data);
}

import React from "react";

const pokemonData = {
  "1": "Bulbasaur",
  "2": "Ivysaur",
  "3": "Venusaur",
  "4": "Charmander",
  "5": "Charmeleon",
  "6": "Charizard",
  "7": "Squirtle",
  "8": "Wartortle",
  "9": "Blastoise",
  "10": "Caterpie",
  "11": "Metapod",
  "12": "Butterfree",
  "13": "Weedle",
  "14": "Kakuna",
}

function PokemonList(){
  return (
    <div>
        {Object.entries(pokemonData).map(([id,name])=>(
          <div key={id}>{`${id} : ${name}`}</div>
        ))}
    </div>
  )
}

export default PokemonList;
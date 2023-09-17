import React from "react";
import PokemonElement from "./PokemonElement";
import './PokemonList.css'
import SwitchingHeart from "./SwitchingHeart";
import data from '../dummy.json'

const _pokemonData = JSON.parse(JSON.stringify(data));
const _fav_pokemons = _pokemonData.fav_pokemons;
console.log(_fav_pokemons);

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

function PokemonList() {
  return (
    <div className="PokemonList">
      {Object.entries(pokemonData).map(([id, name]) => (
        <div>
          <PokemonElement key={id} id={id} name={name} imgLink={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
          <SwitchingHeart className="HeartPositionCss" />
        </div>
      ))}
      {/* <div>
        {Object.entries(_fav_pokemons).map(([id, name,imgLink]) => (
          <PokemonElement key={id} id={id} name={name} imgLink={imgLink} />
        ))}
      </div> */}

      <div>
        <PokemonElement key={_fav_pokemons[0].id} id={_fav_pokemons[0].id} name={_fav_pokemons[0].name} imgLink={_fav_pokemons[0].imgLink} />
      </div>
    </div>
  )
}

export default PokemonList;
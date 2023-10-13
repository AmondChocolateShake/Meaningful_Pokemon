import React, { useEffect } from "react";
import PokemonElement from "./PokemonElement";
import './PokemonList.css'
import SwitchingHeart from "./SwitchingHeart";
import data from '../dummy.json'

const _pokemonData = JSON.parse(JSON.stringify(data));
// const _fav_pokemons = _pokemonData.fav_pokemons;
// console.log(_fav_pokemons);

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

let pokemonDataA = [
  { id: 1, name: '피카츄', type: '전기', owned: false, favorite: true },
  { id: 2, name: '파이리', type: '불', owned: false, favorite: false },
  { id: 3, name: '꼬부기', type: '물', owned: false, favorite: true },
];

let pokemonDataB = [
  { id: 4, name: '어니부기', type: '전기', owned: true, favorite: false },
  { id: 5, name: '브케인', type: '불', owned: true, favorite: true },
  { id: 6, name: '꼬링크', type: '물', owned: false, favorite: false }
];

function PokemonList() {
  return (
    <div className="PokemonList">
      {pokemonDataB.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonElement
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            owned={pokemon.owned}
            imgLink={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
          <SwitchingHeart
            className="HeartPositionCss"
            favorite={pokemon.favorite}
          />
        </div>
      ))}
    </div>
  )
}

export default PokemonList;
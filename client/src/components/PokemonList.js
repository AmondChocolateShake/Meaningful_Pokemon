import React from "react";
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
  { id: 1, name: '피카츄', type: '전기', owned: false, favorite: false },
  { id: 2, name: '파이리', type: '불', owned: false, favorite: false },
  { id: 3, name: '꼬부기', type: '물', owned: false, favorite: false },
];

let pokemonDataB = [
  { id: 1, name: '피카츄', type: '전기', owned: true, favorite: false },
  { id: 2, name: '파이리', type: '불', owned: true, favorite: false },
  { id: 3, name: '꼬부기', type: '물', owned: false, favorite: true },

];

function PokemonList() {
  return (
    <div className="PokemonList">
      {Object.entries(pokemonDataB).map(([{ id, name, type, owned, favorite }]) => (
        <div>
          <PokemonElement
            key={id}
            id={id}
            name={name}
            type={type}
            owned={owned}
            favorite={favorite}
            imgLink={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
          <SwitchingHeart className="HeartPositionCss" />
        </div>
      ))}
      {/* <div className="PokemonList">
        {_fav_pokemons.map((pokemon) => (
          <div>
            <PokemonElement key={pokemon.id} id={pokemon.id} name={pokemon.name} imgLink={pokemon.imgLink} />
            <SwitchingHeart className="HeartPositionCss" />
          </div>
        ))}
      </div> */}

      {/* <div>
        <PokemonElement key={_fav_pokemons[0].id} id={_fav_pokemons[0].id} name={_fav_pokemons[0].name} imgLink={_fav_pokemons[0].imgLink} />
      </div> */}
    </div>
  )
}

export default PokemonList;
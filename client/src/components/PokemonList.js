import React, { useEffect } from "react";
import PokemonElement from "./PokemonElement";
import './PokemonList.css'
import SwitchingHeart from "./SwitchingHeart";

import '../controller/PokemonController.js'
import '../model/pokeHandler.js'
import data from '../dummy.json'
import { pushPokeIntoFav, pushPokeIntoMyPoke } from "../model/pokeHandler.js";

const _pokemonData = JSON.parse(JSON.stringify(data));
// const _fav_pokemons = _pokemonData.fav_pokemons;
// console.log(_fav_pokemons);

let AllData = [
  { id: 1, name: '피카츄', type: '전기', owned: false, favorite: false },
  { id: 2, name: '파이리', type: '불', owned: false, favorite: false },
  { id: 3, name: '꼬부기', type: '물', owned: false, favorite: false },
  { id: 4, name: '어니부기', type: '전기', owned: false, favorite: false },
  { id: 5, name: '브케인', type: '불', owned: false, favorite: false },
  { id: 6, name: '꼬링크', type: '물', owned: false, favorite: false }
];

let myData = [
  { id: 4, name: '어니부기', type: '전기', owned: true, favorite: true },
  { id: 5, name: '브케인', type: '불', owned: false, favorite: false },
  { id: 6, name: '꼬링크', type: '물', owned: true, favorite: true }
];



AllData = AllData.map((pokemon) => {
  //유저 데이터에서 id과 name 값이 일치하면
  const matchingPokemon = myData.find((data) => data.id === pokemon.id && data.name === pokemon.name);
  if (matchingPokemon) {
    return {
      ...pokemon,
      owned: matchingPokemon.owned,
      favorite: matchingPokemon.favorite,
    };
  }
  else {
    return pokemon
  }
});


function PokemonList() {

  const handleFav = () => {
    pushPokeIntoFav();
  }
  const handleMine = (myPoke) => {
    console.log(myPoke)
    pushPokeIntoMyPoke(myPoke);
  }

  useEffect(() => {
    console.log("mount...")
    return () => {
      console.log("unmonut...")
    }
  }, [AllData])

  return (
    <div className="PokemonList">
      {AllData.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonElement
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            owned={pokemon.owned}
            imgLink={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            callback={handleMine} />
          <SwitchingHeart
            onClick={handleFav}
            className="HeartPositionCss"
            favorite={pokemon.favorite}
          />
        </div>
      ))}
    </div>
  )
}

export default PokemonList;
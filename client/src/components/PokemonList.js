import React, { useEffect, useState } from "react";
import PokemonElement from "./PokemonElement";
import "./PokemonList.css";
import SwitchingHeart from "./SwitchingHeart";

import "../controller/PokemonController.js";
import "../model/pokeHandler.js";
import {
  fetchPokeData,
  updateFavoritePokemons,
  updatePokemons,
} from "../controller/PokemonController.js";

// const _fav_pokemons = _pokemonData.fav_pokemons;
// console.log(_fav_pokemons);

function PokemonList() {
  // let AllData = [
  //   { id: 1, name: "피카츄", type: "전기", owned: false, favorite: false },
  //   { id: 2, name: "파이리", type: "불", owned: false, favorite: false },
  //   { id: 3, name: "꼬부기", type: "물", owned: false, favorite: false },
  //   { id: 4, name: "어니부기", type: "전기", owned: false, favorite: false },
  //   { id: 5, name: "브케인", type: "불", owned: false, favorite: false },
  //   { id: 6, name: "꼬링크", type: "물", owned: false, favorite: false },
  // ];

  // let myData = [
  //   { id: 4, name: "어니부기", type: "전기", owned: true, favorite: true },
  //   { id: 5, name: "브케인", type: "불", owned: false, favorite: false },
  //   { id: 6, name: "꼬링크", type: "물", owned: true, favorite: true },
  // ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getFetchPokeData = async () => {
    try {
      const fetchedData = await fetchPokeData();
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Data! :", error);
    }
  };

  useEffect(() => {
    if(loading) {
      console.log("first rendering complete.");
      getFetchPokeData();
    }
  }, [loading]);

  // data = data.map((pokemon) => {
  //   //기존 데이터와 유저 데이터 id 값 비교
  //   const matchingPokemon = myData.find((data) => data.id === pokemon.id);
  //   if (matchingPokemon) {
  //     return {
  //       ...pokemon,
  //       owned: matchingPokemon.owned,
  //       favorite: matchingPokemon.favorite,
  //     };
  //   } else {
  //     return pokemon;
  //   }
  // });
  // // 좋아요 포켓몬 데이터 핸들링
  // const handleFav = (pokemonId, favorite) => {
  //   const updatedData = { id: pokemonId, favorite: favorite };
  //   updateFavoritePokemons(updatedData);
  // };
  // //가진 포켓몬 데이터 핸들링
  // const handleMine = (myPoke) => {
  //   // console.log(myPoke)
  //   updatePokemons(myPoke);
  // };
  return (
    <div className="PokemonList">
      {data.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonElement
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            owned={pokemon.owned}
            imgLink={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            // callback={handleMine}
          />
          <SwitchingHeart
            className="HeartPositionCss"
            favorite={pokemon.favorite}
            // callback={(favorite) => handleFav(pokemon.id, favorite)}
          />
        </div>
      ))}
    </div>
  );
}

export default PokemonList;

import PokeModel from "./PokeModel.js";


let pokeModel = null;

export function initPokemonDatabase(all, fav, my) {
    pokeModel = new PokeModel(all, fav, my);
}

export function pushPokeIntoFav(poke) {
    pokeModel.pushFavPokemon(poke);
}

export function pushPokeIntoMyPoke(poke) {
    pokeModel.pushNewCollection(poke);
}

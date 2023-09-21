

export default class PokeModel{
    pokemons=[{}];
    fav_pokemons=[{}]
    my_pokemons=[{}]

    constructor(poke,fav,my){
        this.pokemons=poke;
        this.fav_pokemons=fav;
        this.my_pokemons=my;
    };

    // fetchGetPoke(endpoint){
    //     const path=endpoint;
        
    //     fetch(path)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.pokemons=data.pokemons;
    //         this.fav_pokemons=data.fav_pokemons;
    //         this.my_pokemons=data.my_pokemons;
    //     })
    // }


    //모든 포켓몬 리스트 반환
    getPokemons(){
        return this.pokemons;
    }

    //내가 좋아요 표시한 포켓몬 리스트 반환
    getFavoritePokemons(){
        return this.fav_pokemons;
    }

    //내가 수집한 포켓몬 리스트 반환
    getMyPokemons(){
        return this.my_pokemons;
    }

    //내가 수집한 포켓몬 삽입
    pushNewCollection(pokemon){
        this.my_pokemons.push(pokemon);
    }

    pushFavPokemon(fav){
        this.fav_pokemons=fav;
    }


}
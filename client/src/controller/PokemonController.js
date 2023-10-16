import PokeModel from '../model/PokeModel.js';

const pokeModel = new PokeModel([], [], []);

//모든 포켓몬 가져오기.
export function getAllPokemons(req, res) {
  const data = pokeModel.getPokemons();
  console.log(data)
}

//포켓몬 데이터 업데이트
export async function updatePokemon(updatedData) {
  pokeModel.pushNewCollection(updatedData);
  console.log(updatedData)
  try {
    const res = await fetch('http://localhost:3001/update-pokemons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData), // 클릭된 데이터를 서버로 보냄
    });

    if (res.ok) {
      console.log('서버로 업데이트 요청 성공');
    } else {
      console.error('서버로 업데이트 요청 실패');
    }
  } catch (error) {
    console.error('업데이트 요청 중 오류 발생', error);
  }
}

//좋아요 한 포켓몬 가져오기
export function getFavoritePokemons(req, res) {
  const data = pokeModel.getFavoritePokemons();
  console.log(data)
  res.json(data);
}


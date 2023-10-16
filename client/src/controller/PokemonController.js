import PokeModel from '../model/PokeModel.js';

const pokeModel = new PokeModel([], [], []);

//모든 포켓몬 가져오기.
export function getAllPokemons(req, res) {
  const data = pokeModel.getPokemons();
  console.log(data)
}

//포켓몬 데이터 업데이트
export async function updatePokemons(updatedData) {
  console.log(updatedData)
  try {
    const res = await fetch('http://localhost:3001/update-pokemons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
      // 클릭된 데이터를 서버로 보냄
    });

    if (res.ok) {
      console.log('서버로 업데이트 요청 성공');
      // 서버에서 업데이트된 데이터 가져오기 (예: 실제 데이터와 일치하도록 업데이트)
      const updatedDataFromServer = await res.json();

      // 로컬 모델 업데이트
      pokeModel.pushNewCollection(updatedDataFromServer);
    } else {
      console.error('서버로 업데이트 요청 실패');
    }
  } catch (error) {
    console.error('업데이트 요청 중 오류 발생', error);
  }
}

//좋아요 포켓몬 업데이트
export async function updateFavoritePokemons(updatedData) {
  try {
    // 서버로 좋아요한 포켓몬 데이터 업데이트 요청 보내기
    const res = await fetch('http://localhost:3001/update-favorite-pokemons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      console.log('서버로 좋아요한 포켓몬 업데이트 요청 성공');

      // 서버에서 업데이트된 좋아요한 포켓몬 데이터 가져오기
      const updatedDataFromServer = await res.json();

      // 로컬 모델 업데이트
      pokeModel.updateFavoritePokemon(updatedDataFromServer);
    } else {
      console.error('서버로 좋아요한 포켓몬 업데이트 요청 실패');
    }
  } catch (error) {
    console.error('좋아요한 포켓몬 업데이트 요청 중 오류 발생', error);
  }
}


//좋아요 한 포켓몬 가져오기
export function getFavoritePokemons(req, res) {
  const data = pokeModel.getFavoritePokemons();
  console.log(data)
  res.json(data);
}


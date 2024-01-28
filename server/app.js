const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001;

let AllData = [
  { id: 1, name: "피카츄", type: "전기", owned: false, favorite: false },
  { id: 2, name: "파이리", type: "불", owned: false, favorite: false },
  { id: 3, name: "꼬부기", type: "물", owned: false, favorite: false },
  { id: 4, name: "어니부기", type: "전기", owned: false, favorite: false },
  { id: 5, name: "브케인", type: "불", owned: false, favorite: false },
  { id: 6, name: "꼬링크", type: "물", owned: false, favorite: false },
];

app.use(cors())
app.use(express.json());

app.get('/', function (req, res) {
  res.json(AllData);
})

app.post('/update-pokemons', function (req, res) {
  const updatedData = req.body;
  const index = AllData.findIndex((item) => item.id === updatedData.id);
  if (index !== -1) {
    AllData[index] = updatedData;
  }

  console.log('업데이트된 데이터:', updatedData);
  res.json(updatedData);
});

app.post('/update-favorite-pokemons', function (req, res) {
  const updatedData = req.body; // 클라이언트에서 전송한 JSON 데이터를 받음

  // 여기에서 updatedData를 이용하여 서버 데이터를 업데이트

  // 예를 들어, updatedData의 id 값을 이용하여 해당 포켓몬을 찾아 업데이트할 수 있습니다.
  const index = AllData.findIndex((item) => item.id === updatedData.id);

  if (index !== -1) {
    // 해당 포켓몬을 업데이트
    AllData[index].favorite = updatedData.favorite;
  }

  console.log('업데이트된 좋아요 데이터:', updatedData);
  res.json(updatedData);
});

app.listen(PORT, () => {
  console.log("서버가 실행 중입니다.");
});
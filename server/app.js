const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001;


let AllData = [];
let myData = [];

app.use(cors())
app.use(express.json());

app.get('/', function (req, res) {
  res.json(AllData);
})

app.post('/update-pokemons', function (req, res) {
  const updatedData = req.body; // 클라이언트로부터 받은 업데이트된 데이터

  // 여기서 updatedData를 AllData 배열에 추가하거나 업데이트합니다.
  // 여기에서 데이터를 어떻게 다루는지에 따라서 로직을 추가해야 합니다.

  // 예: 해당 ID를 가진 객체를 찾아 업데이트
  const index = AllData.findIndex((item) => item.id === updatedData.id);
  if (index !== -1) {
    AllData[index] = updatedData;
  }

  console.log('업데이트된 데이터:', updatedData);
  res.json(updatedData);
});

app.listen(PORT, () => {
  console.log("서버가 실행 중입니다.");
});
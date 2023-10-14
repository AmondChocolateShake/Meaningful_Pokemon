const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001;

app.use(cors())

app.get('/', function (req, res) {
  res.json(AllData);
})

app.post('/post', function (req, res) {
})

app.listen(PORT, () => { console.log("asd") });

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
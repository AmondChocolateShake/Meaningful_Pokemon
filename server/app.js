import express from 'express'

const app = express()
const PORT = 3000;
app.get('/', function (req, res) {
  res.write("asd")
}
)
app.listen(PORT, () => { console.log("asd") });
const express = require('express')
const app = express()
const port = 3000
var mongoose = require("mongoose");
 require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_KEY, {
  useNewUrlParser: true,
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hola2', (req, res) => {
    res.send('Hello World!')
  })
  
  app.get('/hola', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


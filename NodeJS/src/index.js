const express = require('express')
const app = express()
const port = 8080

app.get('/', function (req, res, next) {
  res.json({status: 'UP'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

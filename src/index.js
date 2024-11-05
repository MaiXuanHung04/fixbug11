const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(morgan('combined'))

//Templates engine
app.engine('handlebars' , handlebars())
app.set('view engine','handlebars')
app.set('view', path.join(__dirname, 'view'))

app.get('/', (req, res) => {
  res.send('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
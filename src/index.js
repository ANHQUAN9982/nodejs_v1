const express = require('express')
const morgan = require('morgan')
const exhb = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//http logger
app.use(morgan('combined'))
//template engine
app.engine('handlebars', exhb());
app.set('view engine', 'handlebars')
//app.set('views', path.join(__dirname, 'views'));

//console.log('PATH: '+ path.join(__dirname, 'resource/views'))
app.set('views', path.join(__dirname, 'resource/views'))

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/trang-chinh', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
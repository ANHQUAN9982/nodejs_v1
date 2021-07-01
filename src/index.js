const express = require('express');
const morgan = require('morgan');
const exhb = require('express-handlebars');
const path = require('path');
const app = express();
const port = 8000;

const route = require('./router');
 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
//http logger
app.use(morgan('combined'));
//template engine
app.engine('handlebars', exhb());
app.set('view engine', 'handlebars');
//app.set('views', path.join(__dirname, 'views'));

//console.log('PATH: '+ path.join(__dirname, 'resource/views'))
app.set('views', path.join(__dirname, 'resource/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
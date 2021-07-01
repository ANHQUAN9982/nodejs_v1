// const ContactController = require('../app/controller/ContactController');
// const NewController = require('../app/controller/NewController');
const router2 = require('./PageSearch-Home');
const router5 = require('./PageContact_News');
function route(app){  
    // app.get('/', (req, res) => {
    //     res.render('home');
    //   })
    app.use('/PageSearch-Home', router2);
    app.use('/PageContact_News', router5);
    app.use('/', router5);
    //   app.get('/home', (req, res) => {
    //     res.render('home');
    //   })
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })
      // app.get('/contact', (req, res) => {
      //   res.render('contact');
      // })
      // app.get('/search', (req, res) => {
      //   console.log(req.query.q);
      //   res.render('search');
      // })
      // app.post('/search', (req, res) => {
      //   console.log(req.body);
      //   res.send('');
      // })
}
module.exports = route;
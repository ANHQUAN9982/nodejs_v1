// const ContactController = require('../app/controller/ContactController');
// const NewController = require('../app/controller/NewController');
const router2 = require('./G2_Menu_nav');
function route(app){  
    // app.get('/', (req, res) => {
    //     res.render('home');
    //   })
    app.use('/', router2);
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
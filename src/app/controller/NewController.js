class NewController {
    trangchu(req, res) {
        res.render('home');
    }
    tintuc(req, res) {
        res.render('news');
    }
    timkiem(req, res) {
        res.render('search');
    }
    lienhe(req, res) {
        res.render('contact');
    }
}
module.exports = new NewController;
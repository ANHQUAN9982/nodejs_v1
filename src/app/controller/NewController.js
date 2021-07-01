class NewController {
    timkiem(req, res) {
        res.render('search');
    }

    trangchu(req, res) {
        res.render('home');
    }
}
module.exports = new NewController;
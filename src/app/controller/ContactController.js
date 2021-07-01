class ContactController {
    // lienhe(req, res){
    //     res.render('contact');
    // }
    lienhe(req, res){
        res.render('contact');
    }
    tin(req, res){
        res.render('news');
    }
}
module.exports = new ContactController;
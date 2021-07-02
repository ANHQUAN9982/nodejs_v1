class Menu_navController {
    ungdung(req, res) {
        res.render('windows/apps');
    }

    windows_office(req, res) {
        res.render('windows/windows_office');
    }

    game_pc(req, res){
        res.render('windows/game_pc');
    }

    trang_chu(req, res){
        res.render('home');
    }
    // tin(req, res){
    //     res.render('news');
    // }
}
module.exports = new Menu_navController;
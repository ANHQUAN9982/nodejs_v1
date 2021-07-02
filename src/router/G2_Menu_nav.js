const express = require('express');
const {ungdung, windows_office, game_pc, trang_chu} = require('../app/controller/Menu_navController');

//tạo router con mới
const router2 = express.Router();

const ctl_tintuc = require('../app/controller/Menu_navController');

// route2.use('/home', ctl_tintuc.trangchu);
router2.use('/apps', ungdung);
router2.use('/windows_office', windows_office);
router2.use('/game_pc', game_pc);
router2.use('/', trang_chu);

module.exports = router2;
const express = require('express');
const { timkiem, trangchu} = require('../app/controller/NewController');

//tạo router con mới
const route2 = express.Router();

const ctl_tintuc = require('../app/controller/NewController');

// route2.use('/home', ctl_tintuc.trangchu);
route2.use('/search', timkiem);
route2.use('/', trangchu)

module.exports = route2;

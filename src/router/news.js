const express = require('express');
const { trangchu, tintuc } = require('../app/controller/NewController');
const route2 = express.Router();


const ctl_tintuc = require('../app/controller/NewController');

// route2.use('/home', ctl_tintuc.trangchu);
route2.use('/news', trangchu);


module.exports = route2;

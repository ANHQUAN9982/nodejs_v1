const express = require('express');
const { lienhe, tin } = require('../app/controller/ContactController');

//tạo router con mới
const router5 = express.Router();

const ctl_contact = require('../app/controller/ContactController');

// router.use('/contact', ctl_contact.lienhe);
router5.use('/contact', lienhe)
router5.use('/news', tin);

module.exports = router5;

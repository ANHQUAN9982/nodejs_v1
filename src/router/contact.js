const express = require('express');
const { timkiem } = require('../app/controller/ContactController');
const route = express.Router();


const ctl_contact = require('../app/controller/ContactController');

// router.use('/contact', ctl_contact.lienhe);
router.use('/search', timkiem);

module.exports = router;

var express = require('express');
var router = express.Router();
var ContactController = require('../app/controllers/ContactController');

router.get('/', ContactController.index)

module.exports = router

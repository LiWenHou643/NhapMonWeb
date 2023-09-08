var express = require('express');
var router = express.Router();
var IntroController = require('../app/controllers/IntroController');

router.get('/', IntroController.index)

module.exports = router

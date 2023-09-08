var express = require('express');
var router = express.Router();
var SigninController = require('../app/controllers/SigninController');

router.get('/', SigninController.index)

module.exports = router

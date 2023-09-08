var express = require('express');
var router = express.Router();
var SignupController = require('../app/controllers/SignupController');

router.get('/', SignupController.index)

module.exports = router

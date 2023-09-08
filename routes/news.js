var express = require('express');
var router = express.Router();
var NewsController = require('../app/controllers/NewsController');

router.get('/', NewsController.index)

module.exports = router

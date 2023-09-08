var express = require('express');
var router = express.Router();
var ProductController = require('../app/controllers/ProductController');

router.get('/', ProductController.index)

module.exports = router

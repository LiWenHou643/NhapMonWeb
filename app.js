var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { engine } = require('express-handlebars');

var route = require('./routes/index')

var app = express();

// view engine setup
app.engine('.hbs', engine({ 
  extname: '.hbs',
  helpers: {
    add(a,b) { return a + b }
  }
}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Router init
route(app)

module.exports = app;

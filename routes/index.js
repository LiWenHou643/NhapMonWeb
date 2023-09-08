var homeRouter = require('./home')
var introRouter = require('./intro')
var productRouter = require('./product')
var newsRouter = require('./news')
var signinRouter = require('./signin')
var signupRouter = require('./signup')
var contactRouter = require('./contact')

function route(app) {
    app.use('/contact', contactRouter)
    app.use('/signup', signupRouter)
    app.use('/signin', signinRouter)
    app.use('/news', newsRouter)
    app.use('/product', productRouter)
    app.use('/intro', introRouter)
    app.use('/home', homeRouter)
    app.use('/', homeRouter)
}
module.exports = route
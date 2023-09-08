class SigninController {
    // [GET] /
    index(req, res, next) {
        res.render('signin', {title: 'Sign In'});
    }
}
module.exports = new SigninController
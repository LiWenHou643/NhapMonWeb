class SignupController {
    // [GET] /
    index(req, res, next) {
        res.render('signup', {title: 'Sign Up'});
    }
}
module.exports = new SignupController
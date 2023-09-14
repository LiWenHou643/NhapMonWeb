class SignupController {
    // [GET] /
    index(req, res, next) {
        res.render('signup', {title: 'Đăng Ký'});
    }
}
module.exports = new SignupController
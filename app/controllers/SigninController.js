class SigninController {
    // [GET] /
    index(req, res, next) {
        res.render('signin', {title: 'Đăng nhập'});
    }
}
module.exports = new SigninController
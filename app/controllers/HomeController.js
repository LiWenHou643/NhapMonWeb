class HomeController {
    // [GET] /
    index(req, res, next) {
        res.render('home', {title: 'Trang chủ'});
    }
}
module.exports = new HomeController
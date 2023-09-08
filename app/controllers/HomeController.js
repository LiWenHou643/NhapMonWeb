class HomeController {
    // [GET] /
    index(req, res, next) {
        res.render('home', {title: 'Home'});
    }
}
module.exports = new HomeController
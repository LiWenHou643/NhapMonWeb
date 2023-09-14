class IntroController {
    // [GET] /
    index(req, res, next) {
        res.render('intro', {title: 'Giới Thiệu'});
    }
}
module.exports = new IntroController
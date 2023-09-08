class IntroController {
    // [GET] /
    index(req, res, next) {
        res.render('intro', {title: 'Introduction'});
    }
}
module.exports = new IntroController
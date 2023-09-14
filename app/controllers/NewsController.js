class NewsController {
    // [GET] /
    index(req, res, next) {
        res.render('news', {title: 'Tin Tức'});
    }
}
module.exports = new NewsController
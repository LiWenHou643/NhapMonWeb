class NewsController {
    // [GET] /
    index(req, res, next) {
        res.render('news', {title: 'News'});
    }
}
module.exports = new NewsController
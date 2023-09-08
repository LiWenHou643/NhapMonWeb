class ContactController {
    // [GET] /
    index(req, res, next) {
        res.render('contact', {title: 'Contact'});
    }
}
module.exports = new ContactController
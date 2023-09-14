class ContactController {
    // [GET] /
    index(req, res, next) {
        res.render('contact', {title: 'Liên Hệ'});
    }
}
module.exports = new ContactController
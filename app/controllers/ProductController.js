class ProductController {
    // [GET] /
    index(req, res, next) {
        res.render('product', {title: 'Sản Phẩm'});
    }
}
module.exports = new ProductController
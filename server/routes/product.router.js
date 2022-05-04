const Router = require('express');
const router = new Router()
const productController = require('../controllers/product.controller');
// const jwtCheck = require('../middleware/jwtCheck')

router.get('/product', productController.getProducts)

module.exports = router